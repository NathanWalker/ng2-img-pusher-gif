import {
Directive,
Input,
ElementRef,
Renderer,
OnInit
} from 'angular2/core';
import {ImgPusherGifService} from '../providers/img-pusher-gif.provider';

@Directive({
  selector: '[pusher-gif]'
})
export class ImgPusherGifDirective implements OnInit {
  @Input('pusher-gif') dimensions: string;
  @Input('data-width') width: number;
  @Input('data-height') height: number;

  constructor(private el: ElementRef, private renderer: Renderer, private pusherGifService: ImgPusherGifService) { }

  ngOnInit() {
    let w;
    let h;
    if (this.dimensions) {
      let d = this.dimensions.split('x');
      w = d[0];
      h = d[1];
    } else if (this.width && this.height) {
      w = this.width;
      h = this.height;
    } else {
      this.error();
    }
    if (w && h) {
      this.renderer.setElementAttribute(this.el.nativeElement, 'src', this.pusherGifService.createGif(w, h));
    }
  }

  private error() {
    throw new Error(`ImgPusherGifDirective requires dimensions. Example usage: pusher-gif="100x100" or data-width="100" and data-height="100"`);
  }
}
