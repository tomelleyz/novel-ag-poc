import { Command } from "cmdk";
import Link from "next/link";
import { useEffect } from "react";

export default function SearchCommandMenu({
  openSearchCommandMenu,
  setOpenSearchCommandMenu,
}) {
  const toggleOpen = () => {
    setOpenSearchCommandMenu((openSearchCommandMenu) => !openSearchCommandMenu);
  };
  // Toggle the menu when ⌘S or Ctrl+S is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === "s" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggleOpen();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Command.Dialog
        open={openSearchCommandMenu}
        onOpenChange={setOpenSearchCommandMenu}
        label="Search farms"
      >
        <div className="flex items-center border-b border-solid border-grey-50 px-4">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden={true}
            className="shrink-0"
          >
            <path
              d="M15.75 15.75L13.1251 13.125M15 8.625C15 12.1458 12.1458 15 8.625 15C5.10418 15 2.25 12.1458 2.25 8.625C2.25 5.10418 5.10418 2.25 8.625 2.25C12.1458 2.25 15 5.10418 15 8.625Z"
              stroke="#A0A0AB"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Command.Input placeholder="Search" />
          <button
            onClick={() => setOpenSearchCommandMenu(false)}
            className="shrink-0 rounded bg-grey-50 px-1 py-0.5 text-xs text-grey-300"
          >
            Close
          </button>
        </div>

        <Command.List>
          <Command.Empty>No results found.</Command.Empty>

          <Command.Group heading="Farms">
            <Command.Item>
              <Link
                href="#"
                className="block bg-white px-4 py-3 transition-colors duration-300 hover:bg-green-100"
              >
                Kakamo Farms
              </Link>
            </Command.Item>
            <Command.Item>
              <Link
                href="#"
                className="block bg-white px-4 py-3 transition-colors duration-300 hover:bg-green-100"
              >
                Highhill Agribusiness Development Centre Nigeria
              </Link>
            </Command.Item>
            <Command.Item>
              <Link
                href="#"
                className="block bg-white px-4 py-3 transition-colors duration-300 hover:bg-green-100"
              >
                Nagari Group
              </Link>
            </Command.Item>
            <Command.Item>
              <Link
                href="#"
                className="block bg-white px-4 py-3 transition-colors duration-300 hover:bg-green-100"
              >
                Niji Farms
              </Link>
            </Command.Item>
            <Command.Item>
              <Link
                href="#"
                className="block bg-white px-4 py-3 transition-colors duration-300 hover:bg-green-100"
              >
                Animal Care Services Konsult
              </Link>
            </Command.Item>
            <Command.Item>
              <Link
                href="#"
                className="block bg-white px-4 py-3 transition-colors duration-300 hover:bg-green-100"
              >
                Jovana Integrated Farms
              </Link>
            </Command.Item>
            <Command.Item>
              <Link
                href="#"
                className="block bg-white px-4 py-3 transition-colors duration-300 hover:bg-green-100"
              >
                Ojemai Farms
              </Link>
            </Command.Item>
            <Command.Item>
              <Link
                href="#"
                className="block bg-white px-4 py-3 transition-colors duration-300 hover:bg-green-100"
              >
                Anadariya Farms
              </Link>
            </Command.Item>
            <Command.Item>
              <Link
                href="#"
                className="block bg-white px-4 py-3 transition-colors duration-300 hover:bg-green-100"
              >
                Sebore Farms
              </Link>
            </Command.Item>
          </Command.Group>
        </Command.List>

        <div className="border-t border-solid border-grey-50 bg-white p-4"></div>
      </Command.Dialog>
    </>
  );
}
