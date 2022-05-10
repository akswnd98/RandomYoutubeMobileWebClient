import OwlElement, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { render, html } from 'lit-html';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';

export type ConstructorParam = {
  thumbnailSrc: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  title: string;
} & ParentConstructorParam;

@injectable()
export default class Card extends OwlElement {
  thumbnailSrc: string;
  title: string;

  constructor (payload: ConstructorParam) {
    super({
      attributes: [ new Style({ styles: styles.toString() }) ],
      ...payload,
    });
    this.thumbnailSrc = payload.thumbnailSrc;
    this.title = payload.title;
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <img src=${payload.thumbnailSrc} />
        <div id='text-div'>
          ${payload.title}
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('app-body-card', Card);
