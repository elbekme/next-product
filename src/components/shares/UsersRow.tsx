import UserType from "@/types/user";
import UserCard from "../card/UserCard";


interface UsersRowProps {
    loading?: boolean;
    users: UserType[];
  }

const UsersRow = ({loading, users}: UsersRowProps) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      {loading ? (
        <div>Loading...</div>
      ) : (
        users.map((user) => (
          <UserCard key={user._id} {...user} />
        ))
      )}
    </div>
  )
}

export default UsersRow