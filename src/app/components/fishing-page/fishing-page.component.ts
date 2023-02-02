import { FetchMomentService } from './../services/fetch-moment.service';
import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-fishing-page',
  templateUrl: './fishing-page.component.html',
  styleUrls: ['./fishing-page.component.scss']
})
export class FishingPageComponent implements OnInit 
{

  items:any;
  errorOnLoad:boolean;
  constructor(private service:FetchMomentService){
    console.log("CUM1");
    this.errorOnLoad=false;
    console.log(this.errorOnLoad);
  }
  ngOnInit(): void {
    console.log("CUM2");
    this.service.getPosts()
        // .pipe(catchError(err))=>{this.errorOnLoad=true; }))
        .subscribe({
          next: (v)=>this.items = v,
          error: ()=>this.errorOnLoad=true,

        })
        //   response => {
        //   this.items = response;
        //   console.log(this.items);
        // },
        // err=>console.log(err)
        // )
        
  }
  errorHandler(err:HttpErrorResponse)
  {
    console.log("ERROR");
    this.errorOnLoad=true;
    return EMPTY;
  } 
}
