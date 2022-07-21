import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InicialRoutingModule } from './inicial-routing.module';
import { InicialComponent } from './pages/inicial.component';

@NgModule({
  imports: [CommonModule, InicialRoutingModule],
  declarations: [InicialComponent],
})
export class InicialModule {}
