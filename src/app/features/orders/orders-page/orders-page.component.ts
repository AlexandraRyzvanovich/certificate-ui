import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../core/services/order.service';
import {Order} from '../../../model/order';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss', '../../../app.component.scss']
})
export class OrdersPageComponent implements OnInit {
  orders: Order[];

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(data => this.orders = data);
  }
}
