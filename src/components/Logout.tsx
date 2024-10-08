import { useContext } from "react"
import { UserContext } from "../context/userContext"

const Logout = () => {
  const {logout} = useContext(UserContext)

  return (
    <button style={{background: 'cyan', color: 'black', marginTop: 16}} onClick={() => logout()}>Logout</button>
  )
}

export default Logout