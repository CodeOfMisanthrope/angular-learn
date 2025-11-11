import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);

  baseApiUrl = 'https://icherniakov.ru/yt-course/auth/';

  login(payload: Partial<{username: string | null, password: string | null}>) {
    return this.http.post(
      `${this.baseApiUrl}token`,
      payload
    );
  }
}
