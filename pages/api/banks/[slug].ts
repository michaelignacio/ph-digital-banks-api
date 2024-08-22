// pages/api/banks/[slug].ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { banks, Bank } from '../../../data/banks';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  // Find the bank by its slug (case-insensitive)
  const bank: Bank | undefined = banks.find(
    (b) => b.slug.toLowerCase() === (slug as string).toLowerCase()
  );

  if (bank) {
    res.status(200).json(bank);
  } else {
    res.status(404).json({ message: 'Bank not found' });
  }
}