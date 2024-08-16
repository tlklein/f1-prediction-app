import { NavItem } from '@/types';


export type Drivers = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};
export const drivers: Drivers[] = [
  {
    id: 44,
    name: 'Lewis Hamilton',
    company: 'Dell',
    role: 'Frontend Developer',
    verified: false,
    status: 'Active'
  },
  {
    id: 2,
    name: 'John Doe',
    company: 'TechCorp',
    role: 'Backend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    company: 'WebTech',
    role: 'UI Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 4,
    name: 'David Smith',
    company: 'Innovate Inc.',
    role: 'Fullstack Developer',
    verified: false,
    status: 'Inactive'
  },
  {
    id: 5,
    name: 'Emma Wilson',
    company: 'TechGuru',
    role: 'Product Manager',
    verified: true,
    status: 'Active'
  },
  {
    id: 6,
    name: 'James Brown',
    company: 'CodeGenius',
    role: 'QA Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 7,
    name: 'Laura White',
    company: 'SoftWorks',
    role: 'UX Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 8,
    name: 'Michael Lee',
    company: 'DevCraft',
    role: 'DevOps Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 9,
    name: 'Olivia Green',
    company: 'WebSolutions',
    role: 'Frontend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 10,
    name: 'Robert Taylor',
    company: 'DataTech',
    role: 'Data Analyst',
    verified: false,
    status: 'Active'
  }
];


export type Circuits = {
  id: number;
  name: string;
  track: string;
  date: string;
};
export const circuits: Circuits[] = [
  {
    id: 1,
    name: 'Bahrain Grand Prix',
    track: 'Bahrain International Circuit',
    date: 'March 2, 2024'
  },
  {
    id: 2,
    name: 'Saudi Arabian Grand Prix',
    track: 'Jeddah Corniche Circuit',
    date: 'March 9, 2024'
  }, 
  {
    id: 3,
    name: 'Australian Grand Prix',
    track: 'Melbourne Grand Prix Circuit',
    date: 'March 23, 2024'
  },
  {
    id: 4,
    name: 'Japanese Grand Prix',
    track: 'Suzuka Circuit',
    date: 'April 7, 2024'
  },
  {
    id: 5,
    name: 'Chinese Grand Prix',
    track: 'Shanghai International Circuit',
    date: 'April 7, 2024'
  },
  {
    id: 6,
    name: 'Miami Grand Prix',
    track: 'Miami International Autodrome',
    date: 'May 5, 2024'
  },
  {
    id: 7,
    name: 'Emilia Romagna Grand Prix',
    track: 'Autodrome Enzo e Dino Ferrari',
    date: 'May 19, 2024'
  },
  {
    id: 8,
    name: 'Monaco Grand Prix',
    track: 'Circuit de Monaco',
    date: 'May 26, 2024'
  },
  {
    id: 9,
    name: 'Canadian Grand Prix',
    track: 'Circuit Gilles Villeneuve',
    date: 'June 9, 2024'
  },
  {
    id: 10,
    name: 'Spanish Grand Prix',
    track: 'Circuit de Barcelona-Catalunya',
    date: 'June 23, 2024'
  },
  {
    id: 11,
    name: 'Austrian Grand Prix',
    track: 'Red Bull Racing',
    date: 'June 30, 2024'
  },
  {
    id: 12,
    name: 'British Grand Prix',
    track: 'Silverstone Circuit',
    date: 'July 7, 2024'
  },
  {
    id: 13,
    name: 'Hungarian Grand Prix',
    track: 'Hungaroring',
    date: 'July 21, 2024'
  },
  {
    id: 14,
    name: 'Belgian Grand Prix',
    track: 'Spa-Francorchamps',
    date: 'July 28, 2024'
  },
  {
    id: 15,
    name: 'Dutch Grand Prix',
    track: 'Circuit Zandvoort',
    date: 'August 25, 2024'
  },
  {
    id: 16,
    name: 'Italian Grand Prix',
    track: 'Autodromo Nazionale Monza',
    date: 'September 1, 2024'
  },
  {
    id: 17,
    name: 'Azerbaijain Grand Prix',
    track: 'Baku City Circuit',
    date: 'September 15, 2024'
  },
  {
    id: 18,
    name: 'Singapore Grand Prix',
    track: 'Marina Bay Street Circuit',
    date: 'September 22, 2024'
  },
  {
    id: 19,
    name: 'Unitied States Grand Prix',
    track: 'Circuit of the Americas',
    date: 'October 20, 2024'
  },
  {
    id: 20,
    name: 'Mexican Grand Prix',
    track: 'Autodromo Hermanos Rodriquez',
    date: 'October 27, 2024'
  },
  {
    id: 21,
    name: 'Brazilian Grand Prix',
    track: 'Autodromo Jose Carlos Pace',
    date: 'November 3, 2024'
  },
  {
    id: 22,
    name: 'Las Vegas Grand Prix',
    track: 'Las Vegas Street Circuit',
    date: 'November 24, 2024'
  },
  {
    id: 23,
    name: 'Qater Grand Prix',
    track: 'Losail Circuit',
    date: 'December 1, 2024'
  },
  {
    id: 24,
    name: 'Abu Dhabi Grand Prix',
    track: 'Yas Marina',
    date: 'December 8, 2024'
  }
];


export type Teams = {
  id: number;
  short_name: string;
  full_name: string;
  base: string;
  team_chief: string;
  tech_chief: string;
  chassis: string;
  power_unit: string;
};
export const teams: Teams[] = [
  {
    id: 1,
    short_name: 'Ferrai',
    full_name: 'Ferrai',
    base: 'Maranello, Italy',
    team_chief: 'Frederic Vasseur',
    tech_chief: 'Enrico Gualtieri',
    chassis: 'SF-24',
    power_unit: 'Ferrari'
  },
  {
    id: 2,
    short_name: 'Red Bull',
    full_name: 'Oracle Red Bull Racing',
    base: 'Milton Keynes, United Kingdom',
    team_chief: 'Christian Horner',
    tech_chief: 'Pierre Wache',
    chassis: 'RB-20',
    power_unit: 'Honda RBPT'
  },
  {
    id: 3,
    short_name: 'McLaren',
    full_name: 'McLaren Formula 1 Team',
    base: 'Woking, United Kingdom',
    team_chief: 'Andrea Stella',
    tech_chief: 'Peter Prodromou / Neil Houldey',
    chassis: 'MCL38',
    power_unit: 'Mercedes'
  },
  {
    id: 4,
    short_name: 'Mercedes',
    full_name: 'Mercedes-AMG PETRONAS F1 Team',
    base: 'Brackley, United Kingdom',
    team_chief: 'Toto Wolff',
    tech_chief: 'James Allison',
    chassis: 'W15',
    power_unit: 'Mercedes'
  },
  {
    id: 5,
    short_name: 'Aston Martin',
    full_name: 'Aston Martin Aramco F1 Team',
    base: 'Silverstone, United Kingdom',
    team_chief: 'Mike Krack',
    tech_chief: 'Dan Fallows',
    chassis: 'AMr24',
    power_unit: 'Mercedes'
  }
];


export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  {
    title: 'Drivers',
    href: '/dashboard/drivers',
    icon: 'user', 
    label: 'drivers'
  },
  {
    title: 'Circuits',
    href: '/dashboard/circuits',
    icon: 'user',
    label: 'circuits'
  },
  ,
  {
    title: 'Teams',
    href: '/dashboard/teams',
    icon: 'user',
    label: 'teams'
  },
  {
    title: 'Profile',
    href: '/dashboard/profile',
    icon: 'profile',
    label: 'profile'
  },
  {
    title: 'Login',
    href: '/',
    icon: 'login',
    label: 'login'
  }
];
