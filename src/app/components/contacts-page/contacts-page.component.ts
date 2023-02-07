import { Component } from '@angular/core';
import {faPhone} from "@fortawesome/free-solid-svg-icons"
@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent {
  faPhone=faPhone;
}
