import Banner from "@/components/home/Banner";
import Library from "@/components/home/Library";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Suspense
        fallback={
          <div className="flex h-[50vh] items-start justify-center pt-20">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <Library></Library>
      </Suspense>
    </div>
  );
}
