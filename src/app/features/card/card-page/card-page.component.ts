import {Component, Inject, OnInit} from '@angular/core';
import {CertificateService} from '../../../core/services/certificate.service';
import {Certificate} from '../../../model/certificate';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogCardComponent} from './dialog-card/dialog-card.component';

export interface DialogData {
  total: string;
  certificates: Certificate[];
}
@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss']
})
export class CardPageComponent implements OnInit {
  certificatesToBuy: Certificate[];
  total: number;

  constructor(private certificateService: CertificateService,
              private router: Router,
              public dialog: MatDialog) { }
  back(): void {
    this.router.navigateByUrl('/certificates');
  }
  openDialog(): void {
    this.dialog.open(DialogCardComponent, {
      width: '250px',
      data: {total: this.total, certificates: this.certificatesToBuy}
    });
  }
  ngOnInit(): void {
  this.certificatesToBuy = this.certificateService.getCertificateCard();
  this.total = this.certificateService.getTotalPrice();
  }
}

