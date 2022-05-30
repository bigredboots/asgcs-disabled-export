import {
  Component,
  OnInit,
  ViewEncapsulation,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { geometry } from '@progress/kendo-drawing';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss'],

  encapsulation: ViewEncapsulation.None,
})
export class DonutComponent implements OnInit {
  public chartConfig = {
    chartArea: {
      background: 'transparent',
      height: 280,
      top: 0,
      padding: 0,
      margin: 0,
      width: 280,
      autoFit: false,
    },
    legend: {
      visible: false,
    },
    series: [
      {
        holeSize: 65,
        margin: 0,
        size: 30,
        name: 'parts',
        type: 'donut',
        border: {
          width: 3,
          color: '#151515',
          dashType: 'solid',
        },
        explodeField: 'explode',

        data: [
          {
            category: 'Data Point 1',
            value: 35,
            color: '#065aa3',
          },
          {
            category: 'Data Point 2',
            value: 25,
            color: '#1b68ab',
          },
          {
            category: 'Data Point 3',
            value: 20,
            color: '#4483ba',
          },
          {
            category: 'Data Point 4',
            value: 10,
            color: '#81acd0',
          },
          {
            category: 'Data Point 4',
            value: 10,
            color: '#c5d9ea',
          },
          {
            category: 'Other',
            value: 5,
            color: '#ffffff',
          },
        ],
      },
    ],
  };
  ngOnInit(): void {}
  @ViewChild('donutoverview') donutoverview: ElementRef;

  onClickMe() {
    this.donutoverview.nativeElement.classList.toggle('active');
    this.chartConfig = {
      chartArea: {
        background: 'transparent',
        height: 280,
        top: 0,
        padding: 0,
        margin: 0,
        width: 280,
        autoFit: false,
      },
      legend: {
        visible: false,
      },
      series: [
        {
          holeSize: 65,
          margin: 0,
          size: 30,
          name: 'parts',
          type: 'donut',
          border: {
            width: 3,
            color: '#151515',
            dashType: 'solid',
          },
          explodeField: 'explode',

          data: [
            {
              category: 'Data Point 1',
              value: 30,
              color: '#065aa3',
            },
            {
              category: 'Data Point 2',
              value: 27,
              color: '#0e5fa6',
            },
            {
              category: 'Data Point 3',
              value: 22,
              color: '#1b68ab',
            },
            {
              category: 'Data Point 4',
              value: 15,
              color: '#2b73b1',
            },
            {
              category: 'Data Point 5',
              value: 11,
              color: '#4382b9',
            },
            {
              category: 'Data Point 6',
              value: 8,
              color: '#6096c4',
            },
            {
              category: 'Data Point 7',
              value: 6,
              color: '#7faad0',
            },
            {
              category: 'Data Point 8',
              value: 5,
              color: '#a5c3de',
            },
            {
              category: 'Data Point 9',
              value: 4,
              color: '#c5d9ea',
            },
            {
              category: 'Data Point 10',
              value: 2,
              color: '#e6eef6',
            },
            {
              category: 'Other',
              value: 1,
              color: '#FFF',
            },
          ],
        },
      ],
    };
  }
  public labelContent(e: any): string {
    return e.category;
  }

  onClickMeClicked() {
    this.donutoverview.nativeElement.classList.toggle('active');
    this.chartConfig = {
      chartArea: {
        background: 'transparent',
        height: 280,
        top: 0,
        padding: 0,
        margin: 0,
        width: 280,
        autoFit: false,
      },
      legend: {
        visible: false,
      },
      series: [
        {
          holeSize: 65,
          margin: 0,
          size: 30,
          name: 'parts',
          type: 'donut',
          border: {
            width: 3,
            color: '#151515',
            dashType: 'solid',
          },
          explodeField: 'explode',

          data: [
            {
              category: 'Data Point 1',
              value: 35,
              color: '#065aa3'
            },
            {
              category: 'Data Point 2',
              value: 25,
              color: '#1b68ab',
            },
            {
              category: 'Data Point 3',
              value: 20,
              color: '#4483ba',
            },
            {
              category: 'Data Point 4',
              value: 10,
              color: '#81acd0',
            },
            {
              category: 'Data Point 4',
              value: 10,
              color: '#c5d9ea',
            },
            {
              category: 'Other',
              value: 5,
              color: '#ffffff',
            },
          ],
        },
      ],
    };
  }
  public onSeriesClick(args: any): void {
    if (!args.dataItem.highlighted || args.dataItem.highlighted === '') {
      args.dataItem.highlighted = true;
      var origin = args.point.sector.center;
      args.point.visual.transform(
        (geometry.transform() as any).scale(1.07, 1.07, [origin.x, origin.y])
      );
    } else {
      args.dataItem.highlighted = false;
      var origin = null; // args.point.box.center()
      args.point.visual.transform(null);
    }
  }
}
