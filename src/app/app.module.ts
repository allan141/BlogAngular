import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list.component';
import { PostDetailComponent } from './components/post-detail.component';
import { PostFormComponent } from './components/post-form.component';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: PostListComponent },
      { path: 'post/:id', component: PostDetailComponent },
      { path: 'new', component: PostFormComponent }
    ])
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
