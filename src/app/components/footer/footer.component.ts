import { Component } from '@angular/core';
import { faVk, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faVk=faVk;
  faFacebook=faFacebook;
  faInstagram=faInstagram;
}
