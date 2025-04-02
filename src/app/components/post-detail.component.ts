import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';  // Verifique se o caminho está correto
import { Post } from '../models/post.model';  // Verifique o caminho do modelo
import { Observable } from 'rxjs';  // Necessário para trabalhar com o Observable

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post | undefined;
  isLoading: boolean = true;
  errorMessage: string = '';

  // Injeção do serviço no construtor
  constructor(
    private route: ActivatedRoute,
    private postService: PostService  // Certifique-se de que está usando a injeção corretamente
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.postService.getPostById(id).subscribe({
        next: (data) => {
          this.post = data;
          this.isLoading = false;
        },
        error: (err) => {
          this.errorMessage = 'Erro ao carregar o post. Tente novamente mais tarde.';
          this.isLoading = false;
        }
      });
    } else {
      this.errorMessage = 'ID do post não encontrado na URL.';
      this.isLoading = false;
    }
  }
}