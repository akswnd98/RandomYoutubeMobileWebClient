import { html, render } from 'lit-html';
import OwlElement, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import AppendNotifier from '@/src/data-binding/YoutubeIds/Notifier/Append';

export type PayloadParam = {
} & ParentConstructorParam;

@injectable()
export default class Body extends OwlElement {
  constructor () {
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
      `,
      this.rootElement,
    );
  }
}

customElements.define('app-body', Body);
