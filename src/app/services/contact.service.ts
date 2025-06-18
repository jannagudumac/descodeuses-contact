import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiURL = 'api/contacts';
  constructor(private http: HttpClient) { }


  getContacts() {
    return this.http.get<any[]>(this.apiURL)
  };

  getContact(id: number){
    return this.http.get<any>(this.apiURL + '/' + id);
  };

  updateContact(contact: any){
    return this.http.put<any>(this.apiURL + '/' + contact.id, contact);
  }


  addContact(contact: any) {
    return this.http.post<any>(this.apiURL, contact); 
  }
  deleteContact(contact: any){
    return this.http.delete<any>(this.apiURL + '/' + contact.id);
  }
    
}


