import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
  constructor() {}

  startTadaAnimation = false;

  ngOnInit() {
    setInterval(() => {
      this.startTadaAnimation = !this.startTadaAnimation;
    }, 3000);
  }
}
