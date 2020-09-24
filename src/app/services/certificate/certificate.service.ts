import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Certificate} from '../../module/certificate';
import {Status} from 'tslint/lib/runner';
import {Tag} from '../../module/tag';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  api = 'http://localhost:8080/certificates';
  constructor(private http: HttpClient, private router: Router) { }

  getCertificates(): Observable<Certificate[]> {
    return this.http.get<Certificate[]>(this.api + '?size=10&page=1').pipe(map(data => {
      const certificates = data['items'].content;
      // tslint:disable-next-line:only-arrow-functions typedef
      return certificates.map(function(cert: any) {
        return {name: cert.name, id: cert.id, description: cert.description,
          price: cert.price, creationDate: cert.creationDate, modificationDate: cert.modificationDate, validDays: cert.validDays};
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
}
