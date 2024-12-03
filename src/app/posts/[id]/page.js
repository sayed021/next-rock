import { getPost, getPostComments } from "@/services/PostServices";
import Image from "next/image";
import Link from "next/link";

const imageUrls = [
    "https://picsum.photos/5000/2000?random=1",
    "https://picsum.photos/5000/2000?random=2",
    "https://picsum.photos/5000/2000?random=3",
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
    const post = await getPost(id);
    const comments = await getPostComments(id);

    return (
        <>
            <Link
                className="border-0 bg-cyan-600 text-black px-4 py-2 mb-3 mt-9"
                href="/posts"
            >
                back
            </Link>

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

            <div className="comments mt-9">
                <p>
                    <strong>Comments</strong>
                </p>
                <hr />

                <ul className="mt-6">
                  {comments.map(comment=>{
                    return <li className="pb-4 flex" key={comment.id+'comment'}>
                      <span className="h-[50px] w-[50px] min-w-[50px] rounded-full border-2 border-gray-200 mr-4 bg-gray-50"></span>
                      <div className="mb-2">
                        <h4 className="capitalize text-gray-600"><Link href={"#"}>{comment.name}</Link></h4>
                        <small className="lowercase text-gray-300"><a href={`mailto:${comment.email}`}>{comment.email}</a></small>
                        <p className="mb-3 mt-3">{comment.body}</p>
                      </div>
                      </li>
                  })}
                </ul>
            </div>
        </>
    );
}
