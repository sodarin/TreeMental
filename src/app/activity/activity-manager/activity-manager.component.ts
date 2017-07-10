import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-activity-manager',
  templateUrl: './activity-manager.component.html',
  styleUrls: ['./activity-manager.component.css']
})
export class ActivityManagerComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  create() {
    this.router.navigateByUrl('index/CreateActivity');
  }

}
