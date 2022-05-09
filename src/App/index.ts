import { html, render } from 'lit-html';
import OwlElement, { ConstructorParam as ParentConstructorParam } from '@/src/OwlElement/Element';
import Style from '@/src/OwlElement/Attribute/Style';
import styles from './index.scss';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';

export type PayloadParam = {
} & ParentConstructorParam;

@injectable()
export default class App extends OwlElement {
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
        hello world
      `,
      this.rootElement,
    );
  }
}

customElements.define('ry-app', App);
