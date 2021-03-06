import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appEscCancellation]',
})
export class EscCancellationDirective {
  @Output() appEscCancellation = new EventEmitter();

  constructor() {
  }

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.appEscCancellation.emit({
        msg: 'Escape Btn Clicked',
        event,
      });
    }
  }
}
