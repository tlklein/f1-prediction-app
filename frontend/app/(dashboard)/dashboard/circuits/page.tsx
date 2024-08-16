import { Breadcrumbs } from '@/components/breadcrumbs';
import { CircuitsClient } from '@/components/tables/user-tables copy/client';
import { circuits } from '@/constants/data';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Circuits', link: '/dashboard/circuits' }
];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <CircuitsClient data={circuits} />
      </div>
    </>
  );
}
