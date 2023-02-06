import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { Lesson01Component } from './lesson01/lesson01.component';
// import { Lesson02Component } from './lesson02/lesson02.component';
// import { Lesson03Component } from './lesson03/lesson03.component';
// import { ChildtableComponent } from './lesson03/childtable/childtable.component';
// import { Lesson04Component } from './lesson04/lesson04.component';
// import { TableComponent } from './lesson04/table/table.component';
// import { SortPipe } from './lesson04/table/sort.pipe';
// import { TableComponent } from './lesson05/works/task/table/table.component';

import { SortPipe } from './lesson05/pipes/sort.pipe';
import { SearchPipe } from './lesson05/pipes/search.pipe';

import { Lesson05Component } from './lesson05/lesson05.component';

import { HeaderComponent } from './lesson06/component/header/header.component';

import { HomeComponent } from './lesson05/pages/home/home.component';
import { WorksComponent } from './lesson05/pages/works/works.component';

import { CenzorComponent } from './lesson05/pages/works/cenzor/cenzor.component';
import { UsersComponent } from './lesson05/pages/works/users/users.component';
import { TaskComponent } from './lesson05/pages/works/task/task.component';
import { ChildtableComponent } from './lesson05/pages/works/task/childtable/childtable.component';
import { Lesson06Component } from './lesson06/lesson06.component';
import { LoginComponent } from './lesson06/component/login/login.component';
import { AddpostComponent } from './lesson06/component/addpost/addpost.component';

@NgModule({
  declarations: [
    AppComponent,
    // Lesson01Component,
    // Lesson02Component,
    // Lesson03Component,
    // ChildtableComponent,
    // Lesson04Component,
    // TableComponent,
    SortPipe,
    SearchPipe,
    Lesson05Component,
    HeaderComponent,
    HomeComponent,
    WorksComponent,
    CenzorComponent,
    UsersComponent,
    TaskComponent,
    ChildtableComponent,
    Lesson06Component,
    LoginComponent,
    AddpostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
