import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ListService, Test} from '../../service/list.service';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {

  private tests: Array<Test>;
  private nameFilter: FormControl = new FormControl();
  private keyword: string;
  constructor(public router: Router, private testList: ListService) { }

  ngOnInit() {
    this.tests = this.testList.getTests();
    this.nameFilter.valueChanges
        .debounceTime(500)
        .subscribe(value => this.keyword = value);
  }
  create() {
    this.router.navigateByUrl('index/CreateTest');
  }

}


