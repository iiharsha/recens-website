import Link from "next/link"
import { Menu } from "@/lib/shopify/types/menu"

const FooterMenu =({menu}: {menu: Menu[]}) => {
  return (
    <nav className="grid grid-cols-1 gap-2">
      {menu.map((menuItem, i) => (
        <div key={i}>
          <Link
            href={menuItem.path || ""}
            className="text-[14px] font-normal text-secondary hover:text-tertiary transition-colors block hover:underline"
          >
            {menuItem.title}
          </Link>
        </div>
      ))}
    </nav>
  )
}

export default FooterMenu
