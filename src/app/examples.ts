import {Component} from 'angular2/core';
import {ImgPusherGifDirective} from './directives/img-pusher-gif.directive';

@Component({
  selector: 'boxes',
  template: `
  <div class="box" style="bottom: 0; left: 0;"></div>
  <div class="box" style="top: 0; left: 0;"></div>
  <div class="box" style="top: 0; right: 0;"></div>
  <div class="box" style="bottom: 0; right: 0;"></div>
  <div class="box" style="bottom: 0; right: 0; left: 0;"></div>
  <div class="box" style="top: 0; right: 0; left: 0;"></div>
  <div class="box" style="top: 0; bottom: 0; left: 0;"></div>
  <div class="box" style="top: 0; bottom: 0; right: 0;"></div>
  `
})
export class Boxes { }

@Component({
  selector: 'example-a',
  directives: [ImgPusherGifDirective, Boxes],
  template: `
  <div class="frame">
    <img [pusher-gif]="'200x100'" />
    <boxes></boxes>
  </div>
  `
})
export class ExampleA {}

@Component({
  selector: 'example-b',
  directives: [ImgPusherGifDirective, Boxes],
  template: `
  <div class="frame">
    <img [pusher-gif]="dimensions" />
    <boxes></boxes>
  </div>
  `
})
export class ExampleB {
  public dimensions: string = '2x1';
}

@Component({
  selector: 'example-c',
  directives: [ImgPusherGifDirective, Boxes],
  template: `
  <div class="frame">
    <img pusher-gif [data-width]="width" [data-height]="height" />
    <boxes></boxes>
  </div>
  `
})
export class ExampleC {
  public width: number = 400;
  public height: number = 50;
}

@Component({
  selector: 'example-d',
  directives: [ImgPusherGifDirective, Boxes],
  template: `
  <div class="frame">
    <img pusher-gif [data-width]="width" [data-height]="height" />
    <boxes></boxes>
  </div>
  `
})
export class ExampleD {
  public width: number = 1000;
  public height: number = 500;
}

@Component({
  selector: 'example-e',
  directives: [ImgPusherGifDirective, Boxes],
  template: `
  <div class="frame">
    <img pusher-gif [data-width]="width" [data-height]="height" />
    <boxes></boxes>
  </div>
  `
})
export class ExampleE {
  public width: number = 822;
  public height: number = 313;
}

export const EXAMPLES: any[] = [ExampleA, ExampleB, ExampleC, ExampleD, ExampleE];
