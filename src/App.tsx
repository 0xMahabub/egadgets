import { FC } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AppLayout from './AppLayout';

const queryClient = new QueryClient();

export const AppPage = () => {
  return (
    <>
      <h1>Hello world!</h1>
      <p>this is content area</p>
    </>
  );
};

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        <AppPage />
      </AppLayout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
