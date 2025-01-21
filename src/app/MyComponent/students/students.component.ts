import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../../Student';
import { CollegeComponent } from '../college/college.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-students',
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {
  @Input() studentList: Student[] = [];
  constructor(private http: HttpClient) { }
  @Output() dataFetched = new EventEmitter<any>(); 
  data=[];
  ngOnInit(): void {
    this.getData();

  }
  public getData() {
    this.http.get('http://127.0.0.1:8000/api/students/').subscribe((res: any) => {
      this.data = res;
      this.dataFetched.emit(this.data);  // Emit data to parent component
    });
  }
}
