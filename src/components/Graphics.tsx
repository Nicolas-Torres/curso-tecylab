import { useContext, useEffect } from "react"
import { UserContext } from "../context/userContext"

const Graphics = () => {

  const { user, login } = useContext(UserContext)

  useEffect(() => {
    console.log('effect')
    setTimeout(() => {
      login("carlos")
    }, 1500)
  }, [])

  return (
    <div style={{background: 'green', padding: 15}}>
      Graphics {user}
    </div>
  )
}

export default Graphics