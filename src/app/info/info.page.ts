import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  data: any;
  title: string;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  value5: string;
  value6: string;
  value7: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.item;
        console.log(this.data)
      }
    });
  }

  ngOnInit() {
    this.title = this.data.itemName
    this.value1 = this.data.value1;
    this.value2 = this.data.value2;
    this.value3 = this.data.value3;
    this.value4 = this.data.value4;
    this.value5 = this.data.value5;
    this.value6 = this.data.value6;
    this.value7 = this.data.value7;
  }

}
