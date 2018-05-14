import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getStream().subscribe();
  }
  quotes: String;
  url: string = 'http://127.0.0.1:8080/events';

  getStream(): Observable<Array<String>> {
    console.debug("start");
    return Observable.create((observer) => {
      let url = this.url;
      let eventSource = new EventSource(url);
      eventSource.onmessage = (event) => {
        console.debug('Received event: ', event);
        observer.next(this.quotes);
      };
      eventSource.onerror = (error) => observer.error('EventSource error: ' + error);
    });
  }
}
