import Link from "next/link";

export default function Test() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>test page</h1>
        <Link href="/">Back to main page</Link>
      </main>
    );
  }
  