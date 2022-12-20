import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Warehouse } from '../interfaces/warehouse.interface';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  private urlBase: string;

  constructor(private httpClient: HttpClient) {
    this.urlBase = 'http://localhost:3000/api/warehouses/';

  }
  getAll(): Promise<Warehouse[]> {
    return firstValueFrom(
      this.httpClient.get<Warehouse[]>(this.urlBase)
    );
  }
  getById(pId: number): Promise<Warehouse[]> {
    return firstValueFrom(
      this.httpClient.get<Warehouse[]>(this.urlBase + pId)
    );
  }
  register(newWarehouse: Warehouse) {
    return firstValueFrom(
      this.httpClient.post<any>(this.urlBase, newWarehouse)
    );
  }
  modify(newWarehouse: Warehouse, pId: number) {
    return firstValueFrom(
      this.httpClient.put<any>(this.urlBase + pId, newWarehouse)
    );
  }
  delete(WarehouseId: number) {
    return firstValueFrom(
      this.httpClient.delete<any>(this.urlBase + WarehouseId)
    );
  }

  getByWarehouseName(pName: any) {
    const obj = { name: pName }
    return firstValueFrom(
      this.httpClient.post<any>(this.urlBase + 'name/', obj))
  }
}
