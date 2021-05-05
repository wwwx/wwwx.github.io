import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { interval } from "rxjs";
import { take } from "rxjs/operators";

@Component({
  selector: "app-typing",
  templateUrl: "./typing.component.html",
  styleUrls: ["./typing.component.scss"],
})
export class TypingComponent implements OnInit, OnChanges {
  @Input("text") private text = "";
  @Input("time") private time = 2000;
  @Input("delay") private delay = 500;

  private charList = [];

  constructor() {}

  ngOnInit() {
    if (typeof this.text !== "string") {
      return false;
    }
    setTimeout(() => {
      this.startTyping();
    }, this.delay);
  }

  ngOnChanges(changes) {
    if (!changes.text.firstChange) {
      this.charList = [];
      this.startTyping();
    }
  }

  startTyping() {
    const count = this.text.length;
    const speed = Math.round(this.time / count);
    interval(speed)
      .pipe(take(count))
      .subscribe((index) => {
        const _char = this.text.charAt(index);
        this.charList.push(_char);
      });
  }
}
