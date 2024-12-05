import Comments from "@/app/components/comments";
import { getPost, getPostComments, getPosts } from "@/services/PostServices";
import Image from "next/image";
import { Suspense } from "react";
import ButtonLink from "@/app/components/Button";
import { CommentsLoader } from "@/app/components/loaders/loader";

const imageUrls = [
    "https://picsum.photos/1000/1000?random=1",
    "https://picsum.photos/1000/1000?random=2",
    "https://picsum.photos/3000/4000?random=3",
    "https://picsum.photos/1000/100?random=4",
    "https://picsum.photos/500/200?random=5",
    "https://picsum.photos/300/300?random=6",
    "https://picsum.photos/300/300?random=7",
];

export async function generateMetadata({ params }) {
    const { id } = await params;
    const _postData = await getPost(id);

    return {
        title: _postData.post.title,
        description: _postData.post.body,
    };
}

export default async function page({ params }) {
    const { id } = await params;
    const postPromise = getPost(id);
    const commentsPromise = getPostComments(id);

    const {post, totalPost} = await postPromise; 


    // const [post, comments] = await Promise.all([postPromise, commentsPromise])

    return (
        <>
            <div className="flex justify-between items-center">
                <ButtonLink href="/posts" text="< Back to posts" />
                <div className="flex gap-x-10">
                    <ButtonLink href={`/posts/${parseInt(id) - 1}`} disabled={parseInt(id)==1? true:false} text="< Prev" />
                    <ButtonLink href={`/posts/${parseInt(id) + 1}`} disabled={parseInt(totalPost)==id? true:false} text="Next >" />
                </div>
            </div>
            <div className="w-100 relative h-[500px] border-1 border-gray-100 bg-gray-100 mt-9 mb-10 rounded-md overflow-hidden" style={{boxShadow: "0 13px 27px -5px #32325d40,0 8px 16px -8px #0000004d,0 -6px 16px -6px #00000008"}}>
                <Image
                    src={
                        imageUrls[Math.floor(Math.random() * imageUrls.length)]
                    }
                    alt="Placeholder image"
                    placeholder="blur"
                    layout="fill"
                    objectFit="cover"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAEElEQVR42mP8z/C/HwMggAABBAAGpTngUQAAAABJRU5ErkJggg=="
                />
            </div>
            <h1 className="text-5xl mb-4 capitalize">{post.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: post.body }}></p>

            <Suspense fallback={<CommentsLoader />}>
                <Comments commentsPromise={commentsPromise} />
            </Suspense>
        </>
    );
}

export async function generateStaticParams() {
  const postsData = await getPosts();
  let cachePosts = postsData?.posts.map(post => {
    return { id: post.id.toString()}
  })

  return cachePosts;
}