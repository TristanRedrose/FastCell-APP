import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private meta: Meta, private title: Title) { }

  setMetaTags(title: string, description: string, keywords: string): void {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords });
  }

  setAuthor(author: string) {
    this.meta.updateTag({ name: 'author', content: author });
  }
}
