import { Injectable } from '@angular/core';
// import {HttpClient} from "@angular/common/http";
import {Advice} from "../advice";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  constructor( private http: HttpClient) { }
  getAdvices(teacherId: number, startDate: any, endDate: any) : Observable<Advice[]>{
    return this.http.get<Advice[]>("http://127.0.0.1:8084/advice?teacher=1&start=2018-05-04T08:00:00.000&end=2018-05-06T08:00:00.000");

    // return {id:[1,2]};
  }

  getAdviceById(adviceId)  : Observable<any[]> {
    return this.http.get<any[]>("http://127.0.0.1:8084/advice/student?advice_id=" +adviceId);
  }
}
