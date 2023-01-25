import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'ab-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() value: string = '';
  @Input() isReadOnly: boolean = false;
  @Input() inputId: string = '';
  @Input() isChecked: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() isRequired: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
