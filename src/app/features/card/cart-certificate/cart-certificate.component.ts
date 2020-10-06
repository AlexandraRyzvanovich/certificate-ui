import {Component, Input, OnInit} from '@angular/core';
import {Certificate} from '../../../model/certificate';
import {CertificateService} from '../../../core/services/certificate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-certificate',
  templateUrl: './cart-certificate.component.html',
  styleUrls: ['./cart-certificate.component.scss', '../../../app.component.scss']
})
export class CartCertificateComponent implements OnInit {
  @Input() certificate: Certificate;

  constructor(private certificateService: CertificateService,
              private router: Router) {
  }

  removeFromCard(certificate: Certificate): void {
    this.certificateService.removeFromCard(certificate);
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
