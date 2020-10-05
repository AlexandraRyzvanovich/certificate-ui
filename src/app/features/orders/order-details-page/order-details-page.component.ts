import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../../../core/services/order.service';
import {Order} from '../../../model/order';

@Component({
  selector: 'app-order-details-page',
  templateUrl: './order-details-page.component.html',
  styleUrls: ['./order-details-page.component.scss', '../../../app.component.scss']
})
export class OrderDetailsPageComponent implements OnInit {
  order: Order;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const orderId = Number(params.get('id'));
        this.orderService.getOrderInfo(orderId).subscribe((resp: Order) => {
          this.order = resp;
          this.order.certificate = resp.certificate;
        });
      });
  }
}
