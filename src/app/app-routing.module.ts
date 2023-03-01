import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AssetsComponent } from './assets/assets.component';
import { DataComponent } from './data/data.component';
import { StatusComponent } from './status/status.component';


const routes: Routes = [
  {
    path : 'home' , component : AppComponent
  },
  {
    path: 'assets' , component: AssetsComponent
  },
  {path: 'data' , component : DataComponent
},
{
  path : 'status' , component : StatusComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
