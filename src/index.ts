import { InputCounterComponent } from './input-counter.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export * from './input-counter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    InputCounterComponent
  ],
  exports: [
    InputCounterComponent
  ]
})
export class InputCounterModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: InputCounterModule
    };
  }
}
