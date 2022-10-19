import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { DashboardComponent } from '../dashboard/dashboard.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  logout(){
    // this.dialog.open(DashboardComponent)
    localStorage.clear();
    this.router.navigateByUrl('/login');
    // this.router.navigate(['/login'])
  }
}
