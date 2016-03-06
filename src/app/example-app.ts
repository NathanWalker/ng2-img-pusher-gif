import {Component, ViewEncapsulation} from 'angular2/core';
import {ImgPusherGifService} from './providers/img-pusher-gif.provider';
import {EXAMPLES} from './examples';

@Component({
  selector: 'example-app',
  template: `
  <div class='examples'>
    <example-a></example-a>
    <div class="text">Using 200x100. Generates the smallest fraction to create the smallest base64 gif possible, so this becomes a gif that scales natively with a size of 2x1. </div>
    <example-b></example-b>
    <div class="text">Using 2x1. Just to illustrate that the exact same gif is generated as above by explicitly setting the smallest reduced fraction.</div>
    <example-c></example-c>
    <div class="text">Using 400x50. This is reduced down to 8x1.</div>
    <example-d></example-d>
    <div class="text">Using 1000x500. This can be reduced to 2x1 like the first 2 examples and see how the aspect ratio is the same as the first 2 examples.</div>
    <example-e></example-e>
    <div class="text">Using 822x313. When the aspect cannot be reduced, a gif is generated at the exact dimensions still allowing native responsive scaling.</div>
  </div>
  `,
  encapsulation: ViewEncapsulation.None,
  providers: [ImgPusherGifService],
  directives: [EXAMPLES]
})
export class ExampleApp {}
