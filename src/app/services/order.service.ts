import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Order } from '../interfaces/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private urlBase: string;

  constructor(private httpClient: HttpClient) {
    this.urlBase = 'http://localhost:3000/api/orders/';

  }
  getAll(): Promise<Order[]> {
    return firstValueFrom(
      this.httpClient.get<Order[]>(this.urlBase)
    );
  }
  getById(pId: number): Promise<Order[]> {
    return firstValueFrom(
      this.httpClient.get<Order[]>(this.urlBase + pId)
    );
  }
  register(newOrder: Order) {
    return firstValueFrom(
      this.httpClient.post<any>(this.urlBase, newOrder)
    );
  }
  modify(newOrder: Order, pId: number) {
    return firstValueFrom(
      this.httpClient.put<any>(this.urlBase + pId, newOrder)
    );
  }
  delete(OrderId: number) {
    return firstValueFrom(
      this.httpClient.delete<any>(this.urlBase + OrderId)
    );
  }
  getByWarehouseId(pId: number): Promise<Order[]> {
    return firstValueFrom(
      this.httpClient.get<Order[]>(this.urlBase + 'warehouse/' + pId))
  }
  getByWarehouseIdStatus(pId: number, pStatus: number): Promise<Order[]> {
    return firstValueFrom(
      this.httpClient.get<Order[]>(this.urlBase + 'warehouse/' + pId + '/status/' + pStatus))
  }
  getByWarehouseIdStatusCat(pId: number, pStatus: number, pCategory: string): Promise<Order[]> {
    return firstValueFrom(
      this.httpClient.get<Order[]>(this.urlBase + 'warehouse/' + pId + '/status/' + pStatus + '/category/' + pCategory))
  }

  updateCategory(orderId: number, category: string) {
    const cat = { category }
    return firstValueFrom(
      this.httpClient.put<any>(this.urlBase + orderId + '/category', cat)
    );
  }

  updateStatus(orderId: number, status: number) {
    const stat = { status }
    return firstValueFrom(
      this.httpClient.put<any>(this.urlBase + orderId + '/category', stat)
    );
  }

  updateDepartureDate(orderId: number, fecha: Date) {
    const fech = { fecha }
    return firstValueFrom(
      this.httpClient.put<any>(this.urlBase + orderId + '/departureDate', fech)
    );
  }

  updateArrivalDate(orderId: number, fecha: Date) {
    const fech = { fecha }
    return firstValueFrom(
      this.httpClient.put<any>(this.urlBase + orderId + '/arrivalDate', fech)
    );
  }

  updateWarehouseId(orderId: number, warehouseId: number) {
    const obj = { warehouse_id: warehouseId }
    return firstValueFrom(
      this.httpClient.put<any>(this.urlBase + orderId + '/warehouseId', obj)
    );
  }

  getByOrderClient(addressee: string, userId: number) {
    const orderAddressee = { addressee, user_id: userId }
    return firstValueFrom(
      this.httpClient.post<any>(this.urlBase + 'addressee/', orderAddressee)
    )
  }

  getByUserId(userId: number): Promise<Order[]> {
    return firstValueFrom(
      this.httpClient.get<Order[]>(this.urlBase + 'user/' + userId)
    )
  }
}
