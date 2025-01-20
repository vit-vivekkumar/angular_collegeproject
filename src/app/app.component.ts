import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CollegeComponent } from "./MyComponent/college/college.component";

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, CollegeComponent],
  imports: [CollegeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'college_project';
}
