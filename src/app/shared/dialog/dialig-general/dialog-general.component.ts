import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../../../features/card/card-page/cart-page.component';
import {OrderService} from '../../../core/services/order.service';
import {Certificate} from '../../../model/certificate';
import {DialogGeneralData} from './dialog-general-data';

@Component({
  selector: 'app-dialig-success',
  templateUrl: './dialog-general.component.html',
  styleUrls: ['./dialog-general.component.scss']
})
export class DialogGeneralComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<DialogGeneralComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogGeneralData,
    private orderService: OrderService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onOkClick(certificates: Certificate[]): void {
    this.orderService.createOrder(certificates);
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
