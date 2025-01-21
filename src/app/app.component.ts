import { Component, Input, OnInit } from '@angular/core';
import { CollegeComponent } from "./MyComponent/college/college.component";
import { Student } from './Student';
import { StudentsComponent } from './MyComponent/students/students.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, CollegeComponent],
  imports: [StudentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'angular-project';
  studentList: Student[] = [];

  webhookData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.checkForUpdates();
  }
  // Method to handle the data received from the child component
  handleDataFetched(data: any) {
    this.studentList = data;
    console.log('Received data from child:', this.studentList);
  }

  checkForUpdates() {
    // Periodically poll the server for updates
    setInterval(() => {
      this.http.get('http://localhost:8000/courses').subscribe(data => {
        this.webhookData = data;
      });
    }, 5000); // Poll every 30 seconds
  }
}