'use client'

import { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default function UsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const reponse = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!reponse.ok) throw new Error("Failed to fetch users");
        const data = await reponse.json();
        setUsers(data);
      } catch (err) {
        setError("Failed to fetch users");
        if (err instanceof Error) {
          setError(`Failed to fethc users: ${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <ul className="space-y-4 p-4">
      {users.map((user: User) => (
        <li
          key={user.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
}
