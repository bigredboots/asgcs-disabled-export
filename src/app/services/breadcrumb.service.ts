import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Breadcrumb } from '../models/breadcrumb.model';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private readonly _breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);
  private _filters$ = new BehaviorSubject<boolean>(false);
  private _currentRoute$ = new BehaviorSubject<string>('');
  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();
  readonly filter$ = this._filters$.asObservable();
  readonly currentModule$ = this._currentRoute$.asObservable();

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.changeCurrentRoute(this.router.url);
        const root = this.router.routerState.snapshot.root;
        const breadcrumbs: Breadcrumb[] = [];
        this.addBreadcrumb(root, breadcrumbs);
        this._breadcrumbs$.next(breadcrumbs);
      });
  }

  private changeCurrentRoute(url) {
    if (url.includes('demand')) {
      this._currentRoute$.next('demand');
    } else if (url.includes('outbound')) {
      this._currentRoute$.next('outbound');
    } else if (url.includes('hubs')) {
      this._currentRoute$.next('hubs');
    } else if (url.includes('reports')) {
        this._currentRoute$.next('reports');
    } else if (url.includes('supply')) {
      this._currentRoute$.next('supply');
    } else {
      this._currentRoute$.next('');
    }
  }

  private addBreadcrumb(route: ActivatedRouteSnapshot, breadcrumbs: any[]) {
    if (route) {
      this._filters$.next(!!route.data.filter);

      if (route.data.breadcrumb) {
        const breadcrumb = {
          label: this.getLabel(route.data),
        };
        breadcrumbs.push(breadcrumb);
      }
      this.addBreadcrumb(route.firstChild, breadcrumbs);
    }
  }

  private getLabel(data: any) {
    return typeof data.breadcrumb === 'function'
      ? data.breadcrumb(data)
      : data.breadcrumb;
  }
}
