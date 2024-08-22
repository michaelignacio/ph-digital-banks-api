export interface Bank {
  id: number;
  name: string;
  slug: string;
  interest_rate: number | null;
  account_type: string;
  cap: number | null;
}

export const banks: Bank[] = [
  {
    id: 1,
    name: "CIMB Bank",
    slug: "cimb-bank",
    interest_rate: 15.0,
    account_type: "Upsave/GSAVE",
    cap: 100000,
  },
  {
    id: 2,
    name: "Maya",
    slug: "maya",
    interest_rate: 15.0,
    account_type: "Savings",
    cap: 100000,
  },
  {
    id: 3,
    name: "OWN Bank",
    slug: "own-bank",
    interest_rate: 6.0,
    account_type: "Own It",
    cap: 100000,
  },
  {
    id: 4,
    name: "OWN Bank",
    slug: "own-bank-time-deposit",
    interest_rate: 6.5,
    account_type: "1 Mo. Time Deposit",
    cap: null,
  },
  {
    id: 5,
    name: "DiskarTech",
    slug: "diskartech",
    interest_rate: 6.5,
    account_type: "Savings",
    cap: 49700,
  },
  {
    id: 6,
    name: "NetBank Mobile",
    slug: "netbank-mobile",
    interest_rate: 5.5,
    account_type: "Savings",
    cap: null,
  },
  {
    id: 7,
    name: "Tonik",
    slug: "tonik",
    interest_rate: null,
    account_type: "Savings",
    cap: null,
  },
];