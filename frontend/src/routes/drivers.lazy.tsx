import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/drivers')({
  component: () => <div>Hello /drivers!</div>,
});
