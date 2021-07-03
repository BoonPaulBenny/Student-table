import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../Student-Model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:number;
  header:string;
  student:Student = {
    id:0,
    name:'',
    marks:0
  }

  constructor(private router: Router,private route: ActivatedRoute,private studentService:StudentService ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id===0 ? 'Add Student' : 'Edit Student';
  }

  onSubmit(form:NgForm) {
    let  student : Student={
      id:form.value.id,
      name:form.value.name,
      marks:form.value.marks,
    }
    this.studentService.onAdd(student)

    this.router.navigateByUrl('')
  }
    

}
