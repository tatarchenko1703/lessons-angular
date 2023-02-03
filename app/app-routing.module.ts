import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HeaderComponent } from './lesson05/component/header/header.component';
import { HomeComponent } from './lesson05/pages/home/home.component';
import { WorksComponent } from './lesson05/pages/works/works.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'work/:category', component: WorksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
