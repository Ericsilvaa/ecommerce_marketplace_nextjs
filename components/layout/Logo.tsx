import Link from "next/link";
import { Store } from "lucide-react";
import React from "react";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="flex items-center justify-center gap-2 text-xl font-extrabold text-sky-500"
    >
      {/* Icon Loja */}
      <Store className="h-10 w-10 text-sky-600" />
      <span className="hidden sm:inline-block">Live MKT</span>
    </Link>
  );
};

export default Logo;
