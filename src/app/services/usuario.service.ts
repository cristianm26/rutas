import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const URL= environment.url;
@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  token ='7333cff6b38e43f9d43855d21cfe1dbfc5a2bb43de7bb4b69906303362e6b35b'
  constructor(private http: HttpClient) { 

  }

  getUsuarios(): Observable<any>{
      return this.http.get<any>(`${URL}/users?access-token=${this.token}`)
  }
  getUsuario(id:number): Observable<any>{
    return this.http.get<any>(`${URL}/users/${id}?access-token=${this.token}`)
  }
}
