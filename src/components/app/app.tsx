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
} from './app.styles';

const queryClient = new QueryClient();

function App(): ReactElement {
  return (
    <div css={siteWrapper}>
      <header role="banner" css={banner}>
        <h1 css={bannerTitle}>Star Wars</h1>
      </header>

      <main css={siteMain}>
        <QueryClientProvider client={queryClient}>
          <PokemonListView />
        </QueryClientProvider>
      </main>

      <footer role="contentinfo" css={contentInfo}>
        Data provided by{' '}
        <a href="https://swapi.dev" css={contentInfoLink}>
          swapi.dev
        </a>
      </footer>
    </div>
  );
}

export default App;
