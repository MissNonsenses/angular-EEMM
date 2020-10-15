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
  //floatLabelControl = new FormControl('auto');
  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      color: this.colorControl,
      hideRequired: this.hideRequiredControl,
      //floatLabel: this.floatLabelControl,
      fontSize: this.fontSizeControl,
    });
  }

   getFontSize() {
     return Math.max(10, this.fontSizeControl.value);
   }

//form;
  // editUnit = {
  //   UnitName: 'Unit Name',
  //   Area: 'Area',
  //   OwnerId: 'Owner Id',
  //   IsWithParking: 'IsWithParking',
  //   ParkingArea: 'Parking Area'
  // };

  // yesNo = [
  //   { value: 'Yes', name: 'YES' },
  //   { value: 'No', name: 'NO' },
  // ];

  // persons = [
  //   { PersonId: 'Person Id', FirstName: 'First Name', MiddleName: 'MiddleName', LastName: 'Last Name' },
  // ];

  // get UnitName() {
  //   return this.form.get('UnitName');
  // }

  // get OwnerId() {
  //   return this.form.get('OwnerId');
  // }

  // constructor(private fb: FormBuilder) {}

  // ngOnInit() {
  //   this.form = this.fb.group({
  //     UnitName: ['this.editUnit.UnitName', Validators.required],
  //     Area:     ['this.editUnit.Area', Validators.required],
  //     OwnerId: ['this.editUnit.OwnerId'],
  //     IsWithParking: ['this.editUnit.IsWithParking'],
  //     ParkingArea: ['this.editUnit.ParkingArea'],
  //   });
  // }

  // unitNameError() {}
  // areaError() {}
  // ownerIdError() {}
  // updateUnit() {}
  // cancel() {}



}
