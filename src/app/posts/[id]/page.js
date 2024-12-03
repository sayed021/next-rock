import Comments from "@/app/components/comments";
import { getPost, getPostComments, getPosts } from "@/services/PostServices";
import Image from "next/image";
import { Suspense } from "react";
import ButtonLink from "@/app/components/Button";

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
    const post = await getPost(id);

    return {
        title: post.title,
        description: post.body,
    };
}

export default async function page({ params }) {
    const { id } = await params;
    const postPromise = await getPost(id);
    const commentsPromise = await getPostComments(id);

    const post = await postPromise; 

    // const [post, comments] = await Promise.all([postPromise, commentsPromise])

    return (
        <>
            <ButtonLink text="< Back to posts" />
 

            <div className="w-100 relative h-[500px] border-2 border-gray-400 bg-gray-100 mt-9 rounded-md overflow-hidden">
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
            <h2 className="text-5xl my-3 capitalize">{post.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: post.body }}></p>

            <Suspense fallback="<h1>Loading comments</h1>" >
              <Comments commentsPromise={commentsPromise}/>
            </Suspense>
        </>
    );
}


export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(post => {
    return { id: post.id.toString()}
  })
}