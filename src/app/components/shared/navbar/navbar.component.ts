import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino: string){
    if(termino!=""){
      this.router.navigate(['/heroeFilter', termino]);
    }else{
      this.router.navigate(['/heroes']);
    }
    
  }

}
