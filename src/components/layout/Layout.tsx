import Header from '@/components/layout/Header';
import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen bg-purple-background px-4 py-2'>
      <Header />
      <div className='mx-auto max-w-4xl'>{children}</div>
    </div>
  );
}
