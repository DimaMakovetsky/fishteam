import { FetchMomentService } from './../services/fetch-moment.service';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-fishing-page',
  templateUrl: './fishing-page.component.html',
  styleUrls: ['./fishing-page.component.scss']
})
export class FishingPageComponent 
{
  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
  items:any;
  errorOnLoad:boolean;
  isLoading:boolean=false;
  isChosen:boolean=false;
  constructor(private service:FetchMomentService){
    this.errorOnLoad=false;
  }
  clickTheDiv(category:string):void
  {
    console.log(category);
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
