import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
})
export class UserlistComponent implements OnInit {
  constructor(
    private router: Router,
  
  ) {}
  userData: any[] = [];
  
 
  ngOnInit(): void {
    
    this.userData = JSON.parse(localStorage.getItem('userForm'))||[];
   
    console.log(this.userData)
  }
  navigate(route) {
    this.router.navigate([route]);
  }
deleteUser(ind){
  this.userData.splice(ind,1);
  localStorage.setItem('userForm',JSON.stringify( this.userData))
}
 
}


