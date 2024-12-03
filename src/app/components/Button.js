'use client'

import Link from 'next/link';
import React from 'react'

function ButtonLink(props) {
   const {text} = props;
  return (
    <Link
            className="border-0 bg-cyan-600 text-white px-4 py-2 mb-3 mt-9"
            href="/posts"
        >
        {text}
    </Link>
  )
}

export default ButtonLink