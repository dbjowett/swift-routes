import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Map, Route, UserPlus, Zap } from 'lucide-react';
import { useState } from 'react';
import { Button } from './button';
import { Card } from './card';
import { DialogHeader } from './dialog';

const DriverModalContent = () => {
  return <div></div>;
};

const QUICK_ACTIONS = [
  {
    modalKey: 'driver', // key
    icon: <UserPlus className="h-5 w-5 mr-2" />,
    title: 'Add Driver',
    subtitle: 'Fill in the driver details here.',
    body: <div>Add Driver content here</div>,
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
      <div className="flex gap-5 mt-4">
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
