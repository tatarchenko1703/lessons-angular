import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lesson01Component } from './lesson01/lesson01.component';
import { Lesson02Component } from './lesson02/lesson02.component';
import { Lesson03Component } from './lesson03/lesson03.component';
import { ChildtableComponent } from './lesson03/childtable/childtable.component';
import { Lesson04Component } from './lesson04/lesson04.component';
import { TableComponent } from './lesson04/table/table.component';
import { SortPipe } from './lesson04/table/sort.pipe';
import { SearchPipe } from './lesson04/table/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Lesson01Component,
    Lesson02Component,
    Lesson03Component,
    ChildtableComponent,
    Lesson04Component,
    TableComponent,
    SortPipe,
    SearchPipe,
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
