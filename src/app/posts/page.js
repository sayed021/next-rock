// import { useEffect, useState } from 'react';
import Link from "next/link";
import { getPosts } from "../../services/PostServices";
import Image from "next/image";
import Pagination from '../components/pagination';

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
  return {
      title: "Post page",
      description: "",
  };
}

export default async function BlogPage({searchParams}) {
  const { page, itemsparpage  } = await searchParams;
  // currentPage=1, parPage=10
  const { posts=[], totalPost} = await getPosts(page, itemsparpage);

  if(posts.length < 0 || !posts) {
    return (<h2 className='text-9xl text-center my-9'>No post yet!</h2>)
  }

  return (
    <>
    <div className="flex justify-between items-center">
      <h2 className="text-5xl mb-3">Blog post page</h2>
      <div className="mb-3">
        <Pagination 
          totalPosts={totalPost}
          itemLimit={itemsparpage}
          currentPage={page}
        /> 
      </div>
    </div>
    <hr />
    <div className="grid grid-cols-3 gap-5 mt-5">
      {
        posts.map(post=>{
          return <div key={post.id} className="border border-gray hover:bg-lime-100 hover:border-red-950">
            <Link href={`posts/${post.id}`}>
              <div className="overflow-hidden relative bg-gray-50" style={{height: "200px"}}>
                <Image 
                  src={imageUrls[Math.floor(Math.random() * imageUrls.length)]}
                  alt="Placeholder image" 
                  placeholder="blur"
                  layout="fill" 
                  objectFit="cover" 
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAEElEQVR42mP8z/C/HwMggAABBAAGpTngUQAAAABJRU5ErkJggg=="
                 />
              </div>
            </Link>
             <Link href={`posts/${post.id}`}> 
               <div className="p-2">
                  <h2 className="text-xl capitalize">{post.title}</h2>
                </div>
              </Link>
          </div>
        })
      }
    </div>
    </>
  );
}