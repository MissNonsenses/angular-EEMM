import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
   name = 'EEMM ';

form;
  editUnit = {
    UnitName: 'Unit Name',
    Area: 'Area',
    OwnerId: 'Owner Id',
    IsWithParking: 'IsWithParking',
    ParkingArea: 'Parking Area'
  };

  yesNo = [
    { value: 'Yes', name: 'YES' },
    { value: 'No', name: 'NO' },
  ];

  persons = [
    { PersonId: 'Person Id', FirstName: 'First Name', MiddleName: 'MiddleName', LastName: 'Last Name' },
  ];

  get UnitName() {
    return this.form.get('UnitName');
  }

  get OwnerId() {
    return this.form.get('OwnerId');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      UnitName: ['this.editUnit.UnitName', Validators.required],
      Area:     ['this.editUnit.Area', Validators.required],
      OwnerId: ['this.editUnit.OwnerId'],
      IsWithParking: ['this.editUnit.IsWithParking'],
      ParkingArea: ['this.editUnit.ParkingArea'],
    });
  }

  unitNameError() {}
  areaError() {}
  ownerIdError() {}
  updateUnit() {}
  cancel() {}



}
