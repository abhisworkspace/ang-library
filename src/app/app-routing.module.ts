import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ButtonComponent } from './ui-elemets/button/button.component';
import { DropdownComponent } from './ui-elemets/dropdown/dropdown.component';
import { CheckboxComponent } from './ui-elemets/checkbox/checkbox.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'button',
        component: ButtonComponent,
      },
      {
        path: 'checkbox',
        component: CheckboxComponent,
      },
      {
        path: 'dropdown',
        component: DropdownComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
