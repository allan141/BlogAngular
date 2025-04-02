import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PostDetailComponent } from './post-detail/post-detail.component'; // Verifique o caminho aqui
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent  // O componente PostDetail deve ser listado aqui
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}