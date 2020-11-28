import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  imageSrc = 'assets/image/school1.png'

  public messageSource = new BehaviorSubject<string>('School Management System')
  public imageSouce = new BehaviorSubject<any>(this.imageSrc)

  constructor() { }

  /**
   * changeMessage
   */
  // public changeMessage(title: string): void {
  //   return this.messageSource.next(title);
  // }

}
