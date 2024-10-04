import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';

import { queryConfig } from '../../lib/react-query';
import { GridLoader } from 'react-spinners';
import { AuthLoader } from '../../lib/auth';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  );

  return (
    <React.Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <GridLoader className='text-3xl' />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={() => (<><span>Error</span></>)}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            {import.meta.env.DEV && <ReactQueryDevtools />}
            {import.meta.env.DEV && <TanStackRouterDevtools />}
            {/* <Notifications /> */}
            <AuthLoader
              renderLoading={() => (
                <div className="flex h-screen w-screen items-center justify-center">
                  <GridLoader className='text-3xl' />
                </div>
              )}
              renderError={(err) => <div>Error {`${err}`}</div>}
            >
              {children}
            </AuthLoader>
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default AppProvider