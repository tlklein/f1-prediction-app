'use client';
import { ColumnDef } from '@tanstack/react-table';
import { Teams } from '@/constants/data';

export const columns: ColumnDef<Teams>[] = [
  { 
    id: 'number',
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'short_name',
    header: 'SHORT NAME'
  },
  {
    accessorKey: 'full_name',
    header: 'FULL NAME'
  },
  {
    accessorKey: 'team_chief',
    header: 'TEAM CHIEF'
  },
  {
    accessorKey: 'tech_chief',
    header: 'TECHNICAL CHIEF'
  },
  {
    accessorKey: 'chassis',
    header: 'CHASSIS'
  },
  {
    accessorKey: 'power_unit',
    header: 'POWER UNIT'
  }
];
