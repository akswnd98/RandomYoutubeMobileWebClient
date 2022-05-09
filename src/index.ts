import App from './App';
import styles from './index.scss';
import ContainerStatic from './inversify.config';
import { SYMBOLS } from './symbols';

(async () => {
  const container = await ContainerStatic.getInstance();

  const stylesElement = document.createElement('style');
  stylesElement.textContent = styles.toString();
  document.head.appendChild(stylesElement);

  const root = document.getElementById('root')!;
  root.appendChild(container.get<App>(SYMBOLS.App));
})();
