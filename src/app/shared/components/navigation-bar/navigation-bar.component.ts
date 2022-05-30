import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SidePanelService } from '../../../core/';
import { SidePanelState } from '../../../core/';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  private _subscriptionsSubject$: Subject<void>;
  public currentPanelState: SidePanelState;

  constructor(private _sidePanelService: SidePanelService) {
    this._subscriptionsSubject$ = new Subject<void>();
  }

  ngOnInit(): void {
    this._sidePanelService.panelStateChanges
      .pipe(takeUntil(this._subscriptionsSubject$))
      .subscribe((state: SidePanelState) => (this.currentPanelState = state));
  }

  public handleSingleClick(): void {
    const width: number = window.innerWidth;
    if (width < 768 && this.currentPanelState === SidePanelState.MOBILE) {
      this._sidePanelService.changeState(SidePanelState.MOBILEOPEN);
    } else if (this.currentPanelState === SidePanelState.MOBILEOPEN) {
      this._sidePanelService.changeState(SidePanelState.MOBILE);
    } else if (this.currentPanelState === SidePanelState.COLLAPSE) {
      this._sidePanelService.changeState(SidePanelState.OPEN);
    } else {
      this._sidePanelService.changeState(SidePanelState.COLLAPSE);
    }
  }

  ngOnDestroy(): void {
    this._subscriptionsSubject$.next();
    this._subscriptionsSubject$.complete();
  }
}
