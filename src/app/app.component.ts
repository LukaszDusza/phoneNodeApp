import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{


  
  constructor(private http: HttpClient) { }
  
  title = 'Hello world ';
  contacts = new Array<Contacts>();
  
  ngOnInit(): void {
    this.getContacts();

  }

  getContacts() {
    this.contacts = [];

    this.http.get<Array<Contacts>>("http://localhost:8080/api/dto/contacts")
      .subscribe(r => {
        r.map(res => this.contacts.push(res));
      }, err => {
        //gdy napotka blad
      }, () => {
        console.log(this.contacts);
        //odpala sie gdy skonczy sie subscribe
      })
  }
}



export class Contacts {
  name: string;
  surname: string;
  number: number;
}


