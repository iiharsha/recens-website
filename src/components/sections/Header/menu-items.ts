interface NavItem {
    title: string;
    ariaLabel?: string;
}

interface NavGroup extends NavItem {
    children: (NavbarGroup | NavbarItem | string)[];
}

interface NavLink extends NavItem {
    link: string;
    rel?: string;
    target?: string;
}

export type NavbarItem = NavLink;
export type NavbarGroup = NavGroup;
export type NavbarLink = NavLink;
export type NavbarContent = (NavbarItem | NavbarGroup | string)[];

export const NavLinks: NavbarContent = [
    { title: "Home", link: "/" },
    {
        title: "Dresses",
        children: [
            { title: "All", link: "/search/all" },
            { title: "Mini Dresses", link: "/search/mini-dresses" },
            { title: "Maxi Dresses", link: "/search/maxi-dresses" },
        ],
    },
    {
        title: "Shop",
        children: [
            {
                title: "By Category",
                children: [
                    { title: "All", link: "/search/all" },
                    { title: "Dresses", link: "/search/dresses" },
                    { title: "Co-Ords", link: "/search/co-ord-sets" }
                ]
            },
            {
                title: "By Collection",
                children: [
                    { title: "Whispers of Satin", link: "/search/whispersofsatin" },
                    { title: "First Blush", link: "/search/first-blush" }
                ]
            }
        ]
    },
    {
        title: "Couture Collection",
        link: "/couturecollection"
    },
    {
        title: "About Us",
        link: "/aboutus"
    }
]
