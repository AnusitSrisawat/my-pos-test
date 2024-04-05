// pages/api/example.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import { connectToDatabase } from '../../utils/db'; // Assuming you have a utility file for database connection

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // if (req.method !== 'POST') {
  //   return res.status(405).json({ message: 'Method Not Allowed' });
  // }

  try {
    const session = await getSession({ req });
    if (!session) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { data } = req.body; // Assuming you're expecting some data in the request body
    if (!data) {
      return res.status(400).json({ message: 'Data is required' });
    }

    const { db } = await connectToDatabase(); // Connect to your database

    // Start a database transaction
    await db.transaction(async (transaction) => {
      // Your database operations here
      // For example:
      // await db.collection('exampleCollection').insertOne(data, { session: transaction });

      // If an error occurs during transaction, it will automatically rollback
    });

    return res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
