import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  safetyList: string[] = [
    "Wash your hands frequently with soap and water for at least 20 seconds, or use an alcohol-based hand sanitizer.",
    "Practice respiratory hygiene by covering your mouth and nose with your bent elbow or tissue when you cough or sneeze.",
    "Avoid close contact with people who are sick.",
    "Avoid touching your eyes, nose, and mouth.",
  ]

  ngOnInit(): void {
  }

}
