import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "src/app/shared/sidebar/SidebarComponent";



@NgModule({
  declarations: [SidebarComponent],
  exports:[SidebarComponent],
  imports: [
    CommonModule
  ]


})
export class SharedModule { }
