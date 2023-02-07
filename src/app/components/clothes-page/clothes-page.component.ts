import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { FetchMomentService } from '../services/fetch-moment.service';

@Component({
  selector: 'app-clothes-page',
  templateUrl: './clothes-page.component.html',
  styleUrls: ['./clothes-page.component.scss']
})
export class ClothesPageComponent{
  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
  items:any;
  errorOnLoad:boolean;
  isLoading:boolean=false;
  isChosen=false;
  constructor(private service:FetchMomentService){
    this.errorOnLoad=false;
  }
  clickTheDiv(category:string):void
  {
    this.isChosen=true;
    this.isLoading=true;
    this.service.getPosts(category)
        .subscribe({
          next: (v)=>
          {
            this.items = v;
            this.isLoading=false;
          },
          error: ()=>
          {
            this.errorOnLoad=true;
            this.isLoading=false;
          },
        })
  }
}
