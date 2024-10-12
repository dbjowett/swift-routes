import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { QuickActions } from '@/components/ui/quick-actions';
import { useNavigate } from '@tanstack/react-router';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-2 py-8 flex gap-3 flex-col">
      <QuickActions />
      <div className="flex justify-end">
        <Button variant="link" onClick={() => navigate({ to: '/customers' })}>
          View more
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Customers</CardTitle>
          <CardDescription>Add customers to create routes</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <div className="flex justify-end">
        <Button variant="link" onClick={() => navigate({ to: '/drivers' })}>
          View more
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Drivers</CardTitle>
          <CardDescription>Add drivers to add to routes</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <div className="flex justify-end">
        <Button variant="link" onClick={() => navigate({ to: '/routes' })}>
          View more
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Routes</CardTitle>
          <CardDescription>Add routes to assign to drivers</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};
