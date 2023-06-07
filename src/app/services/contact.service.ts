import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  SendEmail(input: any) {
    return this.http.post('http://localhost:3000/api/contact',{
      email:input.value.email,
      name: input.value.name,
      body: input.value.body
    })
  }
}
