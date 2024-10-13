import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Map, Route, UserPlus, Zap } from 'lucide-react';
import { useState } from 'react';
import { Button } from './button';
import { Card } from './card';
import { CustomerModal } from './customer-modal';
import { DialogHeader } from './dialog';
import { DriverModal } from './driver-modal';
import { RouteModal } from './route-modal';

type ModalType = 'driver' | 'route' | 'customer';

export const QuickActions = () => {
  const [openModal, setOpenModal] = useState<ModalType | null>(null);

  const handleOpenModal = (modalKey: ModalType) => setOpenModal(modalKey);
  const closeModal = () => setOpenModal(null);

  const QUICK_ACTIONS = [
    {
      modalKey: 'driver', // key
      icon: <UserPlus className="h-5 w-5 mr-2" />,
      title: 'Add Driver',
      subtitle: 'Fill in the driver details here.',
      body: <DriverModal closeModal={closeModal} />,
    },
    {
      modalKey: 'customer',
      icon: <Map className="h-5 w-5 mr-2" />,
      title: 'Add Customer',
      subtitle: 'Fill in customer data here',
      body: <CustomerModal closeModal={closeModal} />,
    },
    {
      modalKey: 'route',
      icon: <Route className="h-5 w-5 mr-2" />,
      title: 'Add Route',
      subtitle: 'Fill in the route details here.',
      body: <RouteModal closeModal={closeModal} />,
    },
  ] as const;

  return (
    <Card className="my-10 p-6 pt-5 w-fit self-end">
      <h1 className="font-bold text-2xl flex gap-2 items-center ">
        <Zap />
        Quick Actions
      </h1>
      <div className="flex gap-5 mt-6">
        {QUICK_ACTIONS.map(({ modalKey, icon, title, subtitle, body }) => (
          <div key={modalKey}>
            <Button onClick={() => handleOpenModal(modalKey)}>
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
          </div>
        ))}
      </div>
    </Card>
  );
};
