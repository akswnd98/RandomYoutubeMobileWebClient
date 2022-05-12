import OwlElement, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import 'reflect-metadata';
import { injectable } from 'inversify';
import { render, html } from 'lit-html';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import ClickHandler from './Handler/Click';
import Bottom from './Bottom';

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
        <div id='wrapper'>
          <img src=${payload.thumbnailUrl} />
        </div>
        <div id='text-div'>
          ${new Bottom({
            ytId: payload.ytId,
            title: payload.title,
            authorName: payload.authorName,
            authorUrl: payload.authorUrl,
          })}
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('app-body-card', Card);
