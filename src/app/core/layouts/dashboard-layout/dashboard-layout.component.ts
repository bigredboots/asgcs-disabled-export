import { BreadcrumbService } from './../../../services/breadcrumb.service';
import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  HostListener
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DashboardLayoutConfiguration } from './models/dashboard-layout-configuration.model';
import { SidePanelPosition } from './models/side-panel-position.enum';
import { SidePanelService } from './services/side-panel.service';
import { SidePanelState } from './models/side-panel-state.enum';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  @Input()
  public configuration: DashboardLayoutConfiguration;

  private _subscriptionsSubject$: Subject<void>;
  public currentPanelState: SidePanelState;
  public hideFilter = false;

  constructor(
    private _sidePanelService: SidePanelService,
    private _breadcrumbService: BreadcrumbService
  ) {
    this._subscriptionsSubject$ = new Subject<void>();
    this.configuration = new DashboardLayoutConfiguration(
      SidePanelPosition.LEFT,
      SidePanelState.OPEN
    );
    this._sidePanelService.changeState(
      this.configuration.initialSidePanelState
    );
    if (this.currentPanelState === SidePanelState.MOBILE) {
      this._sidePanelService.changeState(SidePanelState.MOBILEOPEN);
    } else {
      this._sidePanelService.changeState(SidePanelState.MOBILE);
    }
  }
  public handleSingleClick(): void {
    if (this.currentPanelState === SidePanelState.MOBILE) {
      this._sidePanelService.changeState(SidePanelState.MOBILEOPEN);
    } else if (this.currentPanelState === SidePanelState.MOBILEOPEN) {
      this._sidePanelService.changeState(SidePanelState.MOBILE);
    } else {
      this._sidePanelService.changeState(SidePanelState.MOBILE);
    }
  }

  ngOnInit(): void {
    const width: number = window.innerWidth;
    if (width < 769) this._sidePanelService.changeState(SidePanelState.MOBILE);
    else if (width < 1201 && width > 768)
      this._sidePanelService.changeState(SidePanelState.COLLAPSE);
    else this._sidePanelService.changeState(SidePanelState.OPEN);

    window.dispatchEvent(new Event('resize'));
    this._sidePanelService.panelStateChanges
      .pipe(takeUntil(this._subscriptionsSubject$))
      .subscribe((state: SidePanelState) => (this.currentPanelState = state));

    this._breadcrumbService.filter$.subscribe(hideFilter => {
      this.hideFilter = hideFilter;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // @@@ May have to rethink
    const width: number = window.innerWidth;
    if (width < 769) this._sidePanelService.changeState(SidePanelState.MOBILE);
    else if (width < 1201 && width > 768)
      this._sidePanelService.changeState(SidePanelState.COLLAPSE);
    else this._sidePanelService.changeState(SidePanelState.OPEN);
  }

  ngOnDestroy(): void {
    this._subscriptionsSubject$.next();
    this._subscriptionsSubject$.complete();
  }
}
