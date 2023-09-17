import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QRlistComponent } from './qrlist/qrlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{path:"",redirectTo:"/home" , pathMatch:"full"},
                        {path:"home" , component:HomeComponent},
                        {path:"QRlist", component:QRlistComponent},
                        {path:"**",component:PageNotFoundComponent}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
