import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-catfacts',
  templateUrl: './catfacts.component.html',
  styleUrls: ['./catfacts.component.scss']
})
export class CatfactsComponent implements OnInit {

  public fact = '';
  public cat: any;

  constructor(private http: HttpClient, private cookies: CookieService) {
  }

  apiCall(): void{
    this.http.get<any>('https://catfact.ninja/fact').subscribe(fact => {
      this.fact = fact.fact;
      this.cookies.set('last-cat-fact', fact.fact);
      this.cookies.set('last-cat-fact-date', Date.now().toString());
    });
  }

  ngOnInit(): void {
  }

}
