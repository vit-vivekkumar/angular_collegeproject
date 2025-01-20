import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../Course';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from "../students/students.component";
import { Student } from '../../Student';


@Component({
  selector: 'app-college',
  imports: [CommonModule, StudentsComponent],
  templateUrl: './college.component.html',
  styleUrl: './college.component.css'
})
export class CollegeComponent implements OnInit {

  studentList: Student[] = [
    { id: 1, name: 'Alice', date: '12/12/2024' },
    { id: 2, name: 'Bob', date: '12/12/2024' },
    { id: 3, name: 'Charlie', date: '12/12/2026' }
  ];
  courses: Course[] = [];
  // @Input() student: Student[] = [];
  constructor(){
    this.courses=[
      {
        id:1,
        name:"python"
      },
      {
        id:2,
        name:"Java"
      }
    ]
  }
  ngOnInit(): void {
    
  }
}
