
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm font-semibold tracking-[0.3em] text-[#C2F800]">
          ERROR 404
        </p>

        <h1 className="heading mt-3 text-7xl font-bold tracking-tight text-white sm:text-8xl">
          404
        </h1>

        <p className="mt-4 text-base text-[#9CA3AF]">
          This page doesn&apos;t exist.
        </p>

        <Link
          href="/"
          className="mt-7 inline-block rounded-lg bg-[#C2F800] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#c2f800c9]"
        >
          Back to Workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;

