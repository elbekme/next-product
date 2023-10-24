'use client'

import UsersRow from "@/components/shares/UsersRow";
import request from "@/server";
import UserType from "@/types/user";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Users = () => {
  const router = useRouter();
  const search = useSearchParams();
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([] as UserType[]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const {
          data: { total, user },
        } = await request.get<{ total: number; user: UserType[] }>(
          "user"
        );
        const { data } = await request.get("/user");
        setUsers(data);
        console.log(data);
        
        setUsers(users);
        setTotal(total);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, [users]);

  return(
    <section>
      <h1 className="text-center my-3">Users {total}</h1>
      <div>
        <UsersRow loading={loading} users={users} />
      </div>
    </section>
  );
};

export default Users;

// 'use client'

// import UsersRow from "@/components/shares/UsersRow";
// import request from "@/server";
// import UserType from "@/types/user";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// const Users = () => {
//   const router = useRouter();
//   const search = useSearchParams();
//   const [total, setTotal] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [users, setUsers] = useState([] as UserType[]);

//   useEffect(() => {
//     const getUsers = async () => {
//       try {
//         setLoading(true);
//         const {
//           data: { total, user },
//         } = await request.get<{ total: number; user: UserType[] }>(
//           "https://ap-vodiy-parfum-backend.up.railway.app/api/v1/user"
//         );        
//         setUsers(user);
//         setTotal(total);
//       } catch (error) {
//       } finally {
//         setLoading(false);
//       }
//     };
//     getUsers();
//   }, []);

//   return (
//     <section>
//       <h1 className="text-center my-3">Users {total}</h1>
//       <div>
//         <UsersRow loading={loading} users={users} />
//       </div>
//     </section>
//   );
// };

// export default Users;