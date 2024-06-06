import { TNavigation } from "@/lib/navigation";
import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { Fragment } from "react";
import Profile from "../avatar/Profile";

const MenuListMobile : React.FC<{menus : Array<TNavigation>}> = ({menus}) => {
    return (
      <Fragment>
        <div className="px-3 py-1 flex justify-end items-center text-white w-full">
          <Profile greeting="Hallo," name="Malik" avatar="/images/default_avatar.png" />
        </div>
        <hr />
        <div className="p-3 flex flex-col gap-2">
          {menus.map((nav, key) => (
            <div key={key}>
              <Link
                href={nav.route}
                className="text-[12px] font-semibold text-white active:text-green-raven-200 hover:text-green-500"
              >
                {nav.label}
              </Link>
            </div>
          ))}
        </div>
      </Fragment>
    );
  };
  
  const MenuMobile : React.FC<{children : React.ReactNode}>  = ({children}) => {
    return (
      <Popover >
        <PopoverButton as={Fragment}>
          <Bars3Icon className="md:hidden h-8 w-8" />
        </PopoverButton>
        <Transition
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <PopoverPanel
            anchor="bottom end"
            className={
              "min-w-64 bg-black bg-opacity-50 rounded-xl border border-jet-black-300 text-sm/6 [--anchor-gap:var(--spacing-5)]"
            }
          >
            {children}
          </PopoverPanel>
        </Transition>
      </Popover>
    );
  };
  
  const MenuDesktop : React.FC<{menus : Array<TNavigation>}> = ({menus}) => {
    return (
      <ul className="hidden md:flex items-center gap-2">
        {menus.map((nav, key) => (
          <li key={key} className="h-9  flex flex-col justify-center">
            <Link
              href={nav.route}
              className="text-[12px] font-semibold active:text-green-raven-200 hover:text-green-500"
            >
              {nav.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  };
  
  const Navbar: React.FC<{ lists: TNavigation[] }> = ({ lists }) => {
    return (
      <nav>
        <MenuMobile  >
          <MenuListMobile menus={lists} />
        </MenuMobile>
        <MenuDesktop menus={lists} />
      </nav>
    );
  };

  export default Navbar