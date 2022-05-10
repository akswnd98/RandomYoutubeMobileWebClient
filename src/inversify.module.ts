import { interfaces, AsyncContainerModule } from 'inversify';
import { SYMBOLS } from './symbols';
import App from './App';
import AppBody from './App/Body';
import type YoutubeIds from './data-binding/YoutubeIds/Model';
import AppendYoutubeIdsNotifier from './data-binding/YoutubeIds/Notifier/Append';
import AppendCardsObserver from './data-binding/YoutubeIds/Observer/Append';

const module = new AsyncContainerModule(
  async (
    bind: interfaces.Bind,
  ) => {
    bind<App>(SYMBOLS.App).to(App).inSingletonScope();
    bind<AppBody>(SYMBOLS.AppBody).to(AppBody).inSingletonScope();
    bind<YoutubeIds>(SYMBOLS.YoutubeIds).toConstantValue([]);
    bind<AppendYoutubeIdsNotifier>(SYMBOLS.AppendYoutubeIdsNotifier).to(AppendYoutubeIdsNotifier).inSingletonScope();
    bind<AppendCardsObserver>(SYMBOLS.AppendCardsObserver).to(AppendCardsObserver);
  }
);

export default module;
