import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Order} from '../../model/order';
import {Certificate} from '../../model/certificate';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  api = 'http://localhost:8080/users/';
  order: Order;

  constructor(private http: HttpClient, private router: Router) { }

  getOrders(): Observable<Order[]> {
    const id = localStorage.getItem('id');
    return this.http.get(this.api + id + '/orders').pipe(map(data => {
      return data['items'].content;
    }));
  }

  getOrderInfo(id: number) {
    const userId = localStorage.getItem('id');
    return this.http.get(this.api + userId + '/orders/' + id);
  }

  createOrder(certificates: Certificate[]) {
    const userId = localStorage.getItem('id');
    this.http.post(this.api + userId + '/orders/', {certificates}).subscribe();
    localStorage.removeItem('cart' + userId);
  }
}
