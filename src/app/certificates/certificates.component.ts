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
  selected: number;

  constructor(private certificateService: CertificateService) { }
  // tslint:disable-next-line:typedef


  ngOnInit(): void {
    this.certificateService.getCertificates().subscribe(data => this.certificates = data);
  }


}
