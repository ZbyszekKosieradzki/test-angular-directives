import { Component } from '@angular/core';

import COLORS from './colors.json';

//const COLORS = require('./colors.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  title = 'test-angular-directives';

  isActive = true;

  currentBorderColor: string = null;

  avilableBorderColor = COLORS;

  switchBorderColor() {
    console.log('switchBorderColor');

    if (this.currentBorderColor === null) {
      this.currentBorderColor = this.avilableBorderColor[0];
      //return;
    }else{

      var a = this.avilableBorderColor.indexOf(this.currentBorderColor);

      console.log(a);

      console.log('zmiana istniejacego');
      this.currentBorderColor = this.avilableBorderColor[a+1];
    }
  }
}
