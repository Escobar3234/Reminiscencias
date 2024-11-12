import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caract1',
  templateUrl: './caract1.page.html',
  styleUrls: ['./caract1.page.scss'],
})
export class Caract1Page implements OnInit {
  dropdownVisible: boolean = false;

  constructor() {}

  ngOnInit() {}

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
}
