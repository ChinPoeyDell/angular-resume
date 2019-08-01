import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-particulars',
  templateUrl: './particulars.component.html',
  styleUrls: ['./particulars.component.css']
})
export class ParticularsComponent implements OnInit {
  navItemTitle = "ABOUT ME"
  details = {
    "Name": "John Doe",
    "Age": "38 years",
    "Location": "Rome, Italy",
    "Experience": "15 Years",
    "Degree": "MBA",
    "CareerLevel": "Mid-Level",
    "Phone": "12345678",
    "Fax": "12345678",
    "E-mail": "example@example.com",
    "Website": "www.behhoho.com"
  }
  constructor() { }

  ngOnInit() {
  }

}
