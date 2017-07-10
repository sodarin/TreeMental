import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Activity, ListService} from '../../service/list.service';
import {FormControl} from "@angular/forms";
import "rxjs/Rx";

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  private activities: Array<Activity>;
  private nameFilter: FormControl = new FormControl();
  private keyword: string;
  constructor(public router: Router, private listService: ListService) { }

  ngOnInit() {
    this.activities = this.listService.getActivities();
    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => this.keyword = value);
  }
  create() {
    this.router.navigateByUrl('index/CreateActivity');
  }

}


