import {Component, Input} from '@angular/core';

@Component({
  selector: 'svg[icon]',
  imports: [],
  templateUrl: '<svg:use [attr.href]="href"></svg:use>',
  styleUrl: '',
})
export class SvgIcon {

  @Input() icon = '';

  get href() {
    return `/assets/svg/${this.icon}.svg#${this.icon}`;
  }
}
