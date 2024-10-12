import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from './button';
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

export const DriverModal = ({ closeModal }: { closeModal: () => void }) => {
  const { toast } = useToast();
  const mutation = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      return axios.post('/api/driver/', values);
    },
    onSuccess: () => {
      closeModal();
      toast({
        title: '🎉 Driver Added Successfully!',
        description: `Driver with the name ${form.getValues('name')} and licence ${form.getValues('license')} created.`,
      });
    },
    onError: () => {
      toast({
        title: 'Something went wrong!',
        description: `Please try again later.`,
      });
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
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={mutation.isPending} type="submit">
          {mutation.isPending && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
          Submit
        </Button>
      </form>
    </Form>
  );
};
