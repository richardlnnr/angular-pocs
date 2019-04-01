import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomElementLoaderService {

  stylesList: any = [];
  scriptsList: any = [];

  constructor() { }

  loadScript(url: string) {
    if (!this.scriptsList.includes(url)) {
      this.scriptsList.push(url);
      return new Promise(resolve => document.body.appendChild(this.createScript(url, resolve)));
    }
  }

  loadStyles(url: string) {
    if (!this.stylesList.includes(url)) {
      this.stylesList.push(url);
      document.head.appendChild(this.createLink(url));
    }
  }

  private createScript(url: string, resolve) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.setAttribute('src', url);
    script.onload = () => resolve();
    return script;
  }

  private createLink(url: string) {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', url);
    return link;
  }
}
