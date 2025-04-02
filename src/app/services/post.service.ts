import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';  // Certifique-se de que o caminho está correto

@Injectable({
  providedIn: 'root'  // Isso garante que o serviço seja disponibilizado no Angular para injeção em toda a aplicação
})
export class PostService {
  private apiUrl = 'https://api.exemplo.com/posts';  // Substitua com a URL real da sua API

  constructor(private http: HttpClient) {}

  // Método para pegar um post por ID
  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }
}