import { NextApiRequest, NextApiResponse } from 'next';
// import { getSession } from 'next-auth/client';
// import { connectToDatabase } from '../../utils/db'; // Assuming you have a utility file for database connection
import { products } from '../../../src/json/product'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  try {
    switch (method) {
      case 'GET':
        await handleGet(req, res);
        break;
      case 'POST':
        await handlePost(req, res);
        break;
      case 'PUT':
        await handlePut(req, res);
        break;
      case 'DELETE':
        await handleDelete(req, res);
        break;
      default:
        res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const { id, page } = req.query;

  if (id) {
    // Get item by ID
    // Example: const item = await db.collection('items').findOne({ _id: id });
    return res.status(200).json({ message: `Get item with ID: ${id}` });
  } else if (page) {
    // Get items by page
    // Example: const items = await db.collection('items').find().skip((page - 1) * pageSize).limit(pageSize).toArray();
    return res.status(200).json({ message: `Get items for page: ${page}` });
  } else {
    // Get all items
    // Example: const items = await db.collection('items').find().toArray();
    return res.status(200).json(products);
  }
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  // const session = await getSession({ req });
  // if (!session) {
  //   return res.status(401).json({ message: 'Unauthorized' });
  // }

  const { data } = req.body;
  if (!data) {
    return res.status(400).json({ message: 'Data is required' });
  }

  // Insert new item
  // Example: await db.collection('items').insertOne(data);
  return res.status(201).json({ message: 'Item created successfully' });
}

async function handlePut(req: NextApiRequest, res: NextApiResponse) {
  // const session = await getSession({ req });
  // if (!session) {
  //   return res.status(401).json({ message: 'Unauthorized' });
  // }

  const { id } = req.query;
  const { data } = req.body;
  if (!id || !data) {
    return res.status(400).json({ message: 'ID and Data are required' });
  }

  // Update item by ID
  // Example: await db.collection('items').updateOne({ _id: id }, { $set: data });
  return res.status(200).json({ message: `Item with ID ${id} updated successfully` });
}

async function handleDelete(req: NextApiRequest, res: NextApiResponse) {
  // const session = await getSession({ req });
  // if (!session) {
  //   return res.status(401).json({ message: 'Unauthorized' });
  // }

  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ message: 'ID is required' });
  }

  // Delete item by ID
  // Example: await db.collection('items').deleteOne({ _id: id });
  return res.status(200).json({ message: `Item with ID ${id} deleted successfully` });
}
