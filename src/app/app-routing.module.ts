import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FishingPageComponent } from './components/fishing-page/fishing-page.component';
import { FrontPageComponent } from './components/front-page/front-page.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"front",
    pathMatch:"full"
  },
  {
    path:"front",
    component:FrontPageComponent
  },
  {
    path:"fishing",
    component:FishingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
