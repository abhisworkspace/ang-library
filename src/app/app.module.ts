import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiControlsModule } from 'projects/ui-controls/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './ui-elemets/button/button.component';
import { DropdownComponent } from './ui-elemets/dropdown/dropdown.component';
import { CheckboxComponent } from './ui-elemets/checkbox/checkbox.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, DropdownComponent, CheckboxComponent],
  imports: [BrowserModule, AppRoutingModule, UiControlsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
