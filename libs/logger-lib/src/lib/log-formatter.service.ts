import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class LogFormatterService {
  public abstract format(message: string): string
}
