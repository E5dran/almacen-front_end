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
      this.httpClient.get<User[]>(this.urlBase)
    );
  }
  getByDni(pDni: string): Promise<User[]> {
    return firstValueFrom(
      this.httpClient.get<User[]>(this.urlBase + pDni) /* cambiar */
    );
  }
  register(newUser: User) {
    return firstValueFrom(
      this.httpClient.post<any>(this.urlBase, newUser)
    );
  }
  modify(newUser: User, userId: number) {
    return firstValueFrom(
      this.httpClient.put<any>(this.urlBase + userId, newUser)
    );
  }
  delete(userId: number) {
    return firstValueFrom(
      this.httpClient.delete<any>(this.urlBase + userId)
    );
  }

  login(user: any) {
    return firstValueFrom(
      this.httpClient.post<any>(this.urlBase + 'login', user)
    );
  }




}
