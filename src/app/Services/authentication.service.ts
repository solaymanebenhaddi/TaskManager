import { HttpClient,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs/operators';
import { WebRequestService } from '../web-request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private webService : WebRequestService , private router : Router, private http : HttpClient ) { }
// login function that call function from a global service in the APP .
  signIn(email : string , password : string){
   
    return this.webService.login(email, password).pipe(
      shareReplay(),
      tap((response: HttpResponse<any>) => {
        console.log("logged in 1");
    
        // the auth tokens will be in the header of this response
        this.StoreSession(response.body._id, response.headers.get('x-access-token'), response.headers.get('x-refresh-token'));
        console.log(" logged in seccussfully ");
      })
    )
  }
  // signup function that call  a gloal  service function to signup.
  signUp(email : string , password : string){
   
    return this.webService.Subscribe(email, password).pipe(
      shareReplay(),
      tap((response: HttpResponse<any>) => {
        console.log("logged in 1");
    
        // the auth tokens will be in the header of this response
        this.StoreSession(response.body._id, response.headers.get('x-access-token'), response.headers.get('x-refresh-token'));
        console.log("seccussfully subscribed ");
      })
    )
  }
// logout function that destrowy the session.and go bakc to login  
SignOut(){
  this.DistrotSession();
  this.router.navigate(['/login']);
}
// store the session in the local storage.
private StoreSession(userId: string , Accesstoken: any , RefreshToken: any){
  console.log("create session");
    localStorage.setItem('userId',userId);
    localStorage.setItem('x-access-token',Accesstoken);
    localStorage.setItem('x-refresh-token',RefreshToken);

}


private DistrotSession(){
  localStorage.removeItem('userId');
  localStorage.removeItem('x-access-token');
  localStorage.removeItem('x-refresh-token');
}

GetAccesToken(){
  return localStorage.getItem('x-access-token');
}
SetAccessToken(token: string){
  localStorage.setItem('x-access-token',token);
}
GetRefreshToken(){
  return localStorage.getItem('x-refresh-token');
}
GetUserId(){
  return localStorage.getItem('userId');
}
GetRefreshedaccToken(){
  return this.http.get(`${this.webService.UrlApi}/users/root/access-token`,
 { headers:
  {'x-refresh-token':this.GetRefreshToken()!,
  '_id':this.GetUserId()!}
,
observe:'response'}
).pipe(tap((res : HttpResponse<any>)=>{
  this.SetAccessToken(res.headers.get('x-access-token')!);
}))
}

}
