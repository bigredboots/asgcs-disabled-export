import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'outbound-overview',
  templateUrl: './outboundOverview.component.html',
  styleUrls: ['./outboundOverview.component.scss'],
})
export class OutboundOverviewComponent {
  @ViewChild('outboundpartoverview') outboundpartoverview: ElementRef;
  @ViewChild('ioutboundpartoverview') ioutboundpartoverview: ElementRef;
  @ViewChild('outboundoverview') outboundoverview: ElementRef;
  @ViewChild('ioutboundoverview') ioutboundoverview: ElementRef;
  @ViewChild('foutboundlocationsoverview')
  foutboundlocationsoverview: ElementRef;
  @ViewChild('ifoutboundlocationsoverview')
  ifoutboundlocationsoverview: ElementRef;

  OutboundPartOverviewtoggleMoreInfo() {
    this.outboundpartoverview.nativeElement.classList.toggle('moreinfo-active');
    this.ioutboundpartoverview.nativeElement.classList.toggle(
      'moreinfo-active'
    );
  }
  OutboundOverviewtoggleMoreInfo() {
    this.outboundoverview.nativeElement.classList.toggle('moreinfo-active');
    this.ioutboundoverview.nativeElement.classList.toggle('moreinfo-active');
  }
  FOutboundLocationsMoreInfo() {
    this.foutboundlocationsoverview.nativeElement.classList.toggle(
      'moreinfo-active'
    );
    this.ifoutboundlocationsoverview.nativeElement.classList.toggle(
      'moreinfo-active'
    );
  }

  ngOnInit(): void {}
}
