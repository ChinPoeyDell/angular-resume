import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  navItemTitle = "I'M WEB DESIGNER"
  
  constructor() { }

  ngOnInit() {
  }

}
