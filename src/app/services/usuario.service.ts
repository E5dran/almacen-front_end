import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from '../interfaces/user.interface';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlBase: string;

  constructor(private httpClient: HttpClient) {
    this.urlBase = 'http://localhost:3000/api/users/';

  }

  getAll(): Promise<User[]> {
    return firstValueFrom(
      this.httpClient.get<User[]>(this.urlBase
      )
    );

  }
  //pendiente y sujeta acambios
  getByDni(pDni: string): Promise<User[]> {
    return firstValueFrom(
      this.httpClient.get<User[]>(this.urlBase + pDni)
    );
  }

  register(newUser: User) {
    return firstValueFrom(
      this.httpClient.post<any>(this.urlBase, newUser)
    );
  }

  modify(newUser: User) {
    return firstValueFrom(
      this.httpClient.put<any>(this.urlBase, newUser)
    );
  }
  delete(userId: number) {
    return firstValueFrom(
      this.httpClient.delete<any>(this.urlBase + userId)
    );
  }
}
