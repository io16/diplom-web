import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {debounceTime, distinctUntilChanged, map} from "rxjs/operators";
import {AdviceService} from "../service/advice.service";

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

  constructor(private adviceService: AdviceService) {
  }

  ngOnInit() {
  }
   states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming', 'ssssssssssssssssssssssssssssssssssssssssssss'];
  public startDate: any;
  public endDate: any;
  public teachers: any;
  public groups: any;
  public advices: any[];
  public detailAdvice: any;


  public isCollapsed = false;
  public showAdviceId;

  public hasAdvices = true;
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );


  getAdviceById(adviceId: number) {
    console.log(adviceId);
    this.showAdviceId = adviceId;
    this.isCollapsed = !this.isCollapsed
    this.adviceService.getAdviceById(adviceId)
      .subscribe( a =>
      {
        console.dir(a);
        this.detailAdvice = a
      })
  }

  findAdvices() {
    // console.log(Date.parse(`${this.startDate.year}-` ).);
     this.adviceService.getAdvices(1, this.startDate, this.endDate)
     .subscribe( r=> {
      this.hasAdvices = r.length > 0;
       this.advices = r;
     });
  }

  reserveAdvice() {

  }

  cancelReservation() {

  }

}
