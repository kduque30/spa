import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe-filter',
  templateUrl: './heroe-filter.component.html',
})
export class HeroeFilterComponent implements OnInit {
  heroes: any[] = [];
  termino: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.termino = params['termino'];
      this.heroes = this._heroeService.buscarHeroes(params['termino']);
    });
  }

  verHeroe(idx: number) {
    this.router.navigate(['heroe', idx]);
  }
}
