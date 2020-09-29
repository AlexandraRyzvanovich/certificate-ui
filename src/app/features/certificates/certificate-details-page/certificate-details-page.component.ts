import { Component, OnInit } from '@angular/core';
import {CertificateService} from '../../../core/services/certificate.service';
import {Certificate} from '../../../model/certificate';
import {Order} from '../../../model/order';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-certificate-form',
  templateUrl: './certificate-details-page.component.html',
  styleUrls: ['./certificate-details-page.component.scss', '../../../app.component.scss']
})
export class CertificateDetailsPageComponent implements OnInit {
  id: number = Number(localStorage.getItem('certificate-details-page'));
  certificate: Certificate = null;


  constructor(private certificateService: CertificateService,
              private route: ActivatedRoute,
              private router: Router) { }

  // tslint:disable-next-line:typedef
  addCertificateToCart(certificateName: string, certificateId: number) {
    this.certificateService.addCertificateToCart(certificateName, certificateId);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const certificateId = Number(params.get('id'));
        this.certificateService.getCertificate(certificateId).subscribe((resp: Certificate) => {
          this.certificate = resp;
        });
      });
  }
}
