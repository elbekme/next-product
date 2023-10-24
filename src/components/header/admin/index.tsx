"use client";

import { usePathname, useRouter } from "next/navigation";
import NavLink from "@/components/shares/NavLink";

const AdminHeader = () => {
    const router = useRouter();
    const pathName = usePathname();
    console.log(router);
    console.log(pathName);
  return (
    <header className="navbar flex justify-between">
        <div className="navbar-item">
            <NavLink href="/admin/categories">Categories</NavLink>
            <NavLink href="/admin/products">Products</NavLink>
            <NavLink href="/admin/users">Users</NavLink>
            <NavLink href="/admin/account">Account</NavLink>
        </div>
  </header>
  )
}

export default AdminHeader