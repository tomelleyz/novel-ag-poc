import Link from "next/link";
import { useRouter } from "next/router";

export function PrimaryMenuLink({ href, children }) {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`group flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-grey-400 transition duration-300 first:rounded-t-xl last:rounded-b-xl hover:bg-green-100 ${
        router.pathname === href ? "bg-green-100" : "bg-white"
      }`}
    >
      {children}
    </Link>
  );
}

export function ComingSoonLink({ href, children }) {
  return (
    <Link
      href={href}
      className="block bg-white px-3 py-[10.33px] text-sm font-medium text-grey-300 transition duration-300 first:rounded-t-xl last:rounded-b-xl hover:bg-green-100"
    >
      {children}
    </Link>
  );
}

export function SecondaryMenuLink({ href, children }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 bg-white px-3 py-[14.5px] text-sm font-medium text-grey-400 transition duration-300 first:rounded-t-xl last:rounded-b-xl hover:bg-green-100"
    >
      {children}
    </Link>
  );
}
