import { Component, OnInit } from '@angular/core';
import {CertificateService} from '../../../core/services/certificate.service';
import {Certificate} from '../../../model/certificate';

@Component({
  selector: 'app-certificate-form',
  templateUrl: './certificate-form.component.html',
  styleUrls: ['./certificate-form.component.scss', '../../../app.component.scss']
})
export class CertificateFormComponent implements OnInit {
  id: number = Number(localStorage.getItem('certificate-details'));
  certificate: Certificate = null;
  creationDate: object = null;
  validDays: number = null;

  constructor(private certificateService: CertificateService) { }

  // tslint:disable-next-line:typedef
  addCertificateToCart(certificateName: string, certificateId: number) {
    this.certificateService.addCertificateToCart(certificateName, certificateId);
  }

  ngOnInit(): void {
    this.certificateService.getCertificate(this.id).subscribe(data => this.certificate = data);
  }
}
