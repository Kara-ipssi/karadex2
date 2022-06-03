import { createContext, useEffect, useState } from "react";
import { API_URL } from "../config";
const MainContext = createContext();
const MainProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const getPokemonList = async (offset = 0, limit = 20) => {
        const options = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        };

        try {
            const response = await fetch(
                `${API_URL}/pokemon?offset=${offset}&limit=${limit}`,
                options
            );
            const { results } = await response.json();
            return setData(results);
        } catch (error) {
            throw error;
        }
    };
    const value = {
        getPokemonList,
        data: [data, setData],
    };

    return (
        <MainContext.Provider value={value}>{children}</MainContext.Provider>
    );
};

export { MainContext, MainProvider };
