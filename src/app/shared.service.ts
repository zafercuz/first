import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  shNumber: number;
  shFirstName: string;
  shLastName: string;
  shProgram: string;
  shYear: number;

  shStudentCollection: Array<object> = [];
  
  shStudent:{
    Number:number,
    Firstname:string,
    Lastname:string,
    Program:string,
    Year:number
  }

  addNewStudent(studNo:number,studFname:string,studLname:string,studProg:string,studYr:number){
    this.shStudent={
      Number:studNo,
      Firstname:studFname,
      Lastname:studLname,
      Program:studProg,
      Year:studYr
    };
    this.shStudentCollection.push(this.shStudent);
  }

  getStudents():Array<object>{
    return this.shStudentCollection;
  }

  constructor() { }

}
