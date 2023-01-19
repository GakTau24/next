import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-6">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <Link href={"/"} className="text-white font-medium">
                My App
              </Link>
            </div>
            <div className="flex items-center">
              <Link href={"/"} className="text-white mr-4">
                Home
              </Link>
              <Link href={"/"} className="text-white">
                About
              </Link>
            </div>
          </div>
        </nav>
  )
}
