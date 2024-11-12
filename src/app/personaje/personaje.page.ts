import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.page.html',
  styleUrls: ['./personaje.page.scss'],
})
export class PersonajePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onFileSelected(event: any) { 
    const file = event.target.files[0]; 
    if (file) { 
      console.log('File selected:', file); 
    } 
  }

}
