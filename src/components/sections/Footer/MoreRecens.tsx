
import Link from "next/link"
import { getMenu } from "@/lib/shopify"

const MoreRecens = async () => {
    const menu = await getMenu("more-recens")
    return (
        <nav className="grid grid-cols-1 gap-4">
            {menu.map((menuItem, i) => (
                <div key={i}>
                    <Link
                        href={menuItem.path}
                        className="mb-3 text-[16px] font-semibold text-secondary hover:text-tertiary transition-colors block hover:underline"
                    >
                        {menuItem.title}
                    </Link>
                    <ul className="space-y-2">
                        {menuItem.items.map((subMenuItem, j) => (
                            <li key={j}>
                                <Link href={subMenuItem.path} className="text-secondary hover:text-tertiary transition-colors">
                                    {subMenuItem.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </nav>
    )
}

export default MoreRecens
