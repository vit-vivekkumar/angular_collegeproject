import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../Course';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from "../students/students.component";
import { Student } from '../../Student';


@Component({
  selector: 'app-college',
  imports: [CommonModule],
  templateUrl: './college.component.html',
  styleUrl: './college.component.css'
})
export class CollegeComponent implements OnInit {

  courses: Course[] = [];
  @Input() title:string ='';
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
