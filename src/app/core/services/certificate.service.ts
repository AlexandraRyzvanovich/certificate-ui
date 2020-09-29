import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {Certificate} from '../../model/certificate';
import {Status} from 'tslint/lib/runner';
import {Tag} from '../../model/tag';
import {CertificateParams} from '../../features/certificates/certificate-update-page/certificate-update-page.component';
import {SearchParams} from '../../features/certificates/search-certificates/search-certificates.component';

@Injectable({
  providedIn: 'root'
})

export class CertificateService {
  api = 'http://localhost:8080/certificates/';

  constructor(private http: HttpClient, private router: Router) {
  }

  getCertificates(page: number, searchParams: SearchParams): Observable<Certificate[]> {
    return this.http.get<Certificate[]>(this.api + '?size=10&page=' + page).pipe(map(data => {
      const certificates = data['items'].content;
      // tslint:disable-next-line:only-arrow-functions typedef
      return certificates.map(function(cert: any) {
        return {
          name: cert.name, id: cert.id, description: cert.description,
          price: cert.price, creationDate: cert.creationDate, modificationDate: cert.modificationDate, validDays: cert.validDays
        };
      });
    }));
  }

  // tslint:disable-next-line:typedef
  createCertificate(name: string, description: string, price: number, validDays: number, tagIds: Tag[]) {
    this.http.post(this.api, {name, description, price, validDays, tagIds})
      .subscribe((resp: Status) => {
        this.router.navigate(['certificates']);
      });
  }

  // tslint:disable-next-line:typedef
  addCertificateToCart(certificateName: string, certificateId: number) {
    localStorage.setItem(certificateName, String(certificateId));
  }

  // tslint:disable-next-line:typedef
  getCertificateDetailsComponent(id: number) {
    localStorage.setItem('certificate-details-page', String(id));
    this.router.navigate(['certificate-details-page/' + id]);
  }

  // tslint:disable-next-line:typedef
  getCertificate(id: number): Observable<Certificate> {
    return this.http.get<Certificate>(this.api + id).pipe(map(data => {
      const cert = data;
      return cert;
    }));
  }
  // tslint:disable-next-line:typedef
  updateCertificate(id: number, certificateParams: CertificateParams) {
    this.http.post(this.api + id, certificateParams).subscribe((resp: Status) => {
      this.router.navigate(['certificates']);
    });
  }
}
