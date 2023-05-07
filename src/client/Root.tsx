import { FC, ReactNode } from 'react';
import { GeistProvider, CssBaseline, Page, Note } from '@geist-ui/core';

import 'inter-ui/inter.css';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <GeistProvider>
      <CssBaseline />
      <Page dotBackdrop width='800px'>
        <Note mb={'1rem'}>
          This project was 'done' in the last 3 hours, please have mercy.
        </Note>
        {children}
      </Page>
    </GeistProvider>
  );
};

export default RootLayout;
