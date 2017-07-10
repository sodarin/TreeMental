import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-test-manager',
  templateUrl: './test-manager.component.html',
  styleUrls: ['./test-manager.component.css']
})
export class TestManagerComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  create() {
    this.router.navigateByUrl('index/CreateTest');
  }

}
