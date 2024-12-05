
import { getPostComments } from "@/services/PostServices";
import Link from "next/link";

export default async function Comments({commentsPromise}) {
    const comments = await commentsPromise;

    return (
        <div className="comments mt-16">
            <p className="mb-3">
                <strong>Comments</strong>
            </p>
            <hr />

            <ul className="mt-6">
                {comments.map((comment) => {
                    return (
                        <li className="pb-4 flex" key={comment.id + "comment"}>
                            <span className="h-[50px] w-[50px] min-w-[50px] rounded-full border-2 border-gray-200 mr-4 bg-gray-50"></span>
                            <div className="mb-2">
                                <h4 className="capitalize text-gray-600">
                                    <Link href={"#"}>{comment.name}</Link>
                                </h4>
                                <small className="lowercase text-gray-300">
                                    <a href={`mailto:${comment.email}`}>
                                        {comment.email}
                                    </a>
                                </small>
                                <p className="mb-3 mt-3">{comment.body}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
    
}

export async function generateStaticParams() {
    console.log("comment cache")
    const posts = await getPosts();
    let x = posts.map(post => {
      return { id: getPostComments(post.id).toString() }
    });
}