import Notifier, { ConstructorParam as ParentConstructorParam } from '@/src/owl-data-binding/Notifier';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import InversifyStatic from '@/src/inversify.config';
import YoutubeIds from '../../Model';
import { SYMBOLS } from '@/src/symbols';
import AppendCardsObserver from '../../Observer/Append';

export type ConstructorParam = {
} & ParentConstructorParam;

export type EventType = {
  newIds: string[];
};

@injectable()
export default class Append extends Notifier {
  constructor (
    @inject(SYMBOLS.AppendCardsObserver) appendCardsObserver: AppendCardsObserver,
  ) {
    super({
      observers: new Set([ appendCardsObserver ]),
    });
  }

  async notify (event: EventType) {
    try {
      InversifyStatic.instance.get<YoutubeIds>(SYMBOLS.YoutubeIds).push(...event.newIds);
      await super.notify(event);
    } catch (e) {
      console.log(e);
      throw Error('YoutubeIdsAppendNotifier.notify failed');
    }
  }
}
 