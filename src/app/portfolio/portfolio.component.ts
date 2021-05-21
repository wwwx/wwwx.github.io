import { Component, HostListener, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
})
export class PortfolioComponent implements OnInit {
  typingText = "Hey, sort my projects by clicking the categories.";
  setFixedPosition = false;
  logoStyle: {};

  @ViewChild("portfolioSelectionArea", { static: true })
  portfolioSelectionAreaRef!: any;
  @ViewChild("portfolioHeaderArea", { static: true })
  portfolioHeaderAreaRef!: any;
  @ViewChild("portfolioArea", { static: true })
  portfolioAreaRef!: any;

  constructor(private router: Router) {}

  ngOnInit() {}

  onBackBtnClick() {
    this.router.navigateByUrl("/");
  }

  @HostListener("window:scroll")
  onWindowScroll() {
    const portfolioArea: HTMLElement = this.portfolioAreaRef.nativeElement;
    const factor = +Math.max(
      1 - window.scrollY / portfolioArea.offsetTop
    ).toFixed(2);
    // console.log(factor, window.scrollY, portfolioArea.offsetTop);

    if (window.scrollY > portfolioArea.offsetTop) {
      this.setFixedPosition = true;
    } else {
      this.setFixedPosition = false;
      this.logoStyle = {
        opacity: factor,
        transform: `scale(${factor})`,
      };
    }
  }
}
