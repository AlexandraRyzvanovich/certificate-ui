import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Certificate} from '../../../model/certificate';
import {CertificateService} from '../../../core/services/certificate.service';
import {AuthService} from '../../../core/services/auth.service';
import {CartDialogComponent} from '../../../shared/cart-dialog/cart-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-certificate-component',
  templateUrl: './certificate-component.component.html',
  styleUrls: ['./certificate-component.component.scss', '../../../app.component.scss']
})
export class CertificateComponentComponent implements OnInit {

  constructor(private router: Router,
              private certificateService: CertificateService,
              private authService: AuthService,
              private dialog: MatDialog) { }
  @Input() certificate: Certificate;
  role: string;

  ngOnInit(): void {
    this.role = this.authService.getRole();

  }
  getCertificateDetails(id: number): void {
    const url = '/certificates/' + id + '/details';
    this.router.navigateByUrl(url);
  }
  addCertificateToCard(certificate: Certificate): void {
    this.certificateService.addCertificateToCart(certificate);
  }
  openDialog(): void {
    this.dialog.open(CartDialogComponent);
  }

  getEditCertificatePage(id: number): void {
    const url = '/certificates/' + id + '/update';
    this.router.navigateByUrl(url);
  }
}
