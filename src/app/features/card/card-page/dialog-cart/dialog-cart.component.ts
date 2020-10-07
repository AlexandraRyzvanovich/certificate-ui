import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../cart-page.component';
import {OrderService} from '../../../../core/services/order.service';
import {Certificate} from '../../../../model/certificate';

@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-cart.component.html',
  styleUrls: ['./dialog-cart.component.scss', '../../../../app.component.scss']
})
export class DialogCartComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogCartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
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
