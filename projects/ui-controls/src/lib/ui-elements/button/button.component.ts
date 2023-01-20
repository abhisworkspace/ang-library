import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'ab-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  /**
   * * label for button label
   */
  @Input() label: string = '';

  /**
   * * icon for button icon
   */
  @Input() icon: string = '';
  /**
   * * iconPosition for set the position of icon
   */
  @Input() iconPosition: 'left' | 'right' = 'left';
  /**
   * *iconOnly is showing icon without any label
   */
  @Input() iconOnly: boolean = false;
  /**
   * * disabled - button should be disabled
   */
  dynamicClass: any;
  /**
   * * disabled - button should be disabled
   */
  @Input() disabled: boolean = false;
  /**
   * * abClick - Onclick event
   */
  @Output() abClick = new EventEmitter<any>();
  /**
   * * abMouseOver - OnMouseover event
   */
  @Output() abMouseOver = new EventEmitter<any>();
  /**
   * * abMouseDown - OnMousedown event
   */
  @Output() abMouseDown = new EventEmitter<any>();

  btnIconLeft = false;
  btnIconRight = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.createIconButton();

    /**
     * *For adding dynamic class
     */
    this.dynamicClass = this.elementRef.nativeElement.classList['value'];
    var classArray =
      this.elementRef.nativeElement.classList['value'].split(' ');
    classArray.forEach(async (element: any) => {
      if (element !== null) {
        this.renderer.removeClass(this.elementRef.nativeElement, element);
      }
    });
  }

  createIconButton() {
    if (this.icon !== '' && this.iconOnly !== true) {
      if (this.iconPosition == 'left') {
        this.btnIconLeft = true;
      } else if (this.iconPosition == 'right') {
        this.btnIconRight = true;
      }
    } else {
      this.btnIconLeft = true;
    }
  }

  buttonClick(ev: any) {
    this.abClick.emit(ev);
  }

  buttonMouseOver(ev: any) {
    this.abMouseOver.emit(ev);
  }

  buttonMouseDown(ev: any) {
    this.abMouseDown.emit(ev);
  }
}
