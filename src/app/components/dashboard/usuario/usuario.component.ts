import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  id: number=0;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  imgUrl: string = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
  status: string='';
  gender: string = '';
  loading = true;
  
  constructor(private aRoute: ActivatedRoute,
    private usuarioService: UsuarioService) {
      this.id = + Number(this.aRoute.snapshot.paramMap.get('id'));
    
  }

  ngOnInit(): void {
   
    this.getUsuario()
  }
  getUsuario(): void {
   
    this.usuarioService.getUsuario(this.id).subscribe(data => {
    
      this.firstName = data.data.name;
     
      this.email = data.data.email;
     
      this.gender = data.data.gender;
      this.status= data.data.status;
      this.loading = false;
    })
  }

}
