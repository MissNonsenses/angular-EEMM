import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'my-app', 
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'EEMM ';
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  date  =  new  FormControl(new  Date());
  
  //floatLabelControl = new FormControl('auto');
  //colorControl = new FormControl('primary');
  //fontSizeControl = new FormControl(16, Validators.min(10));

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      //color: this.colorControl,
      hideRequired: this.hideRequiredControl,
      //floatLabel: this.floatLabelControl,
     // fontSize: this.fontSizeControl,
    });
  }
  

   

}
