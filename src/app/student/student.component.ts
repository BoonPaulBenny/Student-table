import { Component, OnInit } from '@angular/core';
import { Student } from '../Student-Model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.students=this.studentService.onGet()
  }

  onDelete(id: number){
    this.studentService.onDelete(id)
  }

}
