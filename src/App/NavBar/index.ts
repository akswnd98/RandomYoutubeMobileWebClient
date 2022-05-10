import { html, render } from 'lit-html';
import OwlElement, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';

export type PayloadParam = {
} & ParentConstructorParam;

@injectable()
export default class NavBar extends OwlElement {
  constructor (
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    } as PayloadParam);
  }

  initialRender (payload: PayloadParam) {
    super.initialRender(payload);
    render(
      html`
        <img src='/assets/images/YoutubeSharingLogo.svg' />
      `,
      this.rootElement,
    );
  }
}

customElements.define('nav-bar', NavBar);
