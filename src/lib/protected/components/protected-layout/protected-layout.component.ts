import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/lib/services/auth.service';

@Component({
  selector: 'app-protected-layout',
  templateUrl: './protected-layout.component.html',
  styleUrls: ['./protected-layout.component.scss']
})
export class ProtectedLayoutComponent implements OnInit {
  profile: any;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.profile.subscribe(profile => (this.profile = profile));
  }
}
