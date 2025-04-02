import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  template: `
    <h2>Lista de Posts</h2>
    <ul>
      <li *ngFor="let post of posts">
        <a [routerLink]="['/post', post.id]">{{ post.title }}</a>
      </li>
    </ul>
    <a routerLink="/new">Criar Novo Post</a>
  `
})
export class PostListComponent {
  posts = this.postService.getPosts();
  constructor(private postService: PostService) { }
}
