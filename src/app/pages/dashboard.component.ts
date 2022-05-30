import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`.dashboard-content { margin: 1rem 0; display: block;`]
})
export class DashboardComponent implements OnInit {
  public isUpdating: boolean;

  ngOnInit() {}
}
