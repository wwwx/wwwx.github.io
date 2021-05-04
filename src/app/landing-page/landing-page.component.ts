import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
  constructor() {}

  startTadaAnimation = false;

  @Output("ExploreMe")
  ExploreMe = new EventEmitter();

  ngOnInit() {
    setInterval(() => {
      this.startTadaAnimation = !this.startTadaAnimation;
    }, 3000);
  }

  onExploreMeClick() {
    this.ExploreMe.emit();
  }
}
