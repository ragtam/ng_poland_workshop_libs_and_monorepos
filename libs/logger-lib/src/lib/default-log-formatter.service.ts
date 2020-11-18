import { Injectable } from '@angular/core';
import { LogFormatterService } from './log-formatter.service';

@Injectable({
  providedIn: 'root'
})
export class DefaultLogFormatterService implements LogFormatterService {

  public format(message: string): string {
    return message;
  }
}
