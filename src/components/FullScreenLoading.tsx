import React from 'react';

import { cn } from '@/lib/utils';
import type { FCC } from '@/types';

import { LoadingIcon } from './ui/button';

const FullScreenLoading: FCC<{ loading?: boolean }> = ({ loading, children }) => {
  if (!loading) return null;
  return (
    <div className={cn('bg-background/20 fixed inset-0 z-50  flex items-center justify-center backdrop-blur-md')}>
      <LoadingIcon size="3rem" />
    </div>
  );
};

export default FullScreenLoading;
