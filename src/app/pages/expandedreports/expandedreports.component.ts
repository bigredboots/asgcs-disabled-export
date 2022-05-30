import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'expandedreports',
  templateUrl: './expandedreports.component.html',
  styleUrls: ['./expandedreports.component.scss'],
})
export class ExpandedReportsComponent {
  @ViewChild('fdemandoverview') fdemandoverview: ElementRef;
  @ViewChild('foutboundoverview') foutboundoverview: ElementRef;
  @ViewChild('fhubsoverview') fhubsoverview: ElementRef;
  @ViewChild('fsupplyoverview') fsupplyoverview: ElementRef;
  @ViewChild('finboundoverview') finboundoverview: ElementRef;

  @ViewChild('reloadnumbers') reloadnumbers: ElementRef;

  FDemandMoreInfo() {
    this.fdemandoverview.nativeElement.classList.toggle('drop-active');
  }
  FOutboundMoreInfo() {
    this.foutboundoverview.nativeElement.classList.toggle('drop-active');
  }
  FHubsMoreInfo() {
    this.fhubsoverview.nativeElement.classList.toggle('drop-active');
  }
  FSupplyMoreInfo() {
    this.fsupplyoverview.nativeElement.classList.toggle('drop-active');
  }
  FInboundMoreInfo() {
    this.finboundoverview.nativeElement.classList.toggle('drop-active');
  }

  ReloadThings() {
    this.finboundoverview.nativeElement.classList.add('twirl');
  }
  ngOnInit(): void {}
}