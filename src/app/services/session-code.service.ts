import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionCodeService {

  constructor() { }

  getCode() {
    return sessionStorage.getItem('sessionCode');
  }

  setCode(code: string) {
    sessionStorage.setItem('sessionCode', code);
  }
}
