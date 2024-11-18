import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoja-persona',
  templateUrl: './hoja-persona.page.html',
  styleUrls: ['./hoja-persona.page.scss'],
})
export class HojaPersonaPage implements OnInit {
  dropdownVisible: string | null = null;

  constructor() { }

  ngOnInit() {}

  toggleDropdown(section: string) {
    this.dropdownVisible = this.dropdownVisible === section ? null : section;
  }
}
