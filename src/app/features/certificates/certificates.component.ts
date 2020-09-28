import {ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {CertificateService} from '../../core/services/certificate.service';
import {Certificate} from '../../model/certificate';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {CollectionViewer} from '@angular/cdk/collections';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss', '../../app.component.scss'],
})

export class CertificatesComponent implements OnInit {
  certificates: Certificate[] = [];

  constructor(private certificateService: CertificateService,
              private route: ActivatedRoute) { }

  // tslint:disable-next-line:typedef
  addCertificateToCart(certificateName: string, certificateId: number) {
    this.certificateService.addCertificateToCart(certificateName, certificateId);
  }
  // tslint:disable-next-line:typedef
  getCertificateDetails(id: number) {
    this.certificateService.getCertificateDetailsComponent(id);
  }
  ngOnInit(): void {
    this.certificateService.getCertificates().subscribe(data => this.certificates = data);
  }

}
