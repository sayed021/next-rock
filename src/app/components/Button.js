'use client'

import Link from 'next/link';
import React from 'react'

function ButtonLink(props) {
   const { text, href, disabled=false } = props;
   return disabled ? <button type="button"className="border-0 rounded-sm bg-gray-200 text-white px-4 py-2 mb-3 mt-9" {...props}>{text}</button> 
   : <Link href={href} className="border-0 rounded-sm bg-cyan-600 text-white px-4 py-2 mb-3 mt-9" {...props}>{text}</Link>
}

export default ButtonLink