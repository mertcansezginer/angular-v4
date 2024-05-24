import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../interfaces/icategory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl: string = "https://northwind.vercel.app/api/categories";

  constructor(private http: HttpClient) {}

  getAll(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.apiUrl);
  }

  getById(id : number) : Observable<ICategory> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ICategory>(url);
  }

  update(category: ICategory): Observable<ICategory> {
    const url = `${this.apiUrl}/${category.id}`;
    return this.http.put<ICategory>(url, category);
  }

  delete(id : number): Observable<ICategory> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<ICategory>(url);
  }

}
