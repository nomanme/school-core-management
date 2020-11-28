import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../share/share.service'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  message: string = "";
  constructor(private shared: ShareService) { }

  public ngOnInit() {

    this.shared.messageSource.subscribe((message) => (this.message = message))
  };
}