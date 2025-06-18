import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService  implements InMemoryDbService {
listeContact : Contact[] = [
    {
      id: 7,
      surname: 'Bob',
      name: 'Bobertus',
      email: 'bobertus@gmail.com',
      propic: 'assets/propic3.PNG',
      tel: '0123456789',
    },
    {
      id: 88,
      surname: 'Anna',
      name: 'Malina',
      email: 'anmalina@gmail.com',
      propic: 'assets/propic2.PNG',
      tel: '0453289300',
    },
    {
      id: 5,
      surname: 'Simo',
      name: 'Bernardo',
      email: 'sbernardo@gmail',
      propic: 'assets/propic4.PNG',
      tel: '0037356789',
    },
    {
      id: 9,
      surname: 'Alex',
      name: 'Chat',
      email: 'alexchat@gmail.com',
      propic: 'assets/propic1.PNG',
      tel: '0128659383',
    },
  ];

  constructor() { }

  createDb() {
    return {
      contacts: this.listeContact
    };
}
}
