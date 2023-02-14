import { Component } from '@angular/core';
import {faPhone, faBars} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faPhone=faPhone;
  faBars=faBars;
}
