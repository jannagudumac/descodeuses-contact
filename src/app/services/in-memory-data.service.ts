import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class InMemoryDataService {
  private listeContact = [
    {
      id: 7,
      prenom: 'Bob',
      nom: 'Bobertus',
      email: 'bobertus@gmail.com',
      propic: 'assets/propic1.jpg',
    },
    {
      id: 88,
      prenom: 'Anna',
      nom: 'Malina',
      email: 'anmalina@gmail.com',
      propic: 'assets/propic2.jpg',
    },
    {
      id: 5,
      prenom: 'Simo',
      nom: 'Bernardo',
      email: 'sbernardo@gmail',
      propic: 'assets/propic3.jpg',
    },
    {
      id: 9,
      prenom: 'Alex',
      nom: 'Chat',
      email: 'alexchat@gmail.com',
      propic: 'assets/propic4.jpg',
    },
  ];

getContacts(): any[] {
  return this.listeContact;
}


}

