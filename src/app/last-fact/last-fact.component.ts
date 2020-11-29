import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-last-fact',
  templateUrl: './last-fact.component.html',
  styleUrls: ['./last-fact.component.scss']
})
export class LastFactComponent implements OnInit {

  lastfact = '';
  date = '';

  constructor(private cookie: CookieService) { }

  ngOnInit(): void {
    this.lastfact = this.cookie.get('last-cat-fact');
    this.date = this.cookie.get('last-cat-fact-date');
  }

}
