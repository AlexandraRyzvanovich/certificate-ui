import { Component, OnInit } from '@angular/core';
import {Certificate} from '../module/certificate';
import {CertificateService} from '../services/certificate/certificate.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss', '../app.component.scss'],
  providers: [CertificateService]
})
export class CertificatesComponent implements OnInit {
  certificates: Certificate[] = [];

  constructor(private certificateService: CertificateService) { }

  // tslint:disable-next-line:typedef
  addCertificateToCart(certificateName: string, certificateId: number) {
    this.certificateService.addCertificateToCart(certificateName, certificateId);
  }


  ngOnInit(): void {
    this.certificateService.getCertificates().subscribe(data => this.certificates = data);
  }


}
