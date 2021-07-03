import { Injectable } from '@angular/core';
import { Student } from './Student-Model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [
    {
      id:1,
      name: 'Tony Stark',
      marks: 100
    },
    {
      id:2,
      name: 'Bruce Banner',
      marks: 95
    }
  ]

  constructor() { }

  onGet(){
    return this.students
  }

  onAdd(students:Student){
    this.students.push(students)
  }

  onDelete(id: number){
    let student = this.students.find(x=>x.id===id)
    let index = this.students.indexOf(student,0)
    this.students.splice(index,1)
  }


}
