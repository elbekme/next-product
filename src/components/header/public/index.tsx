"use client";

import { usePathname, useRouter } from "next/navigation";
import NavLink from "@/components/shares/NavLink";

const PublicHeader = () => {
  const router = useRouter();
  const pathName = usePathname();
  console.log(router);
  console.log(pathName);

  return (
    <header className="navbar flex justify-between">
      <div className="navbar-item">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <NavLink href="/products">Products</NavLink>
        <NavLink href="/login">Login</NavLink>
        <NavLink href="/register">Register</NavLink>
      </div>
    </header>
  );
};

export default PublicHeader;
