import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Article, ListService} from '../../service/list.service';
import {FormControl} from "@angular/forms";
import "rxjs/Rx";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  private articles: Array<Article>;
  private nameFilter: FormControl = new FormControl();
  private keyword: string;
  constructor(public router: Router, private listService: ListService) { }

  ngOnInit() {
    this.articles = this.listService.getArticles();
    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => this.keyword = value);
  }
  create() {
    this.router.navigateByUrl('index/CreateArticle');
  }

}

