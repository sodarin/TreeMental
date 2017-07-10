import { Injectable } from '@angular/core';

@Injectable()
export class ListService {

  activities = [
  new Activity(1, '第一项活动', '这是第一项活动', '邓卓夫', '2017-5-29: 20:07'),
  new Activity(2, '第二项活动', '这是第二项活动', '毛克明', '2017-5-26: 20:57'),
  new Activity(3, '第三项活动', '这是第三项活动', '张爽', '2017-5-21: 12:15'),
  new Activity(4, '第四项活动', '这是第四项活动', 'Mike Gosnell', '2017-5-20: 21:27'),
  new Activity(5, '第五项活动', '这是第五项活动', 'Zackberg', '2017-4-10: 22:01')
  ];

  articles = [
  new Article(1, '第一项活动', '这是第一项活动', '邓卓夫', '2017-5-29: 20:07'),
  new Article(2, '第二项活动', '这是第二项活动', '毛克明', '2017-5-26: 20:57'),
  new Article(3, '第三项活动', '这是第三项活动', '张爽', '2017-5-21: 12:15'),
  new Article(4, '第四项活动', '这是第四项活动', 'Mike Gosnell', '2017-5-20: 21:27'),
  new Article(5, '第五项活动', '这是第五项活动', 'Zackberg', '2017-4-10: 22:01')
  ];

  tests = [
  new Test(1, '第一个测试', '这是第一个测试', '毛克明', '2017-08-01: 10:21'),
  new Test(2, '第二个测试', '这是第二个测试', '张爽', '2017-08-01: 10:21'),
  new Test(3, '第三个测试', '这是第三个测试', '宋杰', '2017-08-01: 10:21'),
  new Test(4, '第四个测试', '这是第四个测试', '任涛', '2017-08-01: 10:21'),
  new Test(5, '第五个测试', '这是第五个测试', '刘园', '2017-08-01: 10:21'),
  new Test(6, '第六个测试', '这是第六个测试', '邓卓夫', '2017-08-01: 10:21')
  ];
  constructor() { }
  getTests() {
    return this.tests;
  }
  getArticles() {
    return this.articles;
  }
  getActivities() {
    return this.activities;
  }

}

export class Activity {
  constructor (
    public id: number,
    public name: string,
    public desc: string,
    public author: string,
    public date: string
  ) {}
}

export class Article {
  constructor (
    public id: number,
    public name: string,
    public desc: string,
    public author: string,
    public date: string
  ) {}
}

export class Test {
  constructor (
    public id: number,
    public name: string,
    public desc: string,
    public author: string,
    public date: string
  ) {}
}
