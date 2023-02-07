import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Subscription } from 'rxjs';
import { FetchMomentService } from '../services/fetch-moment.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnDestroy, OnInit
{
  item:any;
  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
  id: number=0;
  isLoading:boolean=true;
  errorOnLoad:boolean=false;
    private subscription: Subscription;
    constructor(private activateRoute: ActivatedRoute,
                private service:FetchMomentService,
                private router:Router)
    {
         
        this.subscription = activateRoute.params.subscribe(params=>
          {
            this.id=params['id'];
            
          });
        
    }
    ngOnInit(): void 
    {
      if(this.id<10000)
      {
        this.service.getPosts("fishing/"+this.id?.toString())
          .subscribe({
            next: (v)=>
            {
              this.item = v;
            
              this.isLoading=false;
            },
            error: ()=>
            {
              this.errorOnLoad=true;
              this.isLoading=false;
            }
          })
      }
      else
      {
        this.service.getPosts("clothes/"+this.id?.toString())
          .subscribe({
            next: (v)=>
            {
              this.item = v;
              this.isLoading=false
            },
            error: (err)=>
            {
              this.errorOnLoad=true;
              this.isLoading=false;
              if(err.status===404)
              {
                this.router.navigate(["/pagenotfound"]);
              }
            }
          })
      }
    }
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
}
