import ThemeToggle from '@/components/layout/ThemeToggle/theme-toggle';
import { cn } from '@/lib/utils';
import { MobileSidebar } from './mobile-sidebar';
import { UserNav } from './user-nav';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-14 items-center justify-between px-4">
        <div className="hidden lg:block">
          <Link
            href={'https://github.com/tlklein/helios.git'}
            target="_blank"
          >
          <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="#fff" />
            <circle cx="50" cy="50" r="30" fill="#000" />
            <circle cx="50" cy="50" r="20" fill="#fff" />
            <circle cx="50" cy="50" r="10" fill="#000" />
          </svg>
          </Link>
        </div>
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <UserNav />
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
