import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent {
  @ViewChild('fdemandoverview') fdemandoverview: ElementRef;
  @ViewChild('foutboundoverview') foutboundoverview: ElementRef;
  @ViewChild('fhubsoverview') fhubsoverview: ElementRef;
  @ViewChild('fsupplyoverview') fsupplyoverview: ElementRef;
  @ViewChild('finboundoverview') finboundoverview: ElementRef;

  @ViewChild('reloadnumbers') reloadnumbers: ElementRef;

  closeOverlayer() {
    document.body.classList.remove('excel-modal-open');

    // setTimeout(function () {
    //   this.fadebigmodal.nativeElement.classList.remove('bigmodal-fade');
    // }, 3000);
    // clearTimeout();
  }

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
  ngOnInit(): void {
    
  }
}
