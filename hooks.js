// in app.jsx
export const UserContext = React.createContext()
<UserContext.Provider value={whateverValue}>
    <Component />
</ UserContext.Provider>

// in comp.jsx
import {UserContext} from "./app.jsx"
import { useContext } from "react"

const reqValue = useContext(UserContext)
<App>
    {reqValue}
</App>