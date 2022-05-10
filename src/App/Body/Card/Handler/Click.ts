import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Attribute/Handler';
import Card from '..';

export type ConstructorParam = {
  ytId: string;
};

export default class Click extends Handler<'click'> {
  eventName: 'click' = 'click';
  ytId: string;

  constructor (payload: ConstructorParam) {
    super({
      ...payload,
      id: 'root',
    });
    this.ytId = payload.ytId;
  }

  async handle (event: MouseEvent) {
    location.href = `https://youtube.com/watch?v=${this.ytId}`;
  }
}
