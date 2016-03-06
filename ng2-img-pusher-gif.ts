import {ImgPusherGifDirective} from './src/app/directives/img-pusher-gif.directive';
import {ImgPusherGifService} from './src/app/providers/img-pusher-gif.provider';

export *  from './src/app/directives/img-pusher-gif.directive';
export *  from './src/app/providers/img-pusher-gif.provider';

export default {
  directives: [ImgPusherGifDirective],
  providers: [ImgPusherGifService]
}

