import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
})
export class PortfolioComponent implements OnInit {
  typingText = "Hey, sort my projects by clicking the categories.";
  constructor(private router: Router) {}

  ngOnInit() {}

  onBackBtnClick() {
    this.router.navigateByUrl("/");
  }
}
