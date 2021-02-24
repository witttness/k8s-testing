import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoWeb';

  //data$ = of({hello:'world', foo: 'bar', one: 23});
  data$: Observable<any>;

  /**
   *
   */
  constructor(http: HttpClient) {
    console.info('Getting data...');
    this.data$ = http.get<any>('/api/weatherforecast', { headers: new HttpHeaders({'Content-Type': 'application/json'})});
  }
}
