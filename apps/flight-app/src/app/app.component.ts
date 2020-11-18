import {Component} from '@angular/core';
import { LoggerService } from '@flight-workspace/logger-lib';
import {OnInit} from '@angular/core'

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor( private loggerService: LoggerService ) { 
  }

  public ngOnInit(): void {
    this.loggerService.debug('hello from debug')
    this.loggerService.log('hello from log')
  }
}

