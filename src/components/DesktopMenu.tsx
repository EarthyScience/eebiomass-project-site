import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { withBasePath } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type MenuItem = {
  text: string;
  link?: string;
  description?: string;
  items?: MenuItem[];
  featured?: {
    logo: string;
    name: string;
    description?: string;
  };
};

type NavigationProps = {
  items: MenuItem[];
};

/* ✅ Directory item component */
const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="w-full">
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block w-full select-none rounded-md px-3 py-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div
            className="text-sm text-foreground tracking-wide leading-[1]"
          >
            {title}
          </div>

          {children && (
            <p className="mt-1 text-sm text-muted-foreground leading-[1]">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

/* ✅ Featured grey block */
function FeaturedBlock({ item }: { item: MenuItem }) {
  if (!item.featured) return null;

  return (
    <li className="h-full">
      <NavigationMenuLink asChild>
        <Link
          href={item.link || "/"}
          className="flex h-full w-full select-none flex-col justify-end rounded-md p-5 no-underline outline-none focus:shadow-md"
          style={{
            background: `linear-gradient(180deg, #ebe8e8, #7ac6c0)`,
          }}
        >
          <Image
            src={withBasePath(item.featured.logo)}
            alt="logo"
            width={64}
            height={64}
            className="mb-3 rounded-md"
          />

          {/* ✅ tighter spacing */}
          <div className="text-base font-medium text-foreground font-semibold leading-none">
            {item.featured.name}
          </div>

          {item.featured.description && (
            <p className="mt-1 text-sm text-muted-foreground leading-none">
              {item.featured.description}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

/* ✅ Directory grid (used by featured right side AND normal dropdowns) */
function DirectoryGrid({
  items,
  columns = 1,
}: {
  items: MenuItem[];
  columns?: 1 | 2;
}) {
  return (
    <ul
      className={cn(
        "grid gap-1",
        columns === 1
          ? "grid-cols-1"
          : "grid-cols-1 sm:grid-cols-2"
      )}
    >
      {items.map((subItem) => (
        <ListItem
          key={subItem.text}
          title={subItem.text}
          href={subItem.link || "#"}
          className="min-w-[220px]" // ✅ gives items more room
        >
          {subItem.description}
        </ListItem>
      ))}
    </ul>
  );
}

export default function DesktopMenu({ items }: NavigationProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem key={item.text}>
            {item.items?.length ? (
              <>
                <NavigationMenuTrigger>{item.text}</NavigationMenuTrigger>

                <NavigationMenuContent>
                  {/* ✅ FEATURED dropdown layout */}
                  {item.featured ? (
                    <div className="grid gap-4 p-4 md:w-[550px] grid-cols-[240px_1fr]">
                      <FeaturedBlock item={item} />

                      <div className="flex flex-col justify-center">
                        <DirectoryGrid items={item.items} columns={1} />
                      </div>
                    </div>
                  ) : (
                    /* ✅ NORMAL dropdown layout (auto sizing, no huge box) */
                    <div className="p-4 md:w-[550px]">
                      <DirectoryGrid items={item.items} columns={2} />
                    </div>
                  )}
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  href={item.link || "#"}
                  className={navigationMenuTriggerStyle()}
                >
                  {item.text}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}