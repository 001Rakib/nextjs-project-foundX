/* eslint-disable prettier/prettier */
import { Button } from "@nextui-org/button";
import Link from "next/link";

import Container from "@/src/components/ui/Container";
import CardSkeleton from "@/src/components/ui/CardSkeleton";

const RecentPosts = async () => {
  return (
    <div>
      <Container>
        <div className="section-title my-8">
          <h2 className="mb-2 text-center text-2xl">Recently Found Items</h2>
          <p className="text-center">
            I list of items that have been recently found and reported
          </p>
        </div>
        <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-4">
          {[...Array(9)]?.map((a, idx) => (
            <CardSkeleton key={idx} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button className="rounded-md bg-default-900 text-default" size="md">
            <Link href="/found-items">See All</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default RecentPosts;
