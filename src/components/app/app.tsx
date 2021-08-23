import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PokemonListView from '../people-list';
import {
  banner,
  bannerTitle,
  contentInfo,
  contentInfoLink,
  siteWrapper,
  siteMain
} from './app.css';

const queryClient = new QueryClient();

function App(): ReactElement {
  return (
    <div className={siteWrapper}>
      <header role="banner" className={banner}>
        <h1 className={bannerTitle}>Star Wars</h1>
      </header>

      <main className={siteMain}>
        <QueryClientProvider client={queryClient}>
          <PokemonListView />
        </QueryClientProvider>
      </main>

      <footer role="contentinfo" className={contentInfo}>
        Data provided by{' '}
        <a href="https://swapi.dev" className={contentInfoLink}>
          swapi.dev
        </a>
      </footer>
    </div>
  );
}

export default App;
