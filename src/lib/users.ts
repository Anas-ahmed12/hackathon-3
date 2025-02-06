// import { NextApiRequest, NextApiResponse } from 'next';
// import fs from 'fs';
// import path from 'path';

// export interface User {
//   id: string;
//   name: string;
//   email: string;
//   password: string;
// }

// const usersFilePath = path.join(process.cwd(), 'users.json');

// let users: User[] = [];

// function loadUsers() {
//   if (fs.existsSync(usersFilePath)) {
//     const fileData = fs.readFileSync(usersFilePath, 'utf-8');
//     users = JSON.parse(fileData);
//   }
// }

// function saveUsers() {
//   fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
// }

// export function addUser(user: User) {
//   loadUsers();
//   users.push(user);
//   saveUsers();
// }

// export function findUserByEmail(email: string) {
//   loadUsers();
//   return users.find(user => user.email === email);
// }

// export function getAllUsers() {
//   loadUsers();
//   return users;
// }

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { id, name, email, password } = req.body;
//     addUser({ id, name, email, password });
//     res.status(201).json({ message: 'User added successfully' });
//   } else if (req.method === 'GET') {
//     res.status(200).json(getAllUsers());
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }