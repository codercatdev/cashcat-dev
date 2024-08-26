import NavHeader from "@/components/nav-header"
import Link from "next/link"
import LoginButton from "@/components/login-button"
import { Session } from "next-auth"

export default function Header({ session }: { session: Session | null }) {
  const navLinks = [
    {
      _key: 1,
      path: '/learn',
      sideOnly: false,
      title: 'Learn'
    }
  ]

  return (
    <header className="fixed left-0 right-0 z-40 flex items-center justify-between px-6 py-4 shadow-md bg-background">
      <div className="flex items-center gap-4">
        <Link className="text-lg font-bold md:text-2xl" href="/">
          CashCat.dev
        </Link>
        <nav className="items-center hidden md:flex gap-6">
          <NavHeader navLinks={navLinks} />
        </nav>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          {/* <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden" size="icon" variant="ghost">
                <FaBars className="w-6 h-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="py-6 grid gap-2">
                <SheetTrigger asChild>
                  <NavHeader navLinks={navLinks} sideOnly />
                </SheetTrigger>
              </nav>
            </SheetContent>
          </Sheet> */}
          <LoginButton session={session} />
        </div>
      </div>
    </header>
  )
}