import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../Student';
import { CollegeComponent } from '../college/college.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-students',
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {
  
  @Input() studentList: Student[] = [];  

  constructor() {}
  ngOnInit(): void {
  }

}
