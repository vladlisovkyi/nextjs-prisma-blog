import { redirect } from "next/navigation";
import PostList from "@/components/posts/post-list";
import { PostWithData, fetchPostsBySearchTerm } from "@/db/queries/posts";

interface SearchPageProps {
  searchParams: {
    term: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams;

  if (!term) {
    redirect("/");
  }
  const termsData: Promise<PostWithData[]> = fetchPostsBySearchTerm(term);
  const terms = await termsData;

  return (
    <div>
      <PostList data={terms} />
    </div>
  );
}
