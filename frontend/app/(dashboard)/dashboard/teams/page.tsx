import { Breadcrumbs } from '@/components/breadcrumbs';
import { TeamsClient } from '@/components/tables/user-tables copy 2/client';
import { teams } from '@/constants/data';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Teams', link: '/dashboard/teams' }
];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <TeamsClient data={teams} />
      </div>
    </>
  );
}
