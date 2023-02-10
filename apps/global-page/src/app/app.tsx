import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { customUiBridgeLink } from '@toolsplus/forge-trpc-link';
import { tRPCFactory } from '../trpc/trpc-factory';
import Greeting from '../greeting/greeting';

export function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [tRPCClient] = useState(() =>
    tRPCFactory.createClient({
      links: [customUiBridgeLink({ resolverFunctionKey: 'rpc' })],
    })
  );
  return (
    <tRPCFactory.Provider client={tRPCClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Greeting/>
      </QueryClientProvider>
    </tRPCFactory.Provider>
  );
}

export default App;
