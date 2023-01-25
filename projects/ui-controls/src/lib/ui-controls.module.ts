import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiControlsComponent } from './ui-controls.component';
import { ButtonComponent } from './ui-elements/button/button.component';
import { DropdownComponent } from './ui-elements/dropdown/dropdown.component';
import { CheckboxComponent } from './ui-elements/checkbox/checkbox.component';
import { PageGridComponent } from './ui-elements/page-grid/page-grid.component';
import { FormGridComponent } from './ui-elements/form-grid/form-grid.component';
@NgModule({
  declarations: [
    UiControlsComponent,
    ButtonComponent,
    DropdownComponent,
    CheckboxComponent,
    PageGridComponent,
    FormGridComponent,
  ],
  imports: [CommonModule],
  exports: [
    UiControlsComponent,
    ButtonComponent,
    DropdownComponent,
    CheckboxComponent,
    PageGridComponent,
    FormGridComponent,
  ],
})
export class UiControlsModule {}
