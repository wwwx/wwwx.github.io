import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AboutComponent } from "./about/about.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactComponent } from "./contact/contact.component";
import { EscCancellationDirective } from "./directives/esc-cancellation.directive";
import { DpLogoComponent } from "./dp-logo/dp-logo.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { NavigatorComponent } from "./navigator/navigator.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ProfileComponent } from "./profile/profile.component";
import { IconBackComponent } from './ui/icon-back/icon-back.component';
import { TypingComponent } from './typing/typing.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LandingPageComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    DpLogoComponent,
    NavigatorComponent,
    EscCancellationDirective,
    IconBackComponent,
    TypingComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "!" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
