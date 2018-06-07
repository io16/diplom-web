import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {debounceTime, distinctUntilChanged, map} from "rxjs/operators";
import {AdviceService} from "../service/advice.service";
import {GroupService} from "../service/group.service";

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

  constructor(private adviceService: AdviceService,  private groupService:GroupService) {
    this.groupService.getGroups().subscribe(g => {
      this.groups = g;
      this.groupNames = g.map(g=> g.name)
    });
  }

  ngOnInit() {

  }
  public groups: any;
  public groupNames :String[];
  public startDate: any;
  public endDate: any;
  public teachers: any;
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
        : this.groups.map(g=> g.name).filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
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
