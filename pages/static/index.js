import Link from "next/link";

export default function StaticPage({ posts }) {
  return (
    <div>
      {posts.map((post) => {
        return (
          <Link key={post.id} href={"static/" + post.id}>
            <PostList id={post.id} title={post.title} />
          </Link>
        );
      })}
    </div>
  );
}

const PostList = ({ id, title }) => {
  return (
    <div>
      {id} {title}
    </div>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
