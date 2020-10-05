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
  certificate: Certificate = null;


  constructor(private certificateService: CertificateService,
              private route: ActivatedRoute,
              private router: Router) { }

  addCertificateToCard(certificate: Certificate): void {
    this.certificateService.addCertificateToCart(certificate);
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
