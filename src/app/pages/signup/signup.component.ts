import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private loginService : AuthenticationService) { }

  ngOnInit(): void {
  }
  // signup function that call  authentication service to signup.
  OnSubscribe(email : string , password : string){
    console.log(email+" "+password);
    this.loginService.signUp(email,password).subscribe((res : HttpResponse<any> )=>{
      console.log(res);

    })
  }
}
