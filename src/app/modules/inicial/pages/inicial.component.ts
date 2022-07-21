import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.scss'],
})
export class InicialComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  cadastrar() {
    this.router.navigateByUrl('/cadastro');
  }
}
