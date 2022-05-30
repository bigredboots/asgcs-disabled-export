import { BreadcrumbService } from './../../../services/breadcrumb.service';
import { NgModule, Input, OnChanges, OnInit } from '@angular/core';

import {
  Component,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { GlobalConstants } from '../../../common/global-constants';
import { SidePanelService } from '../../../core/';
import { SidePanelState } from '../../../core/';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('multiselectContainer') multiselectContainer: ElementRef;
  @Input() data: any;
  @Input() textField: any;
  @Input() valueField: any;
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();

  
  private _subscriptionsSubject$: Subject<void>;
  public currentPanelState: SidePanelState;
  constructor(
    private _sidePanelService: SidePanelService,
    public breadcrumbService: BreadcrumbService,
    private router: Router
  ) {
    this._subscriptionsSubject$ = new Subject<void>();
  }
  public BasicDropdown: Array<string> = [
    'Option One',
    'Option Two',
    'Option Three',
    'Option Four',
    'Option Five',
  ];
  public selectText: { text: string } = {
    text: 'Select',
  };

  public openMultiselect(): void {
    this.multiselectContainer.nativeElement.classList.add('opened');
  }
  public closeMultiselect(): void {
    this.multiselectContainer.nativeElement.classList.remove('opened');
  }
  @ViewChild('overview') overview: ElementRef;
  @ViewChild('datesblock') datesblock: ElementRef;
  @ViewChild('customslide') customslide: ElementRef;

  @ViewChild('expandedfilters') expandedfilters: ElementRef;
  @ViewChild('filters') filters: ElementRef;
  @ViewChild('hubfilters') hubfilters: ElementRef;
  @ViewChild('outboundfilters') outboundfilters: ElementRef;
  @ViewChild('supplyfilters') supplyfilters: ElementRef;
  @ViewChild('reportfilters') reportfilters: ElementRef;

  breadCrumb = GlobalConstants.breadCrumb;

  toggledatechoice() {
    this.datesblock.nativeElement.classList.toggle('date-open');
  }
  closedatechoice() {
    this.datesblock.nativeElement.classList.remove('date-open');
  }
  changedatechoice() {
    this.datesblock.nativeElement.classList.remove('date-open');
    this.datesblock.nativeElement.classList.add('date-selected');
  }
  toggleSidebar() {
    this.overview.nativeElement.classList.toggle('sidebar-active');
  }
  toggleExpandedFilters() {
    document.body.classList.add('filter-open');
    // this.reportfilters.nativeElement.classList.toggle('expanded');
    // this.overview.nativeElement.classList.toggle('filter-expanded');
  }
  sliderApply(){
    this.customslide.nativeElement.classList.toggle('custom-active');
  }

  toggleOverlayer() {
    document.body.classList.remove('filter-open');
    document.body.classList.remove('modal-open');
    document.body.classList.remove('timeout-modal-open');
    document.body.classList.remove('excel-modal-open');
    this.overview.nativeElement.classList.remove('sidebar-active');
  }

  myBreadCrumb = this.breadCrumb;
  hideFilters: boolean = false;

  ngOnInit(): void {
    this._sidePanelService.panelStateChanges
      .pipe(takeUntil(this._subscriptionsSubject$))
      .subscribe((state: SidePanelState) => (this.currentPanelState = state));
    this.breadcrumbService.currentModule$.subscribe((parent) => {
      this.myBreadCrumb = parent;
    });

    this.breadcrumbService.filter$.subscribe((hideFilters) => {
      this.hideFilters = hideFilters;
    });
  }

  public handleSingleClicks(): void {
    const width: number = window.innerWidth;
    if (width < 769 && this.currentPanelState === SidePanelState.MOBILE) {
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
