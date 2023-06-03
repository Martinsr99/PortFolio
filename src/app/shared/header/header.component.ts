import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
 
declare let $: any; //*****IMPORTANTE DECLARAR variable $
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit, AfterViewInit {
 
  constructor(
    private router: Router) {
  }
 
  ngOnInit(): void {
 
  }
 
  ngAfterViewInit(): void {
    //NOTA: esta funcion esta en el archivo "custom.js"
    $(".search-box a, .search-box .app-search .srh-btn").on('click', function () {
      $(".app-search").toggle(200);
    });
  }
 
  buscar(termino: string) {
    if(termino.length === 0) return;
    this.router.navigateByUrl(`/dashboard/buscar/${termino}`)
  }
 
  logout() {
    this.router.navigateByUrl('/login');
  }
}