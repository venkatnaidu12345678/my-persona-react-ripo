import React, { useContext } from 'react'
import { ButtonContext } from '../App';

const Toggle = () => {
    const { light, setLight } = useContext(ButtonContext);
    const handleClickLightmode = () => {
        setLight(!light)
    }
    return (
        <div>
            <button
                className="bg-slate-500 text-white font-semibold p-4 rounded-md"
                onClick={handleClickLightmode}
            >
                {light ? 'Dark Mode' : 'Light Mode'}
            </button>
        </div>
    )
}

export default Toggle
