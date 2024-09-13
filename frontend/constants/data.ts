import { NavItem } from '@/types';

export type Drivers = {
  id: number;
  race_number: number;
  name: string;
  team: string;
  country: string;
  podiums: number;
  points: number;
  world_championships: number;
  dob: string;
  place_of_birth: string;
};
export const drivers: Drivers[] = [
  {
    id: 1,
    race_number: 1,
    name: 'Max Verstappen',
    team: 'Red Bull Racing',
    country: 'Netherlands',
    podiums: 107,
    points: 2863.5,
    world_championships: 3,
    dob: '30/09/1997',
    place_of_birth: 'Hasselt, Belgium'
  },
  {
    id: 2,
    race_number: 4,
    name: 'Lando Norris',
    team: 'McLaren',
    country: 'United Kingdom',
    podiums: 21,
    points: 832,
    world_championships: 0,
    dob: '13/11/1999',
    place_of_birth: 'Bristol, England'
  },
  {
    id: 3,
    race_number: 16,
    name: 'Charles LeClerc',
    team: 'Ferrari',
    country: 'Monaco',
    podiums: 36,
    points: 1251,
    world_championships: 0,
    dob: '16/10/1997',
    place_of_birth: 'Monte Carlo, Monaco'
  },
  {
    id: 4,
    race_number: 81,
    name: 'Oscar Piastri',
    team: 'McLaren',
    country: 'Aurstalia',
    podiums: 6,
    points: 264,
    world_championships: 0,
    dob: '06/04/2001',
    place_of_birth: 'Melbourne, Victoria'
  },
  {
    id: 6,
    race_number: 55,
    name: 'Carlos Sainz',
    team: 'Ferrari',
    country: 'Monaco',
    podiums: 23,
    points: 1144.5,
    world_championships: 0,
    dob: '01/09/1994',
    place_of_birth: 'Madrid, Spain'
  },
  {
    id: 7,
    race_number: 44,
    name: 'Lewis Hamilton',
    team: 'Mercedes',
    country: 'United Kingdom',
    podiums: 201,
    points: 4789.5,
    world_championships: 7,
    dob: '07/01/1985',
    place_of_birth: 'Stevenage, England'
  },
  {
    id: 8,
    race_number: 11,
    name: 'Sergio Perez',
    team: 'Red Bull Racing',
    country: 'Mexico',
    podiums: 39,
    points: 1617,
    world_championships: 0,
    dob: '26/01/1990',
    place_of_birth: 'Guadalajara, Mexico'
  },
  {
    id: 9,
    race_number: 63,
    name: 'George Russell',
    team: 'Mercedes',
    country: 'United Kingdom',
    podiums: 13,
    points: 585,
    world_championships: 0,
    dob: '15/02/1998',
    place_of_birth: 'Kings Lynn, England'
  },
  {
    id: 10,
    race_number: 14,
    name: 'Fernando Alonso',
    team: 'Aston Martin',
    country: 'Spain',
    podiums: 106,
    points: 2316,
    world_championships: 2,
    dob: '29/07/1981',
    place_of_birth: 'Oviedo, Spain'
  },
  {
    id: 5,
    race_number: 18,
    name: 'Lance Stroll',
    team: 'Aston Martin',
    country: 'Canada',
    podiums: 3,
    points: 292,
    world_championships: 0,
    dob: '29/10/1998',
    place_of_birth: 'Montreal, Canada'
  },
  {
    id: 11,
    race_number: 18,
    name: 'Nico Hulkenberg',
    team: 'HAAS',
    country: 'Germany',
    podiums: 0,
    points: 552,
    world_championships: 0,
    dob: '19/08/1987',
    place_of_birth: 'Emmerich am Rhein, Germany'
  },
  {
    id: 12,
    race_number: 22,
    name: 'Yuki Tsunoda',
    team: 'RB',
    country: 'Japan',
    podiums: 0,
    points: 83,
    world_championships: 0,
    dob: '11/05/2000',
    place_of_birth: 'Sagamihara, Japan'
  },
  {
    id: 13,
    race_number: 22,
    name: 'Daniel Ricciardo',
    team: 'RB',
    country: 'Australia',
    podiums: 32,
    points: 1329,
    world_championships: 0,
    dob: '01/07/1989',
    place_of_birth: 'Perth, Australia'
  },
  {
    id: 14,
    race_number: 50,
    name: 'Oliver Bearman',
    team: 'HAAS',
    country: 'United Kingdom',
    podiums: 0,
    points: 6,
    world_championships: 0,
    dob: '08/05/2005',
    place_of_birth: 'Chelmsford, England'
  },
  {
    id: 15,
    race_number: 10,
    name: 'Pierre Gasly',
    team: 'Alpine',
    country: 'France',
    podiums: 4,
    points: 400,
    world_championships: 0,
    dob: '07/02/1996',
    place_of_birth: 'Rouen, France'
  },
  {
    id: 16,
    race_number: 10,
    name: 'Kevin Magnussen',
    team: 'HAAS',
    country: 'Denmark',
    podiums: 1,
    points: 191,
    world_championships: 0,
    dob: '05/10/1992',
    place_of_birth: 'Roskilde, Denmark'
  },
  {
    id: 17,
    race_number: 10,
    name: 'Esteban Ocon',
    team: 'Alpine',
    country: 'France',
    podiums: 3,
    points: 147,
    world_championships: 0,
    dob: '17/09/1996',
    place_of_birth: 'Evreux, Normandy'
  },
  {
    id: 18,
    race_number: 10,
    name: 'Alexander Albon',
    team: 'Williams',
    country: 'France',
    podiums: 2,
    points: 232,
    world_championships: 0,
    dob: '23/03/1996',
    place_of_birth: 'London, England'
  },
  {
    id: 19,
    race_number: 24,
    name: 'Zhou Guanyu',
    team: 'Kick Sauber',
    country: 'France',
    podiums: 0,
    points: 12,
    world_championships: 0,
    dob: '30/05/1999',
    place_of_birth: 'Shanghai, China'
  },
  {
    id: 20,
    race_number: 2,
    name: 'Logan Sargeant',
    team: 'Williams',
    country: 'United States',
    podiums: 0,
    points: 1,
    world_championships: 0,
    dob: '31/12/2000',
    place_of_birth: 'Fort Lauderdale, Florida'
  },
  {
    id: 21,
    race_number: 2,
    name: 'Valtteri Bottast',
    team: 'Kick Sauber',
    country: 'Finland',
    podiums: 67,
    points: 1797,
    world_championships: 0,
    dob: '28/08/1989',
    place_of_birth: 'Nastola, Finland'
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
  },
  {
    id: 6,
    short_name: 'RB',
    full_name: 'Visa Cash App RB Formula One Team',
    base: 'Faenza, Italy',
    team_chief: 'Laurent Mekies',
    tech_chief: 'Jody Egginton',
    chassis: 'VCARB 01',
    power_unit: 'Honda RBPT'
  },
  {
    id: 7,
    short_name: 'HAAS',
    full_name: 'MoneyGram Haas F1 Team',
    base: 'Kannapolis, United States',
    team_chief: 'Ayao Komatsu',
    tech_chief: 'Andrea De Zordo',
    chassis: 'VF-24',
    power_unit: 'Ferrari'
  },
  {
    id: 8,
    short_name: 'Alpine',
    full_name: 'BWT Alpine F1 Team',
    base: 'Enstone, United Kingdom',
    team_chief: 'Oliver Oakes',
    tech_chief: 'David Sanchez',
    chassis: 'A524',
    power_unit: 'Renault'
  },
  {
    id: 9,
    short_name: 'Williams',
    full_name: 'Williams Racing',
    base: 'Grove, United Kingdom',
    team_chief: 'James Vowles',
    tech_chief: 'Pat Fry',
    chassis: 'Mercedes',
    power_unit: 'Mercedes'
  },
  {
    id: 10,
    short_name: 'Kick Sauber',
    full_name: 'Stake F1 Team Kick Sauber',
    base: 'Hinwil, Switzerland',
    team_chief: 'Alessandro Alunni Bravi',
    tech_chief: 'James Key',
    chassis: 'C44',
    power_unit: 'Ferrari'
  }
];

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
    icon: 'page', 
    label: 'drivers'
  },
  {
    title: 'Circuits',
    href: '/dashboard/circuits',
    icon: 'page',
    label: 'circuits'
  },
  ,
  {
    title: 'Teams',
    href: '/dashboard/teams',
    icon: 'page',
    label: 'teams'
  },
  /* 
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
  */ 
];
