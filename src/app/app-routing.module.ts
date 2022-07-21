import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => {
      return import('./modules/inicial/inicial.module').then(
        (m) => m.InicialModule
      );
    },
  },
  {
    path: 'cadastro',
    loadChildren: () => {
      return import('./modules/cadastro/cadastro.module').then(
        (m) => m.CadastroModule
      );
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
