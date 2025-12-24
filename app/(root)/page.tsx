import { auth } from "@/auth";
import ButtonLink from "@/components/ButtonLink";
import Filter from "@/components/Filter";
import ThreadCard from "@/components/ThreadCard";
import ROUTES from "@/routes";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ search: string | undefined; filter: string | "" }>;
}) {
  const session = await auth();
  const { search, filter } = await searchParams;
  return (
    <>
      <div className="flex justify-between items-center p-5">
        <div>
          <h1 className="tex-3xl font-bold">All Thread</h1>
        </div>
        <div>
          <ButtonLink
            className="h-9 px-4 text-sm"
            variant="primary"
            href={ROUTES.QUESTION_CREATE}
          >
            Create new thread
          </ButtonLink>
        </div>
      </div>
      <div>Welcome ! {session?.user?.name}</div>
      <Filter />
      <ThreadCard />
    </>
  );
}
