import { MatSnackBar } from '@angular/material/snack-bar';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {faClock} from "@fortawesome/free-solid-svg-icons"
@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent {
  faClock=faClock;
  public phoneForm = this.fb.group({
    name: new FormControl(null,[Validators.required]),
    phone: new FormControl(null, [Validators.maxLength(9),Validators.minLength(9), Validators.required, this.phoneValidator]),
  });
  constructor(private fb: FormBuilder,
              private snackBar:MatSnackBar)
  {}
  send()
  {
    // console.log(
    //   this.phoneForm.value
    //   );
    this.snackBar.open("Ваше сообщение отправлено!","",{duration: 5*1000,});
    this.phoneForm.reset();
    // this.servisePost.sendPost(this.phoneForm.value.name+";"+this.phoneForm.value.phone)
  }
  phoneValidator(control:FormControl)
  {
    const regex=/^[0-9]{2}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gm;
    return (control.value!==null&&!regex.test(control.value))?{phoneError:true}:null;
  }
}
