import { createContext, useEffect, useState } from "react";

const MainContext = createContext();

const MainProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const getData = async () => {
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Host": "burgers1.p.rapidapi.com",
                "X-RapidAPI-Key":
                    "c8eda165a8msh4caef87aea6987fp13b16fjsn1478ca110374",
            },
        };

        try {
            const response = await fetch(
                "https://burgers1.p.rapidapi.com/burgers",
                options
            );
            const data = await response.json();
            // console.log(data);
            return setData(data);
        } catch (error) {
            throw error;
        }
    };
    const value = {
        getData,
        data: [data, setData],
    };

    return (
        <MainContext.Provider value={value}>{children}</MainContext.Provider>
    );
};

export { MainContext, MainProvider };
