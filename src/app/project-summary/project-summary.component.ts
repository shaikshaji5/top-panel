
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.scss']
})
export class ProjectSummaryComponent {
  @Input() projectCode = 'PR/KTSIT/3568';
  @Input() projectTitle = 'Aramco - KTSIT - Aramco Supply chain control tower 3.0';
  @Input() serviceType = 'Lumpsum';
  @Input() overallValue = 'INR';
  @Input() collectedValue = '-';
  @Input() arValue = '-';
  @Input() projectManager = 'PM Name';
  @Input() itemStatus = '';
}
