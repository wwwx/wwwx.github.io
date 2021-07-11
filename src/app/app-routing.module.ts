import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProfileComponent } from './profile/profile.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: ProfileComponent,
    pathMatch: 'full',
    data: { animation: 'landing-page' },
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { animation: 'portfolio' },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'about' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'contact' },
  },
  {
    path: 'profiles',
    redirectTo: '/contact',
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
