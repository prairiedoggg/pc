"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import StyledComponentsRegistry from './registry';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>
        {children}
      </StyledComponentsRegistry>
    </QueryClientProvider>
  );
} 