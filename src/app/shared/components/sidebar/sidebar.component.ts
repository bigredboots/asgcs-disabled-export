import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
  OnDestroy,
  Input
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('overview') overview: ElementRef;
  constructor() {}
  @Output() onToggleSidebar = new EventEmitter<string>();

  toggleSidebar() {
    this.onToggleSidebar.next('hide');
    // this.overview.nativeElement.classList.toggle('sidebar-active');
  }

  ngOnInit(): void {}
}
