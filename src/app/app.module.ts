import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import { Code404Component } from './code404/code404.component';
import { CreateActivityComponent } from './activity/create-activity/create-activity.component';
import { ActivityListComponent } from './activity/activity-list/activity-list.component';
import { ActivityManagerComponent } from './activity/activity-manager/activity-manager.component';
import { CreateTestComponent } from './test/create-test/create-test.component';
import { TestListComponent } from './test/test-list/test-list.component';
import { TestManagerComponent } from './test/test-manager/test-manager.component';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleManageComponent } from './article/article-manage/article-manage.component';
import { IndexComponent } from './index/index.component';
import {ListService} from './service/list.service';
import { ListFilterPipe } from './pipe/list-filter.pipe';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'index', component: MainComponent, children: [
    {path: '', component: IndexComponent},
    {path: 'ActivityList', component: ActivityListComponent},
    {path: 'CreateActivity', component: CreateActivityComponent},
    {path: 'ActivityManage', component: ActivityManagerComponent},
    {path: 'CreateTest', component: CreateTestComponent},
    {path: 'TestManage', component: TestManagerComponent},
    {path: 'TestList', component: TestListComponent},
    {path: 'CreateArticle', component: CreateArticleComponent},
    {path: 'ArticleManage', component: ArticleManageComponent},
    {path: 'ArticleList', component: ArticleListComponent}
    ]
  },
  {path: '**', component: Code404Component}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent,
    MainComponent,
    LoginComponent,
    Code404Component,
    CreateActivityComponent,
    ActivityListComponent,
    ActivityManagerComponent,
    CreateTestComponent,
    TestListComponent,
    TestManagerComponent,
    CreateArticleComponent,
    ArticleListComponent,
    ArticleManageComponent,
    IndexComponent,
    ListFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
