import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  onSubmit(nameForm){
    console.log(nameForm);
    // this.dataStore.shNumber = nameForm.value.studNo;
    // this.dataStore.shFirstName = nameForm.value.studFname;
    // this.dataStore.shLastName = nameForm.value.studLname;
    // this.dataStore.shProgram = nameForm.value.studProg;
    // this.dataStore.shYear = nameForm.value.studYr;
    this.dataStore.addNewStudent(nameForm.value.studNo,nameForm.value.studFname,nameForm.value.studLname,
    nameForm.value.studProg,nameForm.value.studYr);
    nameForm.reset();
  }


  constructor(private dataStore: SharedService) { }

  ngOnInit() {
  }

}
