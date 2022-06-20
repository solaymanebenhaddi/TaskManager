
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, empty, Observable, switchMap, tap, throwError } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InterseptorServeService implements HttpInterceptor{ 
private newaccesstoken : boolean = false;



  constructor(private authentication : AuthenticationService) { }

//intercept the request and add the token to the header
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    req=this.HeaderAuhthentication(req);

    return next.handle(req).pipe(catchError((error : HttpErrorResponse)=>{
      //if the error is 401 (not authourized) then logout the user.
      if(error.status === 401 && this.newaccesstoken === false){

        return this.refreshAccessToken()
        .pipe(
          switchMap(
            ()=>{
              req = this.HeaderAuhthentication(req);
              return next.handle(req);
            }
          ),catchError((error : any)=>{

            console.log(error);
            this.authentication.SignOut();
            return empty();
          })
        )
      }

     return throwError(error);
    }))
    
  }

// refresh the access token
refreshAccessToken(){
  
   this.newaccesstoken = false;
  return this.authentication.GetRefreshedaccToken().pipe(
    tap(()=>{
      this.newaccesstoken = true;
      console.log("token refreshed");
    }))
 
  }
  


  //Get the token from the local storage :

  HeaderAuhthentication(request: HttpRequest<any>){
    const token = this.authentication.GetAccesToken();
    if(token){
      //add token to the header request
      request = request.clone({
        setHeaders: {
          "x-access-token": token
        }
      })
     
  }
  return request;
}
}
