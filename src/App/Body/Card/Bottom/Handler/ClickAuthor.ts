import Handler, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Attribute/Handler';
import 'reflect-metadata';
import { injectable } from 'inversify';

export type ConstructorParam = {
  authorUrl: string;
};

@injectable()
export default class ClickAuthor extends Handler<'click'> {
  eventName: 'click' = 'click';
  authorUrl: string;

  constructor (payload: ConstructorParam) {
    super({
      ...payload,
      id: 'author',
    });
    this.authorUrl = payload.authorUrl;
  }

  async handle (event: MouseEvent) {
    location.href = this.authorUrl;
    event.stopPropagation();
  }
}
