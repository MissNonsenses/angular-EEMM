import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker'; 

@NgModule({
  imports: [ 
    ReactiveFormsModule,
    BrowserModule, 
    FormsModule, 
    MatCardModule, 
    MatInputModule, 
    MatGridListModule, 
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatButtonModule, 
    FlexLayoutModule,  
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule ],
  declarations: [AppComponent, HelloComponent,],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

