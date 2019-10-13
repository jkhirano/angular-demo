// service is like redux store
// if you want to change backend, you can just revise this file - one place

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BackendService {
  // each method represents each route

  // this is saying we need HttpClient, once its ready, we can pass it in
  constructor(private http: HttpClient) {}

  contact(data) {
    // return Promise.resolve({});
    return this.http.post("/api/contact", data).toPromise();
  }

  // represents post to /api/login or api/register or api/login

  // if you want to mock success:
  login(data) {
    return Promise.resolve({
      id: 1234,
      username: data.username
    });
  }

  register(data) {
    return Promise.resolve();
  }

  logout() {
    return Promise.resolve();
  }
}
