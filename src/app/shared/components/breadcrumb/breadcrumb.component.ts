import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { BreadcrumbService } from './../../../services/breadcrumb.service';
import { Breadcrumb } from './../../../models/breadcrumb.model';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  breadcrumbs$: Observable<Breadcrumb[]>;

  constructor(private readonly breadcrumbService: BreadcrumbService) {
    this.breadcrumbs$ = breadcrumbService.breadcrumbs$;
  }
}
