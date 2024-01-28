import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Main page</h1>
      <Link href="/dashboard" target='_blank'>Go to dashboard</Link>
    </main>
  );
}
