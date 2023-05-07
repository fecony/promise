import { configureQueryClient } from '@wasp/queries';

export default async function mySetupFunction() {
  // ... some setup
  configureQueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: false,
        retry: false,
      },
    },
  });
  // ... some more setup
}
