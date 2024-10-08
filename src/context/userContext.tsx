import { createContext, useState } from "react";

interface IUserContext{
  user: string,
  login: (name: string) => void,
  logout: () => void
}

export const UserContext = createContext<IUserContext>({
  user: "",
  login: () => {},
  logout: () => {},
})

interface IUserProvider{
  children: React.ReactNode
}

const UserProvider = ({children}: IUserProvider) => {
  const [user, setUser] = useState<string>("Anonimo")

  const login = (name: string) => {
    setUser(name)
  }

  const logout = () => {
    setUser("")
  }

  const data = {
    user,
    login,
    logout
  }

  return (
    <UserContext.Provider value={data} >
      {children}
    </UserContext.Provider> 
  )
}

export default UserProvider
