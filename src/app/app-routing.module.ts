import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FishingPageComponent } from './components/fishing-page/fishing-page.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { ClothesPageComponent } from './components/clothes-page/clothes-page.component';
import { ItemPageComponent } from './components/item-page/item-page.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';

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
    component:FishingPageComponent,
    title:"Рыболовные товары"
  },
    
  {
    path:"clothes",  
    component:ClothesPageComponent,
    title:"Брендовая одежда"
  },
  {
    path:"items/:id",
    component:ItemPageComponent,
    title:"Товар"
  },
  {
    path:"contacts",
    component:ContactsPageComponent,
    title:"Контакты"
  },
  {
      path:"**",
    component:PageNotFoundComponent,
    title:"Страница не нейдена"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
