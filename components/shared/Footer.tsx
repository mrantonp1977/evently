import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-2">
        <Link href="/">
          <Image 
            src="/assets/images/logo.svg"
            alt="Logo"
            width={120}
            height={38}
          />
        </Link>
        <p>
          &copy; Evently 2024. All Rights Reserved
        </p>
        <p>
          Made by <a className="text-purple-700 hover:underline" href="#">PapaioannouDev</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer