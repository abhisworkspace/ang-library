import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiControlsComponent } from './ui-controls.component';
import { ButtonComponent } from './ui-elements/button/button.component';
import { DropdownComponent } from './ui-elements/dropdown/dropdown.component';
@NgModule({
  declarations: [UiControlsComponent, ButtonComponent, DropdownComponent],
  imports: [CommonModule],
  exports: [UiControlsComponent, ButtonComponent],
})
export class UiControlsModule {}
