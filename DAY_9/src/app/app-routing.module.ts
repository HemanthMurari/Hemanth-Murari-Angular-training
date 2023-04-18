import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstpageComponent } from './pages/firstpage/firstpage.component';
import { LastpageComponent } from './pages/lastpage/lastpage.component';



const routes: Routes = [
  {path:"",component:FirstpageComponent},
  {path:"login_page",component:LastpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
