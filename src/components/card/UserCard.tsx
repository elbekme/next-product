import UserType from '@/types/user'
import Link from "next/link";

const UserCard = ({_id,firstName,lastName,username,phoneNumber}:UserType) => {
  return (
    <div className="product-card">
        <h1>{firstName}</h1>
        <h2>{lastName}</h2>
        <h3>{username}</h3>
        <h4>{phoneNumber}</h4>
    <Link href={`/user/${_id}`}>
      <h3>{_id}</h3>
    </Link>
  </div>
  )
}

export default UserCard