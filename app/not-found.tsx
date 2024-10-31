import { connection } from 'next/server';

export default async function NotFound() {
  await connection();

  return (
    <div className="container mx-auto py-16">
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}
