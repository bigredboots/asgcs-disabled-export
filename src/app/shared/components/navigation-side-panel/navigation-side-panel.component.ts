import {
  Component,
  EventEmitter,
  OnInit,
  OnDestroy,
  Input,
  ViewChild,
  Output,
  ElementRef
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SidePanelService, SidePanelState } from '../../../core';
import { NavigationLink } from './navigation-link.model';

@Component({
  selector: 'app-navigation-side-panel',
  templateUrl: './navigation-side-panel.component.html',
  styleUrls: ['./navigation-side-panel.component.scss']
})
export class NavigationSidePanelComponent implements OnInit, OnDestroy {
  @ViewChild('overview') overview: ElementRef;

  @Input()
  public links: NavigationLink[];

  private _subscriptionsSubject$: Subject<void>;
  public currentPanelState: SidePanelState;
  public SidePanelState = SidePanelState;

  constructor(private _sidePanelService: SidePanelService) {
    this._subscriptionsSubject$ = new Subject<void>();
  }

  demandOpen = true;
  healthOpen = false;
  outboundOpen = false;

  toggleDemandClass() {
    this.demandOpen = !this.demandOpen;
  }
  togglehealthClass() {
    this.healthOpen = !this.healthOpen;
  }
  toggleOutboundClass() {
    this.outboundOpen = !this.outboundOpen;
  }
  toggleSidebar() {
    this.overview.nativeElement.classList.toggle('sidebar-active');
  }

  ngOnInit(): void {
    this._sidePanelService.panelStateChanges
      .pipe(takeUntil(this._subscriptionsSubject$))
      .subscribe((state: SidePanelState) => (this.currentPanelState = state));
  }

  ngOnDestroy(): void {
    this._subscriptionsSubject$.next();
    this._subscriptionsSubject$.complete();
  }
}
