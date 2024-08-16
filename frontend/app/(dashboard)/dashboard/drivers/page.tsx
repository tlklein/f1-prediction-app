import { Breadcrumbs } from '@/components/breadcrumbs';
import { DriversClient } from '@/components/tables/user-tables/client';
import { drivers } from '@/constants/data';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Circuits', link: '/dashboard/circuits' }
];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <DriversClient data={drivers} />
      </div>
    </>
  );
}
