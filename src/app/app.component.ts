import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tarea5';
  public fact = '';
  public cat: any;

  constructor(private http: HttpClient) {
  }

  apiCall(): void{
    this.http.get<any>('https://catfact.ninja/fact').subscribe(fact => {
      this.fact = fact.fact;
    });
  }
}
