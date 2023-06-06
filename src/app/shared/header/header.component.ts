import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
  
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
 
  constructor(
    private router: Router) {
  }
 
  ngOnInit(): void {
    console.log('first')
  }
 
 
}