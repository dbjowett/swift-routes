import { Link } from '@tanstack/react-router';
import { Button } from './button';
import { ThemeToggle } from './theme-toggle';

export const Navbar = () => {
  return (
    <div className="w-full h-16 flex justify-between items-center px-5 border-b-2 border-gray-200 dark:border-gray-700 ">
      <Link to="/" className="[&.active]:font-bold">
        <h1 className="text-xl font-semibold text-slate-900 dark:text-white">SwiftRoutes</h1>
      </Link>
      <ul className="flex gap-1">
        <Button variant="ghost" asChild>
          <Link to="/customers" className="text-slate-900 dark:text-white">
            Customers
          </Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link to="/routes" className="text-slate-900 dark:text-white">
            Routes
          </Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link to="/drivers" className="text-slate-900 dark:text-white">
            Drivers
          </Link>
        </Button>
        <ThemeToggle />
      </ul>
    </div>
  );
};
