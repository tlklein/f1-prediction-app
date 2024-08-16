'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Employee } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export const columns: ColumnDef<Employee>[] = [
  {
    id: 'number',
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'first_name',
    header: 'FIRST NAME'
  },
  {
    accessorKey: 'last_name',
    header: 'LAST NAME'
  },
  {
    accessorKey: 'email',
    header: 'EMAIL'
  },
  {
    accessorKey: 'job',
    header: 'COMPANY'
  },
  {
    accessorKey: 'gender',
    header: 'GENDER'
  }
];
