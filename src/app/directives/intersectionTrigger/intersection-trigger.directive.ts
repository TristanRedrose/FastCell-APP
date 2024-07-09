import { Directive, ElementRef, Renderer2, AfterViewInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[appIntersectionTrigger]',
  standalone: true,
})
export class IntersectionTriggerDirective implements AfterViewInit, OnDestroy {
  @Input('appIntersectionTrigger') animationClass : string = '';
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, this.animationClass);
            this.observer.unobserve(this.el.nativeElement);
          }
        });
      });
  
      this.observer.observe(this.el.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
