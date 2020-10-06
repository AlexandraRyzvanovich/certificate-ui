import {Component, Inject, OnInit} from '@angular/core';
import {CertificateService} from '../../../core/services/certificate.service';
import {Certificate} from '../../../model/certificate';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogCartComponent} from './dialog-cart/dialog-cart.component';

export interface DialogData {
  total: string;
  certificates: Certificate[];
}
@Component({
  selector: 'app-card-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  certificatesToBuy: Certificate[];
  total: number;

  constructor(private certificateService: CertificateService,
              private router: Router,
              public dialog: MatDialog) { }
  back(): void {
    this.router.navigateByUrl('/certificates');
  }
  openDialog(): void {
    this.dialog.open(DialogCartComponent, {
      width: '250px',
      data: {total: this.total, certificates: this.certificatesToBuy}
    });
  }
  ngOnInit(): void {
  this.certificatesToBuy = this.certificateService.getCertificateCard();
  this.total = this.certificateService.getTotalPrice();
  }
}

