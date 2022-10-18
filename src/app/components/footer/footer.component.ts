import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  currentDate: Date = new Date();
  copyRight = environment.copyRight;
  copyRightlink = environment.copyRightLink;
}
