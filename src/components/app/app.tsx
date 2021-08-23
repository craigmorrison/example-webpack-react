import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PokemonListView from '../people-list';

const queryClient = new QueryClient();

function App(): ReactElement {
  return (
    <>
      <header role="banner">
        <h1>Star Wars</h1>
      </header>

      <main>
        <QueryClientProvider client={queryClient}>
          <PokemonListView />
        </QueryClientProvider>
      </main>

      <footer role="contentinfo">Legal Stuff</footer>
    </>
  );
}

export default App;
