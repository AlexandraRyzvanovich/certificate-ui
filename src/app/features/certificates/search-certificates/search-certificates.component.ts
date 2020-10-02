import {
  Component,
  HostListener, OnDestroy,
  OnInit,
} from '@angular/core';
import {CertificateService} from '../../../core/services/certificate.service';
import {ActivatedRoute} from '@angular/router';
import {Certificate} from '../../../model/certificate';
import {Subscription} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';

export interface SearchParams {
  text: string;
  tag: string;
}
@Component({
  selector: 'app-certificates',
  templateUrl: './search-certificates.component.html',
  styleUrls: ['./search-certificates.component.scss'],
})

export class SearchCertificatesComponent implements OnInit, OnDestroy {

  public certificates: Certificate[] = [];
  public isAuth: boolean;
  private cSub: Subscription;
  private currentPage = 1;
  private certificateNameElement: HTMLInputElement;
  private tagNameElement: HTMLInputElement;
  private searchParams: SearchParams = { text: '', tag: '' };

  constructor(private certificateService: CertificateService) {
  }

  ngOnInit(): void {
    this.cSub = this.certificateService.getCertificates(this.currentPage++, this.searchParams)
      .subscribe(data => this.certificates = data);
  }
  ngOnDestroy(): void {
    if (this.cSub) {
      this.cSub.unsubscribe();
    }
  }
  private loadCertificates(): void {
    this.cSub = this.certificateService.getCertificates(this.currentPage++, this.searchParams)
      .subscribe(data => {
        this.certificates = this.certificates.concat(data);
      });
  }
  @HostListener('window:scroll', [])
  public loadCertificatesAfterScroll(): void {
    if (window.pageYOffset + document.documentElement.clientHeight === document.documentElement.scrollHeight) {
      this.loadCertificates();
    }
  }

  @HostListener('window:input', ['$event'])
  public search(event: Event): void {
    setTimeout(() => {
      const element = (event.target as HTMLInputElement);
      if (element.type === 'search') {
        this.certificateNameElement = element;
        this.searchParams.text = element.value.toString();
      }
      if (element.type === 'select-one') {
        this.tagNameElement = element;
        this.searchParams.tag = element.value.toString();
      }
      this.currentPage = 1;
      this.certificates = [];
      this.loadCertificates();
    }, 1000);
  }
}
