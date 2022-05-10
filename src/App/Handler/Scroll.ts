import { GetRandomYoutubeIdsResponse } from '@/src/common';
import AppendYoutubeIdsNotifier from '@/src/data-binding/YoutubeIds/Notifier/Append';
import InversifyStatic from '@/src/inversify.config';
import Handler from '@/src/owl-element/Attribute/Handler';
import { SYMBOLS } from '@/src/symbols';
import axios from 'axios';
import { injectable } from 'inversify';
import App from '..';

export type ConstructorParam = {
};

@injectable()
export default class Scroll extends Handler<'scroll'> {
  eventName: 'scroll' = 'scroll';

  lock: boolean;

  constructor (payload: ConstructorParam) {
    super({
      id: 'root',
    });
    this.lock = false;
  }

  async handle (event: Event) {
    try {
      if (!this.lock && this.checkScrollEnd()) {
        this.lock = true;
        this.resolveLock(1000);
        const data = (await axios.get<GetRandomYoutubeIdsResponse>('/api/randomYoutubeIds')).data;
        await InversifyStatic.instance.get<AppendYoutubeIdsNotifier>(SYMBOLS.AppendYoutubeIdsNotifier).notify({
          newIds: data.ids,
        });
      }
    } catch (e) {
      console.log(e);
      throw Error('AppScrollHandler.handle failed');
    }
  }

  checkScrollEnd () {
    const app = InversifyStatic.instance.get<App>(SYMBOLS.App);
    return app.rootElement.scrollTop + app.rootElement.clientHeight >= app.rootElement.scrollHeight - 10;
  }

  resolveLock (ms: number) {
    setTimeout(() => {
      this.lock = false;
    }, ms);
  }
}
