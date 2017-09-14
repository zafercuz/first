import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  constructor(private dataStore: SharedService) { }

  studentCollection:Array<object>;
  studnumber: number;
  firstName: string;
  lastName: string;
  program: string;
  year: number;

  ngOnInit() {
    this.studentCollection = this.dataStore.getStudents();
  }

}
