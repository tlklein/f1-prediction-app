'use client';
import { ColumnDef } from '@tanstack/react-table';
import { Drivers } from '@/constants/data';

export const columns: ColumnDef<Drivers>[] = [
  {
    id: 'select',
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'name',
    header: 'NAME'
  },
  {
    accessorKey: 'company',
    header: 'COMPANY'
  },
  {
    accessorKey: 'role',
    header: 'ROLE'
  }
];
