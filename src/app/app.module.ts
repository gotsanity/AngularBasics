import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoListComponent } from './TodoList/TodoList.component';
import { TodoItemComponent } from './TodoItem/TodoItem.component';

@NgModule({
  declarations: [							
    AppComponent,
      NavbarComponent,
      SidebarComponent,
      MainComponent,
      AboutComponent,
      ProfileComponent,
      PageNotFoundComponent,
      TodoListComponent,
      TodoItemComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
