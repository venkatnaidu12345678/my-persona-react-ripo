import React, { createContext, useEffect, useState } from 'react'
import { usersData } from './Service/Service'
import UserTable from './View/UserTable';
import Toggle from './View/Toggle';

export const UserContext = createContext();
export const ButtonContext = createContext()


const App = () => {
    const [userData, setUserData] = useState();
    const [light, setLight] = useState(true)

    useEffect(() => {
        usersData().then(resp => { setUserData(resp) })
            .catch(err => alert(err))
    }, [])

    return (
        <div className={`h-100 ${light ? 'bg-white-500 text-black' : 'bg-black text-white'} `}>
            <ButtonContext.Provider value={{ light, setLight }} >
                <UserContext.Provider value={{ userData, setUserData }} >
                    <div className="flex p-4 w-full justify-between align-center">
                        <h1 className="underline text-lg font-bold text-blue-500">
                            User Management
                        </h1>
                        <Toggle />
                    </div>
                    <UserTable />
                </UserContext.Provider>
            </ButtonContext.Provider>
        </div>

    )
}
export default App