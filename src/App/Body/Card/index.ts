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
} & ParentConstructorParam;

@injectable()
export default class Card extends OwlElement {
  title: string;

  constructor (payload: ConstructorParam) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
        new ClickHandler({ ytId: payload.ytId }),
      ],
      ...payload,
    });
    this.title = payload.title;
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <img src=${`https://i.ytimg.com/vi/${payload.ytId}/hqdefault.jpg`} />
        <div id='text-div'>
          ${payload.title}
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('app-body-card', Card);
