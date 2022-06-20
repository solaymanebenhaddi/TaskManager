import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private loginService : AuthenticationService,private router : Router ) { } 

  ngOnInit(): void {

  }
  
  // login function that call  authentication service to login.
  SignInAction(email : string , password : string){
    console.log(email+" "+password);
    this.loginService.signIn(email,password).subscribe((res : HttpResponse<any> )=>{
      if(res.status == 200){
        //authentication success
        this.router.navigate(['/lists']);
      }
      console.log(res);

    })
  }
}
