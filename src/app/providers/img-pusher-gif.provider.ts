import {Injectable} from 'angular2/core';
import {GLIF} from './glif';

@Injectable()
export class ImgPusherGifService {
  private glif: GLIF;
  private gifCache: any = {};

  constructor() {
    this.glif = new GLIF();
  }

  public createGif(width, height) {
    width = parseInt(width, 10);
    height = parseInt(height, 10);
    let reduced = this.reduceFraction(width, height);
    width = reduced[0];
    height = reduced[1];
    let pixels = [width * height];
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        pixels[x + y * width] = 0;
      }
    }
    let gifKey = `${width}x${height}`;
    if (this.gifCache[gifKey]) {
      // don't re-make gifs of sizes that have already been made
      return this.gifCache[gifKey];
    } else {
      return this.gifCache[gifKey] = this.glif.make(width, height, pixels, 0, 0, 0);
    }
  }

  private reduceFraction(numerator: number, denominator: number) {
    let gcd = (a: number, b: number): number => {
      return b ? gcd(b, a % b) : a;
    };
    let g = gcd(numerator, denominator);
    return [numerator / g, denominator / g];
  }
}
