import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, delay } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];
  private timeout: any;

  constructor(private loadingService: LoadingService) {}

  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }
    
    // Annuler le timeout si la requête se termine rapidement
    if (this.requests.length === 0) {
      clearTimeout(this.timeout);
      this.loadingService.hide();
    }
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.requests.push(request);
    
    // N'afficher le spinner que si la requête prend plus de 300ms
    this.timeout = setTimeout(() => {
      if (this.requests.length > 0) {
        this.loadingService.show();
      }
    }, 300);

    return new Observable(observer => {
      const subscription = next.handle(request)
        .subscribe(
          event => {
            if (event instanceof HttpResponse) {
              this.removeRequest(request);
              observer.next(event);
            }
          },
          err => {
            this.removeRequest(request);
            observer.error(err);
          },
          () => {
            this.removeRequest(request);
            observer.complete();
          });
      
      return () => {
        this.removeRequest(request);
        subscription.unsubscribe();
      };
    });
  }
}
