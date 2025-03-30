'use client'
import { NavigationMenuContent, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Link } from '@/i18n/navigation';
import { useEffect, useRef, useState } from "react"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import { RiArrowDownSLine, RiArrowUpSLine, RiMenu3Line } from "react-icons/ri";
import { websiteName } from "@/lib/constants/commonName"
import { navLinks } from "@/lib/constants/links"
import { LuSearch } from "react-icons/lu";
import Cart from "./Cart"
import { useLocale, useTranslations } from "next-intl"
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";

const Navbar = () => {
    const t = useTranslations('Form')
    const [isSticky, setIsSticky] = useState(false);
    const navbarRef = useRef(null);
    const pathname = usePathname();
    const locale = useLocale()
    const [searchBox, setSearchBox] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (navbarRef.current) {
                const navbarHeight = navbarRef.current.offsetHeight;
                const scrollPosition = window.scrollY;
                setIsSticky(scrollPosition >= navbarHeight);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header ref={navbarRef} className={`text-neutral-900 mx-auto transition-all duration-300  w-full z-50 bg-white `}>
            <div className="container items-center mx-auto py-3 flex justify-between px-4">
                <div>
                    <Link className="focus-visible:ring-1 py-1 focus:bg-accent focus:text-accent-foreground focus:ring-fuchsia-100 focus:outline-fuchsia-100 focus:rounded focus-visible:outline-1" href={'/'}>
                        <Image
                            src="/assets/logo.png"
                            width={180}
                            height={120}
                            className=""
                            alt="Tirze-Med"
                        />
                    </Link>
                </div>
                <div className="flex items-center md:space-x-4">
                    <div className="flex items-center justify-center space-x-4">
                        {/* <div className="relative">
                            <div onClick={() => (setSearchBox(!searchBox))} className="hover:bg-fuchsia-100 rounded p-1 hover:shadow-lg hover:border border-fuchsia-200 hover:text-fuchsia-800 hover:cursor-pointer"><LuSearch className="text-xl mt-1" /></div>
                            <form
                                action=""
                                className={`absolute bg-white -z-10 rounded-full search-box mt-2 p-1 shadow-md border border-gray-500 w-[96vw] -right-12 md:right-0 md:w-72 ${searchBox ? 'active' : ''}`} // Styled form
                            >
                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        placeholder={t('search_placeholder')}
                                        className="p-1 flex-grow mr-2 focus:outline-none focus:ring-none ps-3 focus:border-fuchsia-300" // Styled input
                                    />
                                    <button type="submit" className="p-1 rounded-full bg-fuchsia-600 text-white hover:bg-fuchsia-700">
                                        <LuSearch className="text-xl" />
                                    </button>
                                </div>
                            </form>
                        </div> */}
                        <div>
                            <Cart />
                        </div>
                        <div>
                            <LanguageSwitcher currentLg={locale} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`bg-fuchsia-900 py-1 sm:py-1.5 ${isSticky ? 'shadow-lg fixed top-0 w-full z-50' : 'shadow-none'}`}>
                <div className="hidden md:flex container mx-auto justify-center"><NavMenu pathname={pathname} /></div>
                <div className="md:hidden order-3 mt-1 ms-2 md:me-0"><MobileNav pathname={pathname} /></div>
            </div>
        </header>
    );
};

const MobileNav = ({ pathname }) => {
    const currentLg = pathname.startsWith('/en') ? 'en' : 'pl'
    const [open, setOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const l = useTranslations('Links')
    useEffect(() => {
        if (!open) {
            setActiveSubmenu(null);
        }
    }, [open]);
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <button variant="outline" className="hover:cursor-pointer hover:bg-neutral-200 rounded hover:shadow transition-all text-white duration-200 px-5 ms-auto block"><RiMenu3Line className="text-[1.65rem]" /></button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>{websiteName}</SheetTitle>
                    <SheetDescription />
                </SheetHeader>
                <nav className="flex flex-col gap-2 px-2">
                    {navLinks.map((link) => (
                        <div key={link.label} className="px-2 rounded ">
                            {link.subLinks ? (
                                <div className="flex flex-col">
                                    <button
                                        onClick={() =>
                                            setActiveSubmenu(activeSubmenu === link.label ? null : link.label)
                                        }
                                        className="flex items-center justify-between py-2 text-neutral-700 hover:text-neutral-900"
                                    >
                                        <span className={pathname === link.slug ? "font-semibold" : ""}>
                                            {link.label}
                                        </span>
                                        {activeSubmenu === link.label ? (
                                            <RiArrowUpSLine className="ml-2" />
                                        ) : (
                                            <RiArrowDownSLine className="ml-2" />
                                        )}
                                    </button>

                                    {activeSubmenu === link.label && (
                                        <div className="ml-1 border-l-2 border-fuchsia-200 pl-1">
                                            {link.subLinks.map((subLink) => (
                                                <Link
                                                    href={subLink.slug}
                                                    key={subLink.label}
                                                    onClick={() => setOpen(false)}
                                                    className={`block py-2 pl-4 text-sm ${pathname === subLink.slug
                                                        ? "font-semibold text-fuchsia-700"
                                                        : "text-neutral-600 hover:text-neutral-900"
                                                        }`}
                                                >
                                                    {l(subLink.label)}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    href={link.slug}
                                    onClick={() => setOpen(false)}
                                    className={`block py-1 ${pathname === link.slug
                                        ? "font-bold text-sm text-fuchsia-700"
                                        : "text-neutral-800 hover:text-neutral-900"
                                        }`}
                                >
                                    {l(link.label)}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>
                <SheetFooter>
                    <div className="border text-center border-fuchsia-950/50 rounded text-fuchsia-900 py-1.5">
                        <LanguageSwitcher currentLg={currentLg} />
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

const NavMenu = ({ open, setOpen, pathname }) => {
    const l = useTranslations('Links')
    const url = pathname.includes('/en') ? pathname.replace('/en', '') : pathname.replace('/pl', '')
    return (
        <NavigationMenu className="w-full md:max-w-max">
            <NavigationMenuList className="flex flex-col lg:flex-row space-y-2 md:space-y-0 lg:space-x-2">

                {navLinks?.map((link) => (
                    <NavigationMenuItem key={link.slug} >
                        {link?.subLinks ? (
                            <>
                                <NavigationMenuTrigger className={`${link.slug === url ? '!text-fuchsia-800 active' : ''} nav-link`}>{link.label}
                                    <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-fuchsia-800 transition-all duration-300 grouphover:w-full" />
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className={'bg-white'}>
                                    <ul className="w-[240px]">
                                        {link?.subLinks && link?.subLinks?.map((subLink) => (
                                            <li key={subLink.label}>
                                                <NavigationMenuLink asChild>
                                                    <Link onClick={open ? () => setOpen(!open) : null} className={`relative block text-center font-medium hover:text-fuchsia-800 ${link.slug === url ? 'text-fuchsia-800' : ''
                                                        }`} href={subLink.slug}>{l(subLink.label)}
                                                        <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-fuchsia-800 transition-all duration-300 grouphover:w-full" />
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </>
                        ) : (
                                <NavigationMenuLink asChild
                                    className={`transition-colors nav-link duration-300 ${link.slug === url ? '!text-fuchsia-800 active' : ''} ${navigationMenuTriggerStyle()}`}
                                >
                            <Link href={link.slug} onClick={open ? () => setOpen(!open) : null} className={`nav-link relative block `}>
                                    {l(link.label)}
                                    <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-fuchsia-800 transition-all duration-300 under nav-underline" />
                            </Link>
                                </NavigationMenuLink>
                        )}
                    </NavigationMenuItem>
                ))}

            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default Navbar