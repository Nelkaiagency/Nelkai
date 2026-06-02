import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="inline-block">
      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
        <Image
          src="/logo.png"
          alt="Logo"
          width={64}
          height={64}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </Link>
  )
}