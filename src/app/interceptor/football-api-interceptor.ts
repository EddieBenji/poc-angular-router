import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class FootballApiInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const copiedReq = req.clone({
            headers: req.headers
              .set('x-rapidapi-host', environment.API_HOST)
              .set('x-rapidapi-key', environment.API_KEY)
        });
        return next.handle(copiedReq);
    }
}
