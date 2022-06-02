import { createContext, useEffect, useState } from "react";
import { API_URL } from "../config";
const MainContext = createContext();

const MainProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [nextUrl, setNextUrl] = useState("");
    const getData = async () => {
        const options = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        };

        try {
            const response = await fetch(
                `${API_URL}/pokemon?offset=0&limit=20`,
                options
            );
            const data = await response.json();
            console.log(data);
            setNextUrl(data.next);
            return setData(data.results);
        } catch (error) {
            throw error;
        }
    };
    const value = {
        getData,
        data: [data, setData],
        nextUrl: [nextUrl, setNextUrl],
    };

    return (
        <MainContext.Provider value={value}>{children}</MainContext.Provider>
    );
};

export { MainContext, MainProvider };
