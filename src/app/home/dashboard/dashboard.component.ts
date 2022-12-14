import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService) { }
  photos: any;
  ngOnInit(): void {
    this.userService.getAlbums().subscribe((data: any) => {
      console.log(data, ">>>>>");
      this.photos = data;
    });
    
  }

}
