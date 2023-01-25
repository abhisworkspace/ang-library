import {
  Component,
  OnInit,
  Input,
  Output,
  HostListener,
  EventEmitter,
  ElementRef,
  ChangeDetectorRef,
  SimpleChanges,
  TemplateRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'ab-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  /**
   * *An array of objects to display as the available options.
   */
  @Input() options: Array<any> = [];

  /**
   * Name of the label field of an option.
   */
  @Input() isLabel: boolean = true;
  @Input() optionLabel: string = 'name';
  /**
   * *Name of the value field of an option.
   */
  @Input() optionValue: string = 'id';
  /**
   * *Name of the disabled field of an option.
   */
  @Input() optionDisabled: boolean = false;

  @Input() placeholderLabel: string = 'Dropdown Label';
  @Input() label: string = 'Dropdown Label';

  @Input() isLabelVisible: boolean = true;

  @Input() multipleSelect: boolean = false;

  /**
   * Callback to invoke when value of dropdown changes.
   */
  @Output() qhChange: EventEmitter<any> = new EventEmitter();
  /**
   * Callback to invoke when component is clicked.
   */
  @Output() qhClick: EventEmitter<any> = new EventEmitter();
  /**
   * Callback to invoke when data is selected.
   */
  @Output() qhSelect = new EventEmitter<any>();
  /**
   * Callback to invoke when data is written without array
   */
  @Input() optionTemplate = TemplateRef;

  isDropdownVisible: boolean = false;

  onChange = (value: string) => {};
  onTouched = () => {};
  showValue: string = '';

  value: any;
  labelName: any;
  tempArray: Array<any> = [];
  labelArray: Array<any> = [];

  templateDriven: any;
  isError: boolean = false;

  constructor(
    private eRef: ElementRef,
    private renderer: Renderer2,
    private changeDetectionRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const data = this.options.map((v) =>
      Object.assign(v, { isSelected: false })
    );
    this.options = data;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changeDetectionRef.detectChanges();
  }

  @HostListener('document:click', ['$event'])
  clickOut(event: any) {
    if (this.eRef.nativeElement.contains(event.target)) {
      this.isDropdownVisible = true;
    } else {
      this.isDropdownVisible = false;
    }
  }

  showDropdown(ev: any) {
    this.isDropdownVisible = true;
  }

  getParentClasses(value: any) {
    var classList: any = [];
    const dataClassList = [];
    if (!this.isLabel) {
      this.eRef.nativeElement.firstChild.children[0].children[0].classList.forEach(
        (element: any) => {
          dataClassList.push(element);
          this.renderer.removeClass(
            this.eRef.nativeElement.firstChild.children[0].children[0],
            element
          );
        }
      );
      this.eRef.nativeElement.classList.forEach((element: any) => {
        classList.push(element);
        this.renderer.addClass(
          this.eRef.nativeElement.firstChild.children[0].children[0],
          element
        );
      });
    } else {
      this.eRef.nativeElement.firstChild.children[1].children[0].classList.forEach(
        (element: any) => {
          dataClassList.push(element);
          this.renderer.removeClass(
            this.eRef.nativeElement.firstChild.children[1].children[0],
            element
          );
        }
      );
      this.eRef.nativeElement.classList.forEach((element: any) => {
        classList.push(element);
        this.renderer.addClass(
          this.eRef.nativeElement.firstChild.children[1].children[0],
          element
        );
      });
    }

    if (
      this.eRef.nativeElement.classList.contains('ng-invalid') &&
      (value == undefined || value == '')
    ) {
      this.isError = true;
    } else {
      this.isError = false;
    }
  }
  outOfFocus(event: any, value: any) {
    this.getParentClasses(value);
  }

  checkedEvent(event: any, value: number, name: string) {
    if (event.currentTarget.checked) {
      // this.getParentClasses(name);
      const newdata = this.options.reduce((ds, d) => {
        let newD = d;
        if (d[this.optionValue] === value) {
          newD = Object.assign(d, { isSelected: true });
        }
        return ds.concat(newD);
      }, []);
      this.options = newdata;
      this.tempArray.push({
        [this.optionLabel]: name,
        [this.optionValue]: value,
      });
      this.value = this.tempArray;
      this.options.filter((data) => {
        if (data[this.optionLabel] == name) {
          this.labelArray.push(name);
          this.labelName = this.labelArray.toString();
          this.showValue = this.labelName;
        }
      });
      this.onChange(this.value);
      this.changeDetectionRef.markForCheck();
      this.qhSelect.emit({ event, value, name });
      this.qhClick.emit({ event, value, name });
    } else {
      const newdata = this.options.reduce((prevVal, currentVal) => {
        let newD = currentVal;
        if (currentVal[this.optionValue] === value) {
          newD = Object.assign(currentVal, { isSelected: false });
        }
        return prevVal.concat(newD);
      }, []);
      this.options = newdata;
      this.labelArray = this.labelArray.filter((data) => data !== name);
      this.labelName = this.labelArray.toString();
      this.showValue = this.labelName;
      this.onChange(this.value);
      this.changeDetectionRef.markForCheck();
      this.qhSelect.emit({ event, value, name });
      this.qhClick.emit({ event, value, name });
    }
  }

  selectedEvent(event: any, value: number, name: string) {
    this.isDropdownVisible = false;
    this.showValue = name;
    this.onChange(name);
    // this.getParentClasses(value);
    this.qhClick.emit({ event, value, name });
  }
}
