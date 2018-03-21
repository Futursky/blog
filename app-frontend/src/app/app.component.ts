import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

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
    this.http.get(environment.apiUrl + '/posts.json')
      .subscribe(res => this.posts = res);
  }
}
