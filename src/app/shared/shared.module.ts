import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiderbarComponent } from './component/siderbar/siderbar.component';



@NgModule({
  declarations: [
    SiderbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SiderbarComponent
  ]
})
export class SharedModule { }
