import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Map, Route, UserPlus, Zap } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from './button';
import { Card } from './card';
import { DialogHeader } from './dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './form';
import { Input } from './input';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Driver's name must be at least 2 characters.",
  }),
  license: z.string().min(2, {
    message: "Driver's license must be at least 2 characters.",
  }),
});

const DriverModalContent = () => {
  const mutation = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      return axios.post('/api/driver/', values);
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      license: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    mutation.mutate(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Driver's Name</FormLabel>
              <FormControl>
                <Input placeholder="Please enter the driver's name" {...field} />
              </FormControl>
              {/* <FormDescription>This is the drivers name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="license"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Driver's License</FormLabel>
              <FormControl>
                <Input placeholder="Please enter the driver's license" {...field} />
              </FormControl>
              {/* <FormDescription>This is the drivers name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={mutation.isPending} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

const QUICK_ACTIONS = [
  {
    modalKey: 'driver', // key
    icon: <UserPlus className="h-5 w-5 mr-2" />,
    title: 'Add Driver',
    subtitle: 'Fill in the driver details here.',
    body: <DriverModalContent />,
  },
  {
    modalKey: 'route',
    icon: <Route className="h-5 w-5 mr-2" />,
    title: 'Add Route',
    subtitle: 'Fill in the route details here.',
    body: <div>Fill in the route details here.</div>,
  },
  {
    modalKey: 'customer',
    icon: <Map className="h-5 w-5 mr-2" />,
    title: 'Add Customer',
    subtitle: 'Fill in customer data here',
    body: <div>Fill in the customer details here.</div>,
  },
] as const;

type ModalType = 'driver' | 'route' | 'customer';

export const QuickActions = () => {
  const [openModal, setOpenModal] = useState<ModalType | null>(null);

  const handleOpenModal = (modalKey: ModalType) => setOpenModal(modalKey);
  const closeModal = () => setOpenModal(null);

  return (
    <Card className="my-10 p-6 pt-5 w-fit self-end">
      <h1 className="font-bold text-2xl flex gap-2 items-center ">
        <Zap />
        Quick Actions
      </h1>
      <div className="flex gap-5 mt-6">
        {QUICK_ACTIONS.map(({ modalKey, icon, title, subtitle, body }) => (
          <>
            <Button key={modalKey} onClick={() => handleOpenModal(modalKey)}>
              {icon}
              {title}
            </Button>
            <Dialog open={openModal === modalKey} onOpenChange={closeModal}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{title}</DialogTitle>
                  <DialogDescription>{subtitle}</DialogDescription>
                </DialogHeader>
                {body}
              </DialogContent>
            </Dialog>
          </>
        ))}
      </div>
    </Card>
  );
};
