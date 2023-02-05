import { FetchMomentService } from './../services/fetch-moment.service';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-fishing-page',
  templateUrl: './fishing-page.component.html',
  styleUrls: ['./fishing-page.component.scss']
})
export class FishingPageComponent implements OnInit 
{
  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
  items:any;
  errorOnLoad:boolean;
  isLoading:boolean=true;
  constructor(private service:FetchMomentService){
    this.errorOnLoad=false;
  }
  ngOnInit(): void {
    this.service.getPosts("fishing")
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
