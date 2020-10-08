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
  api = 'http://localhost:8080/certificates';

  constructor(private http: HttpClient, private router: Router) {
  }

  getCertificates(page: number, searchParams: SearchParams): Observable<Certificate[]> {
    let httpParams: HttpParams = new HttpParams();
    if (searchParams.tag !== '') {
      httpParams = httpParams.set('tags', searchParams.tag);
    }
    if (searchParams.text !== '') {
      httpParams = httpParams.set('text', searchParams.text);
    }

    httpParams = httpParams.set('size', '10');
    httpParams = httpParams.set('page', page.toString());
    return this.http.get<Certificate[]>(this.api, {params: httpParams}).pipe(map(data => {
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

  createCertificate(body: any){
    return this.http.post(this.api, body);
  }

  // tslint:disable-next-line:typedef
  addCertificateToCart(certificate: Certificate) {
    const userId = localStorage.getItem('id');
    // tslint:disable-next-line:prefer-const
    let certs: Certificate[] = this.getCertificateCard();
    certs.push(certificate);
    localStorage.removeItem('cart' + userId);
    localStorage.setItem('cart' + userId, JSON.stringify(certs));
  }

  getTotalPrice(): number {
    const certs: Certificate[] = this.getCertificateCard();
    let total = 0;
    certs.forEach(cert => {
      total += cert.price;
    });
    return total;
  }


  removeFromCard(certificate: Certificate): void {
    const userId = localStorage.getItem('id');
    const card: Certificate[] = this.getCertificateCard();
    const certificateFromCard = card.find(elem => elem.id === certificate.id);
    if (certificateFromCard) {
        const index = card.findIndex(elem => elem.id === certificateFromCard.id);
        card.splice(index, 1);
    }
    localStorage.removeItem('cart' + userId);
    localStorage.setItem('cart' + userId, JSON.stringify(card));
  }

  getCertificateCard(): Certificate[] {
    const userId = localStorage.getItem('id');
    const stringCertificate = localStorage.getItem('cart' + userId);
    let certificates: Certificate[];
    if (stringCertificate !== null) {
      certificates = JSON.parse(stringCertificate);
    } else {
      certificates = [];
    }
    return certificates;
  }

  // tslint:disable-next-line:typedef
  getCertificate(id: number): Observable<Certificate> {
    return this.http.get<Certificate>(this.api + '/' + id).pipe(map(data => {
      const cert = data;
      return cert;
    }));
  }

  // tslint:disable-next-line:typedef
  updateCertificate(id: number, certificateParams: CertificateParams) {
   return this.http.post(this.api + '/' + id, certificateParams);
  }
}
