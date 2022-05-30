import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GridContainerComponent } from './components/grid/grid-container/grid-container.component';
import { GridCellDirective } from './components/grid/grid-cell/grid-cell.directive';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NavigationSidePanelComponent } from './components/navigation-side-panel/navigation-side-panel.component';
import { SingleDoubleClickDirective } from './directives/single-double-click.directive';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

import { DonutComponent } from './components/charts/donut-chart/donut-chart.component';
import { VertgridComponent } from './components/vertgrid/vertgrid.component';
import { VertgridaltComponent } from './components/vertgridalt/vertgridalt.component';
import { HorizgridComponent } from './components/horizgrid/horizgrid.component';
import { DonutComponentAlt } from './components/charts/donut-chart-alt/donut-chart-alt.component';
import { ChartsModule } from '@progress/kendo-angular-charts';

import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import {
  GridModule,
  PDFModule,
  ExcelModule,
} from '@progress/kendo-angular-grid';

@NgModule({
  declarations: [
    GridContainerComponent,
    GridCellDirective,
    DonutComponent,
    DonutComponentAlt,

    VertgridComponent,
    VertgridaltComponent,
    HorizgridComponent,
    NavigationBarComponent,
    NavigationSidePanelComponent,
    SingleDoubleClickDirective,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ChartsModule,
    GridModule,
    PDFModule,
    ExcelModule,
    DropDownsModule,
    LabelModule,
    InputsModule,
    ButtonsModule,
  ],
  exports: [
    DonutComponent,
    DonutComponentAlt,
    VertgridComponent,
    VertgridaltComponent,
    HorizgridComponent,
    GridContainerComponent,
    GridCellDirective,
    NavigationBarComponent,
    NavigationSidePanelComponent,
    SingleDoubleClickDirective,
    HeaderComponent,
    SidebarComponent,
  ],
  bootstrap: [DonutComponent],
})
export class SharedModule {}
