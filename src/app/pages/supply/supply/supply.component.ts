import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.scss'],
})
export class SupplyComponent {
  @ViewChild('flocationsoverview') flocationsoverview: ElementRef;
  @ViewChild('treemapmoreinfo') treemapmoreinfo: ElementRef;

  FLocationsMoreInfo() {
    this.flocationsoverview.nativeElement.classList.toggle('moreinfo-active');
  }
  TreeMapMoreInfo() {
    this.treemapmoreinfo.nativeElement.classList.toggle('moreinfo-active');
  }
  ngOnInit(): void {}
}
