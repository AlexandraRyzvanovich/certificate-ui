import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import {CertificateService} from '../../../core/services/certificate.service';
import {Certificate} from '../../../model/certificate';
import {ActivatedRoute} from '@angular/router';
import {debounce} from 'rxjs/operators';

@Component({
  selector: 'app-certificates',
  templateUrl: './search-certificates.component.html',
  styleUrls: ['./search-certificates.component.scss', '../../../app.component.scss'],
})

export class SearchCertificatesComponent implements OnInit, AfterViewInit {

  constructor(private certificateService: CertificateService,
              private route: ActivatedRoute) {
  }

  @ViewChild('scrollframe') scrollFrame: ElementRef;
  certificates: Certificate[] = [];
  private scrollContainer: any;
  loading = false;
  private currentPage: number;
  private debounceCertificateLoading = debounce(() => {
    if (this.isEndOfPage() && !this.loading) {
      this.loading = true;
      setTimeout(() => {
        this.currentPage = this.currentPage + 1;
        this.certificates = this.certificates.concat(this.certificateService.getCertificates(this.currentPage));
        this.loading = false;
      }, 200);
    }
  }, 100);

  ngAfterViewInit(): void {
    this.scrollContainer = this.scrollFrame.nativeElement;
  }

  // tslint:disable-next-line:typedef
  addCertificateToCart(certificateName: string, certificateId: number) {
    this.certificateService.addCertificateToCart(certificateName, certificateId);
  }

  // tslint:disable-next-line:typedef
  getCertificateDetails(id: number) {
    this.certificateService.getCertificateDetailsComponent(id);
  }

  @HostListener('mousewheel', ['$event']) onMousewheel(event) {
    this.debounceCertificateLoading();
  }

  isEndOfPage() {
    const coords = this.scrollContainer.getBoundingClientRect();
    const windowHeight = document.documentElement.clientHeight;
    return coords.bottom - 10 < windowHeight && coords.bottom > 0;
  }

  ngOnInit(): void {
    this.currentPage = 1;
    this.loading = true;
    this.certificates = this.certificateService.getCertificates(this.currentPage);
    this.loading = false;
  }
}
