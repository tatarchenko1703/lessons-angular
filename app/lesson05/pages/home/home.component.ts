import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public selectedNavItem = -1;
  public arrList: ICard[] = [
    {
      headerText: 'Angular list of prohibited words',
      imgPath: '../../../../assets/images/Listwords.png',
      cardTitle: 'Angular list of prohibited words',
      routerLink: "/work/cenzor"
    },
    {
      headerText: 'Angular users list',
      imgPath: '../../../../assets/images/ListUsers.png',
      cardTitle: 'Angular users list',
      routerLink: "/work/users"
    },
    {
      headerText: 'Angular task list',
      imgPath: '../../../../assets/images/ListTask.png',
      cardTitle: 'Angular task list',
      routerLink: "/work/task"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  doOnClick(value: number): void { 
    this.selectedNavItem = value;
    console.log(this.selectedNavItem);   
  }

}

interface ICard {
  headerText: string;
  imgPath: string;
  cardTitle: string;
  routerLink: string;
}