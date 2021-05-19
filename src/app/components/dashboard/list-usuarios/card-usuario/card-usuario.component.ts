import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {
  @Input() user : any; 
  imgUrl: string='https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
  firstName: string='';
  email: string='';
  id: number=0;
  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
    this.firstName= this.user.name;
    this.email = this.user.email;
    this.id = this.user.id;
  }

}
