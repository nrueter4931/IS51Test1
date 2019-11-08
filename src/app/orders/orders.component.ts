import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlexModalService } from '../shared-components/flex-modal/flex-modal.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
// interface IOrders {
//   pid: string;
//   image: string;
//   description: string;
//   price: number;
//   quantity: number;
// }
export class OrdersComponent implements OnInit {

  orders: Array<any> = [{
    'pid': '1',
    'image': 'assets/sm_android.jpeg',
    'description': 'Android',
    'price': 150.00,
    'quantity': 2
  }, {
    'pid': '2',
    'image': 'assets/sm_iphone.jpeg',
    'description': 'IPhone',
    'price': 200.00,
    'quantity': 1
  }, {
    'pid': '3',
    'image': 'assets/sm_windows.jpeg',
    'description': 'Windows Phone',
    'price': 110.00,
    'quantity': 2
  }];

  constructor(
    private router: Router,
    private flexModal: FlexModalService,
    private http: Http
  ) {
  }
   loadItems() {
     this.orders = [{
      pid: '1',
      image: 'assets/sm_android.jpeg',
      description: 'Android',
      price: 150.00,
      quantity: 2
    }, {
      pid: '2',
      image: 'assets/sm_iphone.jpeg',
      description: 'IPhone',
      price: 200.00,
      quantity: 1
    }, {
      pid: '3',
      image: 'assets/sm_windows.jpeg',
      description: 'Windows Phone',
      price: 110.00,
      quantity: 2
    }];
    return this.orders;
  }

  delete(index: number) {
    this.orders.splice(index, 1);
  }

  clear() {
    this.orders = []
  }

  add() {
    let android, iPhone, WinPhone
    this.orders.unshift({pid: 1})

  }

  async ngOnInit() {

  }

}
