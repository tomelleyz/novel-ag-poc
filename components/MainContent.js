import Image from "next/image";
import Link from "next/link";
import NavigationPanelMobile from "./navigation/NavigationPanelMobile";

export default function MainContent({ children }) {
  return (
    <section className="relative flex h-full w-full flex-col overflow-x-hidden bg-grey-75">
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-solid border-grey-50 bg-grey-75 px-4 py-[18px] lg:py-[22px] lg:pl-[38px] lg:pr-6">
        <Link href="/" className="block lg:hidden">
          <Image
            src="/novel-ag-logo.svg"
            width={112}
            height={28}
            alt="Novel AG logo"
          />
        </Link>

        <div className="hidden gap-x-[55px] lg:flex">
          <h1 className="text-2xl">Dashboard</h1>
          <button className="flex w-[35vw] items-center rounded-[10px] border border-solid border-grey-25 bg-white py-1.5 pl-2 pr-3.5 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05),_inset_0px_-1.2px_0px_rgba(57,_73,_171,_0.13)]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden={true}
            >
              <path
                d="M15.75 15.75L13.1251 13.125M15 8.625C15 12.1458 12.1458 15 8.625 15C5.10418 15 2.25 12.1458 2.25 8.625C2.25 5.10418 5.10418 2.25 8.625 2.25C12.1458 2.25 15 5.10418 15 8.625Z"
                stroke="#A0A0AB"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="ml-2 mr-auto font-outfit text-xs font-normal">
              Search
            </span>
            <span className="flex h-[18px] w-5 items-center justify-center font-inter text-xs/[18px] font-normal tracking-normal text-grey-300">
              &#8984;S
            </span>
          </button>
        </div>

        <button className="hidden shrink-0 items-center gap-x-2 rounded-lg bg-green-400 px-3.5 py-2 font-inter text-sm font-semibold text-white shadow-[inset_0px_-2px_0px_#139A56] lg:flex">
          <span>Add Farm</span>

          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden={true}
          >
            <path
              d="M8.25 14.25C8.25 14.6642 8.58579 15 9 15C9.41421 15 9.75 14.6642 9.75 14.25V9.75H14.25C14.6642 9.75 15 9.41421 15 9C15 8.58579 14.6642 8.25 14.25 8.25H9.75V3.75C9.75 3.33579 9.41421 3 9 3C8.58579 3 8.25 3.33579 8.25 3.75V8.25H3.75C3.33579 8.25 3 8.58579 3 9C3 9.41421 3.33579 9.75 3.75 9.75H8.25V14.25Z"
              fill="white"
            />
          </svg>
        </button>

        <NavigationPanelMobile />
      </header>

      <div className="h-full overflow-y-auto overflow-x-hidden px-4 pb-8 pt-14 lg:pl-8 lg:pr-[30px]">
        {children}
      </div>
    </section>
  );
}
