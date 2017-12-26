import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private toastr:ToastrService) { }

  submit()
  {
    this.toastr.info("Code under construction!")
  }
  cancel()
  {
    this.router.navigate(['students']);
  }
  ngOnInit() {
  }

}
