import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodySplitComponent } from './body-split/body-split.component';
import { BodyFullComponent } from './body-full/body-full.component';

const routes: Routes = [
  {
    path: '',
    component: BodySplitComponent
  },
  {
    path: 'full',
    component: BodyFullComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
