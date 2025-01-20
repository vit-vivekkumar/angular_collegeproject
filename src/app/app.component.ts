import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CollegeComponent } from "./MyComponent/college/college.component";
import { Student } from './Student';
import { StudentsComponent } from './MyComponent/students/students.component';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, CollegeComponent],
  imports: [StudentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'angular-project';
  constructor(){
  }
  studentList: Student[] = [
      { id: 1, name: 'Alice', date: '12/12/2024' },
      { id: 2, name: 'Bob', date: '12/12/2024' },
      { id: 3, name: 'Charlie', date: '12/12/2026' }
    ];

  ngOnInit(): void {}
}