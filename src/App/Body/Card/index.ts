import OwlElement, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { render, html } from 'lit-html';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import ClickHandler from './Handler/Click';

export type ConstructorParam = {
  ytId: string;
  title: string;
  authorName: string;
  authorUrl: string;
  thumbnailUrl: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
} & ParentConstructorParam;

@injectable()
export default class Card extends OwlElement {
  constructor (payload: ConstructorParam) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
        new ClickHandler({ ytId: payload.ytId }),
      ],
      ...payload,
    });
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <img src=${payload.thumbnailUrl} />
        <div id='text-div'>
          ${payload.title}
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('app-body-card', Card);
