import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})

export class WorksComponent {
  public selectedNav = -1;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute)
  
  {
    if (activatedRoute.snapshot.url[1].path.toLowerCase() == 'cenzor') {
      this.selectedNav = 0;
    }
    if (activatedRoute.snapshot.url[1].path.toLowerCase() == 'users') {
      this.selectedNav = 1;
    }
    if (activatedRoute.snapshot.url[1].path.toLowerCase() == 'task') {
      this.selectedNav = 2;
    }
  }  
  
}
