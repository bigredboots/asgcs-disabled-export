import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { internetGrowthData } from '../../../internet-growth-data';

@Component({
  selector: 'demand-overview',
  templateUrl: './demandOverview.component.html',
  styleUrls: ['./demandOverview.component.scss'],
})
export class DemandOverviewComponent implements OnInit {
  public model: any[] = internetGrowthData;

  public labelContent(e: any): string {
    return `${e.category}: \n ${e.value}%`;
  }
  public borderOptions = {
    color: '#000000',
    dashType: 'solid',
    width: 1,
    radius: 5,
  };
  public seriesDefaults = {
    overlay: { gradient: 'sharpGlass' },
  };

  @ViewChild('partoverview') partoverview: ElementRef;
  // @ViewChild('fsiteoverview') fsiteoverview: ElementRef;
  // @ViewChild('ifsiteoverview') ifsiteoverview: ElementRef;
  @ViewChild('flocationsoverview') flocationsoverview: ElementRef;
  @ViewChild('ipartoverview') ipartoverview: ElementRef;
  @ViewChild('iflocationsoverview') iflocationsoverview: ElementRef;

  PartOverviewtoggleMoreInfo() {
    this.partoverview.nativeElement.classList.toggle('moreinfo-active');
    this.ipartoverview.nativeElement.classList.toggle('moreinfo-active-block');
  }
  focusOutDonutOne() {
    this.partoverview.nativeElement.classList.remove('moreinfo-active');
    this.ipartoverview.nativeElement.classList.remove('moreinfo-active-block');
  }
  // FsitetoggleMoreInfo() {
  //   this.fsiteoverview.nativeElement.classList.toggle('moreinfo-active');
  //   this.ifsiteoverview.nativeElement.classList.toggle('moreinfo-active');
  // }

  FLocationsMoreInfo() {
    this.flocationsoverview.nativeElement.classList.toggle('moreinfo-active');
    this.iflocationsoverview.nativeElement.classList.toggle('moreinfo-active-block');
  }
  focusOutMap(){
    this.flocationsoverview.nativeElement.classList.remove('moreinfo-active');
    this.iflocationsoverview.nativeElement.classList.remove('moreinfo-active-block');
  }
  ngOnInit(): void {}
}
