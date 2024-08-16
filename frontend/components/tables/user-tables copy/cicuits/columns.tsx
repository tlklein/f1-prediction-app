'use client';
import { ColumnDef } from '@tanstack/react-table';
import { Circuits } from '@/constants/data';

export const columns: ColumnDef<Circuits>[] = [
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
    accessorKey: 'track',
    header: 'TRACK'
  },
  {
    accessorKey: 'date',
    header: 'DATE'
  }
];
