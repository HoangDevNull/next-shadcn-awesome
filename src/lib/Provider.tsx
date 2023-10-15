import type { DefaultOptions } from '@tanstack/react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { memo } from 'react';
import { Toaster } from 'react-hot-toast';

import { ThemeProvider } from '@/components/ThemeProvider';
import type { FCC } from '@/types';

interface Props {}

const queryOption: DefaultOptions['queries'] = {
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
  retry: false,
};

const queryClient = new QueryClient({ defaultOptions: { queries: queryOption } });

const Provider: FCC<Props> = ({ children }) => {
  const [_queryClient] = React.useState(() => queryClient);

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
        <QueryClientProvider client={_queryClient}>
          {children}
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ThemeProvider>
      <Toaster
        toastOptions={{
          position: 'bottom-right',
          success: {
            className: 'border border-green-300 !bg-background text-sm !items-baseline rounded-md',
          },
          error: {
            className: 'border border-red-300 !bg-background text-sm !items-baseline rounded-md',
          },
        }}
        containerStyle={{
          zIndex: 99999999,
        }}
      />
    </>
  );
};

export default memo(Provider);
