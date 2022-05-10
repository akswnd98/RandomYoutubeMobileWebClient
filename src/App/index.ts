import { html, render } from 'lit-html';
import OwlElement, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import NavBar from './NavBar';
import Body from './Body';
import { SYMBOLS } from '../symbols';
import ScrollHandler from './Handler/Scroll';

export type PayloadParam = {
  body: Body;
} & ParentConstructorParam;

@injectable()
export default class App extends OwlElement {
  constructor (
    @inject(SYMBOLS.AppBody) body: Body,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
        new ScrollHandler({}),
      ],
      body,
    } as PayloadParam);
  }

  initialRender (payload: PayloadParam) {
    super.initialRender(payload);
    render(
      html`
        ${new NavBar()}
        ${payload.body}
      `,
      this.rootElement,
    );
  }
}

customElements.define('ry-app', App);
