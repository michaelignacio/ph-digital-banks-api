import type { NextApiRequest, NextApiResponse } from 'next';
import { banks } from '../../../data/banks';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(banks);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}