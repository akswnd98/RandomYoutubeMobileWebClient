import { interfaces, AsyncContainerModule } from 'inversify';
import { SYMBOLS } from './symbols';
import App from './App';

const module = new AsyncContainerModule(
  async (
    bind: interfaces.Bind,
  ) => {
    bind<App>(SYMBOLS.App).to(App).inSingletonScope();
  }
);

export default module;
