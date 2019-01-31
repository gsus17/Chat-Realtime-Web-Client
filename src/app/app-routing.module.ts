import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MasterPageModule } from './master-page/master-page.module';
import { routes } from './app-routes-config';

@NgModule({
  imports: [
    MasterPageModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
