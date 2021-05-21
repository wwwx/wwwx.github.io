import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-dp-logo",
  templateUrl: "./dp-logo.component.html",
  styleUrls: ["./dp-logo.component.scss"],
})
export class DpLogoComponent implements OnInit {
  @Input("size") size = "14rem";
  @Input("borderWidth") borderWidth = ".5rem";

  constructor() {}

  ngOnInit() {}
}
