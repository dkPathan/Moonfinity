import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'build-skills';

  constructor() {
    const arr: any = [
      [1, 3, 2],
      [0, 3, 0],
      [2, 4, 4]
    ]
    let ans = 0;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i]) {
        for(let j = 0; j < arr[i].length; j++) {
          ans += arr[i][j];
        }
      }
    }
  }
}
