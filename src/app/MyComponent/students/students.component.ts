import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../Student';
import { CollegeComponent } from '../college/college.component';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {
  
  @Input() student: Student[]=[];

  constructor() {}
  ngOnInit(): void {
  }

}
