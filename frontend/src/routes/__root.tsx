import { ThemeProvider } from '@/components/theme-provider';
import { Layout } from '@/components/ui/layout';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <Layout>
        <Outlet />
        <TanStackRouterDevtools />
      </Layout>
    </ThemeProvider>
  ),
});
