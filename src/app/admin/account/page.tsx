'use client';

import { useRouter } from "../../../../node_modules/next/navigation";
import { message } from 'antd';

const AccountPage = () => {
  const router = useRouter();


  const logout = () => {
    router.push('/');
    message.success('you are back to user');
  }

  return (
    <div className="text-center mt-10">
        <button onClick={logout} className="rounded-full duration-300 bg-sky-500 hover:bg-sky-700 text-white px-4 py-2">Logout</button>
    </div>
  );
};

export default AccountPage;
