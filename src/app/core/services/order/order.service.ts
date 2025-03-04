import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private httpClient: HttpClient) {}
  specialChar: string = '#';
  encodedChar: string = encodeURIComponent(this.specialChar);
  myToken: any = localStorage.getItem('userToken');
  checkOutSession(id: string, data: object): Observable<any> {
    return this.httpClient.post(
      `${environment.baseUrl}api/v1/orders/checkout-session/${id}?url=https://e-commerce-app-8545.vercel.app/${this.encodedChar}`,
      {
        shippingAddress: data,
      },
      {
        headers: {
          token: this.myToken,
        },
      }
    );
  }

  getUserOrders(id: string): Observable<any> {
    return this.httpClient.get(
      `${environment.baseUrl}api/v1/orders/user/${id}`
    );
  }
}
