import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent } from './pages/inicial.component';

const routes: Routes = [
  {
    path: '',
    component: InicialComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicialRoutingModule {}
