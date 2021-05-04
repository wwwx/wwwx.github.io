import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { APP_BASE_HREF } from "_@angular_common@8.2.14@@angular/common";
import { AboutComponent } from "./about/about.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactComponent } from "./contact/contact.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ProfileComponent } from "./profile/profile.component";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LandingPageComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "!" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
