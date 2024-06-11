import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiderbarComponent } from './component/siderbar/siderbar.component';
import { LazyImageComponent } from './component/lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    SiderbarComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SiderbarComponent,
    LazyImageComponent
  ]
})
export class SharedModule { }
