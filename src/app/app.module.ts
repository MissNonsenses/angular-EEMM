import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports:      
  [ BrowserModule, 
    FormsModule, 
    MatSliderModule, 
    MatCardModule, 
    MatInputModule, 
    MatGridListModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
