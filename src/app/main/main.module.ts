import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyprojectsComponent } from './myprojects/myprojects.component';
import { MydesignsComponent } from './mydesigns/mydesigns.component';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'proj', component: MyprojectsComponent},
      {path: 'des', component: MydesignsComponent}
    ]),
  ],
  exports: [
  ]
})
export class MainModule { }
