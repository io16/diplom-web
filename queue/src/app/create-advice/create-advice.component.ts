import {Component, OnInit} from '@angular/core';
import {AdviceService} from "../service/advice.service";
import {GroupService} from "../service/group.service";

@Component({
  selector: 'app-create-advice',
  templateUrl: './create-advice.component.html',
  styleUrls: ['./create-advice.component.css']
})
export class CreateAdviceComponent implements OnInit {

  public groups: any[];
  public groupNames: any[];
  public selectedGroups:any;
  public adviceType = 1;
  public durationPerStudent = 15;

  public startDate:any;
  public startTime:any;
  public endTime:any;
  public classRoom:any;

  constructor(private adviceService:AdviceService, private groupService:GroupService) { }

  ngOnInit() {
    this.groupService.getGroups().subscribe(g => {
      this.groups = g;
      this.groupNames = g.map(g=> g.name)
    });
  }

  createAdvice() {

  }
}
