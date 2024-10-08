import { FunctionComponent, useContext } from "react"
import Table from "./Table"
import { UserContext } from "../context/userContext"

interface ICard {
  children: React.ReactNode
}

const Card: FunctionComponent<ICard> = ({ children }) => {
  const { user } = useContext(UserContext)

  return (
    <div style={{ background: 'red', color: 'white', padding: 20 }}>
      {children}
      {user}
      <Table />
    </div>
  )
}

export default Card