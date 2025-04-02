import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-detail',
  template: `
    <h2>{{ post?.title }}</h2>
    <p>{{ post?.content }}</p>
    <a routerLink="/">Voltar</a>
  `
})
export class PostDetailComponent {
  post: any;
  constructor(private route: ActivatedRoute, private postService: PostService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.postService.getPost(id);
  }
}
