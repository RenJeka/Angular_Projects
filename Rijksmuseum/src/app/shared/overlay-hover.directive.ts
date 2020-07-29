import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[overlayHover]'
})
export class OverlayHoverDirective {

  @Input('overlayHover') text: string;

  overlay: HTMLDivElement;
  textInsideOverlay: HTMLDivElement;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    this.overlay = this.renderer.createElement('div');
    this.renderer.addClass(this.overlay, 'overlay-hover');
    this.textInsideOverlay = this.renderer.createElement('div');
    this.renderer.addClass(this.textInsideOverlay, 'overlay-text');
    this.renderer.appendChild(this.overlay, this.textInsideOverlay)
  }


  @HostListener('mouseenter') onEnter() {

  }

  @HostListener('mouseleave') onLeave() {

  }


}
