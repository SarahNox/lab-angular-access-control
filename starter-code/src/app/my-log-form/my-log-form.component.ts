import { Component, OnInit } from '@angular/core';
import { AccessControlLog } from '../services/accessControlLog.service';

@Component({
  selector: 'app-my-log-form',
  templateUrl: './my-log-form.component.html',
  styleUrls: ['./my-log-form.component.css'],
  providers: [AccessControlLog]
})
export class MyLogFormComponent implements OnInit {

  message: string = "";
  person: string = "";

  constructor(public accessControlLog: AccessControlLog) { }
// public accessControlLog: AccessControlLog
  ngOnInit() {
  }

  addPerson(person, message){
    console.log(person, message);
    this.accessControlLog.addRegister(person, message)
  }

}
