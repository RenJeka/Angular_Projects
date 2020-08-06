import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2
} from '@angular/core';

/**
 * Директива выводит большое изображение (на весь родительский контейнер), добавляя задний фон и размытие заднего фона
 * Для вывода изображения необходимо передать url изображения как параметр (значение) директивы
 */
@Directive({
  selector: '[imageScale]'
})
export class ImageScaleDirective {

  @Input('imageScale') passedImageUrl: string;
  private bigImage: HTMLDivElement = this.renderer.createElement("div");
  private bigImageContainer: HTMLDivElement = this.renderer.createElement("div");
  private bigImageOverlay: HTMLDivElement = this.renderer.createElement("div");
  private imageUrl: string;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
  ) {
    this.renderer.setStyle(this.elRef.nativeElement, "cursor", "zoom-in");
    this.renderer.addClass(this.bigImageOverlay,"overlay-big-image");
    this.renderer.addClass(this.bigImage,"bigImage");
    this.renderer.appendChild(this.bigImageContainer, this.bigImageOverlay);
    this.renderer.appendChild(this.bigImageOverlay, this.bigImage);
    this.renderer.appendChild(this.elRef.nativeElement, this.bigImageContainer);
    this.renderer.addClass(this.bigImageContainer, 'inactive');
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    this.imageUrl = this.getImageUrl();

    if (this.imageUrl) {
      this.renderer.setStyle(this.bigImage, "background-image", `url('${this.imageUrl}')`);
    } else {
      this.renderer.addClass(this.bigImage,"not-found");
    }

    this.bigImageContainer.classList.toggle("inactive")
  }

  /**
   * Метод получает  URL для изображения
   */
  getImageUrl(): string | null {
    if (this.passedImageUrl) {
      return this.passedImageUrl;
    } else if (this.elRef.nativeElement.style.backgroundImage) {
      return  this.elRef.nativeElement.style.backgroundImage.slice(5, -2);
    } else {
      console.error(new Error("Не найден URL для использования директивы 'imageScale'. Проверьте стили 'backgroundImage' или" +
        " передайте URL параметром в директиву 'imageScale'"));
      return null;
    }
  }
}
