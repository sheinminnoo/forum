import { auth } from "@/auth";

async function page() {
  const session = await auth();
  return <div>Welcome {session?.user?.name} This is Questions Page</div>;
}

export default page;
