import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../../model/order';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss', '../../../app.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() order: Order;

  ngOnInit(): void {
  }

  getDetails(id: number): void {
    const url = '/orders/' + id + '/details';
    this.router.navigateByUrl(url);
  }

}
