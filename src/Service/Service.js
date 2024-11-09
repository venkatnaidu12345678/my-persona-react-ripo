import { Url } from "../Config/Config";

export const usersData = async () => {
    try {
        const resp = await fetch(Url.users);
        if (!resp.ok) {
            throw new Error(`Response status: ${resp.status}`);
        }
        const data = resp.json();
        return data;
    }
    catch (error) {
        console.error(error)
    }
}