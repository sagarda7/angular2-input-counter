import { Component, OnInit, forwardRef, Input, OnChanges } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';


export function createCounterRangeValidator(maxValue, minValue) {
  return (c: FormControl) => {
    let err = {
      rangeError: {
        given: c.value,
        max: maxValue || 10,
        min: minValue || 0
      }
    };

  return (c.value > +maxValue || c.value < +minValue) ? err: null;
  }
}

@Component({
  selector: 'input-counter',
  template: `
    <div class="wrapper"><button class="left" [class]="btnClass" (click)="increase()">+</button> <input type="text" [class]="inputClass" [value]="counterValue"> <button class="right" [class]="btnClass" (click)="decrease()">-</button></div>
  `,
  styles:[
    'div.wrapper {display:inline-block}',
    'input {max-width:60px;}',
    'button.left{float:left}',
    'button.right{float:right}',
],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputCounterComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => InputCounterComponent), multi: true }
  ]
})
export class InputCounterComponent implements ControlValueAccessor, OnChanges {

  propagateChange:any = () => {};
  validateFn:any = () => {};
  
  @Input('counterValue') _counterValue = 0;
  @Input() counterRangeMax;
  @Input() counterRangeMin;
  @Input() btnClass;
  @Input() inputClass;


  get counterValue() {
    return this._counterValue;
  }
  
  set counterValue(val) {
    this._counterValue = val;
    this.propagateChange(val);
  }

  ngOnChanges(inputs) {
    if (inputs.counterRangeMax || inputs.counterRangeMin) {
      this.validateFn = createCounterRangeValidator(this.counterRangeMax, this.counterRangeMin);
      this.propagateChange(this.counterValue);
    }
  }

  writeValue(value) {
    if (value) {
      this.counterValue = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  increase() {
    this.counterValue++;
  }

  decrease() {
    this.counterValue=Math.max(this.counterValue-1,0);
  }

  validate(c: FormControl) {
    return this.validateFn(c);
  }
}