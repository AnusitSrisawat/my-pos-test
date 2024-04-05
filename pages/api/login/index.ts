// pages/api/login.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { username, password } = req.body;

  // Check if username and password are valid (example only, replace with your authentication logic)
  if (username === 'admin' && password === 'password') {
    console.log("Login successful");
    return res.status(200).json({ message: 'Login successful' });
  } else {
    console.log("Invalid credentials");
    return res.status(401).json({ message: 'Invalid credentials' });
  }
}
