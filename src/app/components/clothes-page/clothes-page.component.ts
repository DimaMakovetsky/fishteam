import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { FetchMomentService } from '../services/fetch-moment.service';

@Component({
  selector: 'app-clothes-page',
  templateUrl: './clothes-page.component.html',
  styleUrls: ['./clothes-page.component.scss']
})
export class ClothesPageComponent implements OnInit{
  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
  items:any;
  errorOnLoad:boolean;
  isLoading:boolean=true;
  constructor(private service:FetchMomentService){
    this.errorOnLoad=false;
  }
  ngOnInit(): void {
    this.service.getPosts("clothes")
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
