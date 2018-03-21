import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpClient]
})
export class AppComponent {
  title = 'app works!';
  posts;

  constructor(private http:HttpClient){
    this.http.get('http://localhost:3000/posts.json')
      .subscribe(res => this.posts = res);
  }
}
