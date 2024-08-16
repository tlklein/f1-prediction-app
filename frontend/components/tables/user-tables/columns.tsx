'use client';
import { ColumnDef } from '@tanstack/react-table';
import { Drivers } from '@/constants/data';

export const columns: ColumnDef<Drivers>[] = [
  { 
    id: 'number',
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'name',
    header: ' FULL NAME'
  },
  {
    accessorKey: 'race_number',
    header: 'Race Number'
  },
  {
    accessorKey: 'team',
    header: 'TEAM'
  },
  {
    accessorKey: 'country',
    header: 'COUNTRY'
  },
  {
    accessorKey: 'podiums',
    header: 'PODIUMS'
  },
  {
    accessorKey: 'points',
    header: 'POINTS'
  },
  {
    accessorKey: 'world_championships',
    header: 'CHAMPIONSHIPS'
  },
  {
    accessorKey: 'dob',
    header: 'DATE OF BIRTH'
  },
  {
    accessorKey: 'place_of_birth',
    header: 'PLACE OF BIRTH'
  }
];
