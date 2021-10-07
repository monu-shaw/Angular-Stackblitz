import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'random-card';
  user: any;
  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}
  reload() {
    window.location.reload();
  }
  ngOnInit() {
    this.userService.getUser().subscribe(
      (user: any) => {
        this.user = user.results[0];
        console.log(this.user);
      },
      (err) => {
        this.toastr.error(err.status, 'OOPS');
      }
    );
  }
}
