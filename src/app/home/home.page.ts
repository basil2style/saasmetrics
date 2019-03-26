import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { DataService } from '../data.service';
// import {DataProvider} from ''
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  homeLists: any;
  constructor(private router: Router, public data: DataService) {
    console.log("Testing")
    // console.log(this.homeLists)
  }
  ngOnInit() {
    this.homeLists = this.data.lists;
    console.log(this.homeLists)
  }

  itemClicked(item): void {
    // console.log("Clicked on ");
    // console.log(item);
    let navigationExtras: NavigationExtras = {
      state: {
        item: item
      }
    };
    this.router.navigate(['info'], navigationExtras);
  }
}
