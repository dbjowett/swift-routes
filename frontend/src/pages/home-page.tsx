import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

interface Customer {
  id: number;
  name: string;
  routes: number[];
  drivers: number[];
}

interface Addresses {
  id: string;
  customerId: string;
  street: string;
  city: string;
  postalCode: string;
}

export const HomePage = () => {
  const navigate = useNavigate();

  const customers: Customer[] = [
    {
      id: 10,
      name: "Bill's Cycle",
      routes: [],
      drivers: [],
    },
  ];

  const pingBackend = async () => {
    const res = await fetch('/api/', {
      method: 'GET',
    });
    const data = await res.text();

    console.log('response', data);
  };

  useEffect(() => {
    void pingBackend();
  }, []);

  return (
    <div className="p-8 flex gap-3 flex-col">
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
    </div>
  );
};
