"use client";

import AdminHeader from "@/components/header/admin/index";
import { useAppSelector } from "@/redux/hooks";
import { Fragment, useEffect } from "react";

import childrenType from "@/types/children";
import ROLES from "@/types/roles";
import { redirect } from "next/navigation";
import AdminFooter from "@/components/footer/admin/index";

const AdminLayout = ({ children }: childrenType) => {
  const { isAuthenticated, role } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated || ROLES.ADMIN !== role) {
      redirect("/login");
    }
  }, [isAuthenticated, role]);
  return (
    <Fragment>
      <AdminHeader />
      <main>{children}</main>
      <AdminFooter />
    </Fragment>
  );
};

export default AdminLayout;

