import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { Component } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { HttpClientModule } from '@angular/common/http';
import { HTMLEscapeUnescapeModule } from 'html-escape-unescape';
import { NgIdleModule } from '@ng-idle/core';

import { DashboardComponent } from './pages/dashboard.component';

import { DemandOverviewComponent } from './pages/demand/demand-overview/demandOverview.component';
import { DemandDiscoverComponent } from './pages/demand/demand-discover/demandDiscover.component';
import { DemandReportsComponent } from './pages/demand/demand-reports/demandReports.component';
import { DemandReportsWavechartComponent } from './pages/demand/demand-reports-wavechart/demandReportsWavechart.component';
import { DemandReportsTotalDemandComponent } from './pages/demand/demand-reports-totaldemand/demandReportsTotalDemand.component';
import { DemandReportsLocationsComponent } from './pages/demand/demand-reports-locations/demandReportsLocations.component';
import { DemandReportsProfileComponent } from './pages/demand/demand-reports-profile/demandReportsProfile.component';

import { OutboundOverviewComponent } from './pages/outbound/outbound-overview/outboundOverview.component';
import { OutboundDiscoverComponent } from './pages/outbound/outbound-discover/outboundDiscover.component';
import { OutboundReportsComponent } from './pages/outbound/outbound-reports/outboundReports.component';
import { OutboundReportsLocationsComponent } from './pages/outbound/outbound-reports-locations/outboundReportsLocations.component';
import { OutboundReportsTotaldemandComponent } from './pages/outbound/outbound-reports-totaldemand/outboundReportsTotaldemand.component';
import { OutboundReportsWavechartComponent } from './pages/outbound/outbound-reports-wavechart/outboundReportsWavechart.component';
import { OutboundReportsProfileComponent } from './pages/outbound/outbound-reports-profile/outboundReportsProfile.component';

import { HubsComponent } from './pages/hubs/hubs/hubs.component';
import { ReportsComponent } from './pages/reports/reports/reports.component';
import { ExpandedReportsComponent } from './pages/expandedreports/expandedreports.component';
import { SupplyComponent } from './pages/supply/supply/supply.component';

import { SettingsComponent } from './pages/settings/settings/settings.component';
import 'hammerjs';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ChartsModule,
    HttpClientModule,
    CoreModule,
    HTMLEscapeUnescapeModule,
    SharedModule,
    DropDownsModule,
    LabelModule,
    InputsModule,
    ButtonsModule,
    NgIdleModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    DemandOverviewComponent,
    DemandDiscoverComponent,
    DemandReportsComponent,
    DemandReportsWavechartComponent,
    DemandReportsTotalDemandComponent,
    HubsComponent,
    SupplyComponent,
    ReportsComponent,
    ExpandedReportsComponent,
    SettingsComponent,
    DemandReportsLocationsComponent,
    DemandReportsProfileComponent,
    OutboundOverviewComponent,
    OutboundDiscoverComponent,
    OutboundReportsComponent,
    OutboundReportsWavechartComponent,
    OutboundReportsTotaldemandComponent,
    OutboundReportsLocationsComponent,
    OutboundReportsProfileComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  DropDownFillMode;
}
