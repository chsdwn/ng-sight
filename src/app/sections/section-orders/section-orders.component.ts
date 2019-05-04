import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    { id: 1,
      customer: {id: 1, name: 'Ahmet', state: 'Adana', email: 'mail@mail.com'},
      total: 120,
      placed: new Date(2019, 5, 1),
      fulfilled:  new Date(2016, 5, 4)
    },
    { id: 2,
      customer: {id: 2, name: 'Mehmet', state: 'Konya', email: 'mail@mail.com'},
      total: 260,
      placed: new Date(2019, 1, 13),
      fulfilled:  new Date(2016, 1, 14)
    },
    { id: 3,
      customer: {id: 3, name: 'Ali', state: 'Kahramanmaraş', email: 'mail@mail.com'},
      total: 80,
      placed: new Date(2019, 5, 13),
      fulfilled:  new Date(2016, 5, 17)
    },
    { id: 4,
      customer: {id: 4, name: 'Veli', state: 'Şanlıurfa', email: 'mail@mail.com'},
      total: 170,
      placed: new Date(2018, 7, 12),
      fulfilled:  new Date(2016, 8, 20)
    },
    { id: 5,
      customer: {id: 5, name: 'Hasan', state: 'Sivas', email: 'mail@mail.com'},
      total: 310,
      placed: new Date(2018, 2, 1),
      fulfilled:  new Date(2016, 2, 15)
    },
    { id: 6,
      customer: {id: 6, name: 'Hüseyin', state: 'Kayseri', email: 'mail@mail.com'},
      total: 150,
      placed: new Date(2018, 1, 1),
      fulfilled:  new Date(2018, 1, 3)
    }
  ];

  ngOnInit() {
  }

}
