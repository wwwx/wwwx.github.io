import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-navigator",
  templateUrl: "./navigator.component.html",
  styleUrls: ["./navigator.component.scss"],
})
export class NavigatorComponent implements OnInit {
  @Output("cancellation")
  cancellation = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onBgClick() {
    this.cancellation.emit();
  }
}
