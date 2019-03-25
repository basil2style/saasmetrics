import { Component } from '@angular/core';
import { DataService } from '../data.service';
// import {DataProvider} from ''
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  homeLists: any;
  constructor(public data: DataService) {
    console.log("Testing")
    // console.log(this.homeLists)
  }
  ngOnInit() {
    this.homeLists = this.data.lists;
    console.log(this.homeLists)
  }

  itemClicked(item): void {
    console.log("Clicked on ");
    console.log(item);
  }
}
