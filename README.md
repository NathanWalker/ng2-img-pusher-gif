## ng2-img-pusher-gif

Dynamic 'browser native' vertical scaling is difficult. Poor solutions include JavaScript and CSS. By using the `img` tag it can be easily accomplished with images, the building blocks of the web that have been around since the dawn of the internet.

The `img` tag from day one has been the only element that respects aspect ratios. Taking advantage of this fact, you can use an `img` to reposition content in the vertical space, which makes responsive design a breeze.

This is the official [Angular 2](https://angular.io/) version of the plain vanilla JS [pusher](https://github.com/kirkstrobeck/pusher) lib written by my good friend [Kirk Strobeck](https://github.com/kirkstrobeck). He has written a condensed article about this strategy [here](https://medium.com/@kirkstrobeck/pusher-9c44d7418520#.n9nxw4aok). Kirk and I co-developed this strategy for an application we were working on and have long been excited to share it with others. 

# Demo

*Give it a couple seconds to start up since it's on a heroku instance.*

Try out the [DEMO](https://ng2-img-pusher-gif-demo.herokuapp.com/)!

# Install

```shell
npm install ng2-img-pusher-gif --save
```

# Usage

You'll need to add `ImgPusherGifService` to your components `providers` (or application `bootstrap`) and also add `ImgPusherGifDirective` to your components `directives`.

```js
@Component({
  selector: 'sample',
  directives: [ImgPusherGifDirective],
  providers: [ImgPusherGifService],
  template:`
  <div>
    <img pusher-gif [data-width]="width" [data-height]="height" />
  </div>
  `
})
class Sample {
  public width: number = 200;
  public height: number = 100;
}
```

or...

```js
@Component({
  selector: 'sample',
  directives: [ImgPusherGifDirective],
  providers: [ImgPusherGifService],
  template:`
  <div>
    <img [pusher-gif]="dimensions" />
  </div>
  `
})
class Sample {
  public dimensions: string = '200x100';
}
```

## Directive

### ImgPusherGifDirective

```html
<img [pusher-gif]="'200x100'" />
```

or...

```html
<img pusher-gif [data-width]="'200'" [data-height]="'100'" />
```

## Service

### ImgPusherGifService

The service is used internally by the directive. However you can use it directly if needed.

#### API

* `createGif(width: number | string, height: number | string)`: generate a base64 encoded gif at the desired width/height. Note arguments can be passed as numbers or strings for convenience. 

# Contributing

Please see the [CONTRIBUTING](https://github.com/NathanWalker/ng2-img-pusher-gif/blob/master/CONTRIBUTING.md) file for guidelines.

# License

MIT
