import { Divider } from "@nextui-org/react";
import TopicCreateForm from "@/components/topics/topic-create-form";
import TopicList from "@/components/topics/topic-list";
import PostList from "@/components/posts/post-list";
import { PostWithData, fetchTopPosts } from "@/db/queries/posts";

export default async function Home() {
  const postsData: Promise<PostWithData[]> = fetchTopPosts();
  const posts = await postsData;

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
        <PostList data={posts} />
      </div>
      <div className="border shadow p-4">
        <TopicCreateForm />
        <Divider className="my-2" />
        <h3 className="text-lg">Topics</h3>
        <TopicList />
      </div>
    </div>
  );
}
