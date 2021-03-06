import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {

  logMessages: Array<Object> = [{
    person: String,
    message: String,
    createdAt: Date
  }];

  constructor() { }

  getRegister(): Array<Object> {
    this.logMessages.forEach((logMessage) => {
      console.log(logMessage);
    })
    return this.logMessages;
  }

  addRegister(person: string, message: string): void{
    let createdAt = new Date;
    let newRegister = {person,message,createdAt}
    this.logMessages.push(newRegister);
    console.log(this.getRegister());
  }

}
