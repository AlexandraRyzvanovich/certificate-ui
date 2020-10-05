import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../card-page.component';
import {OrderService} from '../../../../core/services/order.service';
import {Certificate} from '../../../../model/certificate';

@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-card.component.html',
  styleUrls: ['./dialog-card.component.scss', '../../../../app.component.scss']
})
export class DialogCardComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private orderService: OrderService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onOkClick(certificates: Certificate[]): void {
    this.orderService.createOrder(certificates);
  }

  ngOnInit(): void {
  }

}
