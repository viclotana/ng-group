import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {
  position = new FormControl('');

  constructor() { }

  ngOnInit() {
  }
  callingFunction() {
    this.position.setValue('backend engineer');
   }
}
