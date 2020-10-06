import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../../../core/services/order.service';
import {Order} from '../../../model/order';
import {Certificate} from '../../../model/certificate';
import {CertificateService} from '../../../core/services/certificate.service';
import {MatDialog} from '@angular/material/dialog';
import {CartDialogComponent} from '../../../shared/cart-dialog/cart-dialog.component';

@Component({
  selector: 'app-order-details-page',
  templateUrl: './order-details-page.component.html',
  styleUrls: ['./order-details-page.component.scss', '../../../app.component.scss']
})
export class OrderDetailsPageComponent implements OnInit {
  order: Order;
  certificates: Certificate[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private orderService: OrderService,
              private certificateService: CertificateService,
              public dialog: MatDialog) {
  }
  addToCart(certificate: Certificate): void {
    this.certificateService.addCertificateToCart(certificate);
  }
  openDialog() {
    this.dialog.open(CartDialogComponent);
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const orderId = Number(params.get('id'));
        this.orderService.getOrderInfo(orderId).subscribe((resp: Order) => {
          this.order = resp;
          this.certificates = resp.certificates;
        });
      });
  }
}
