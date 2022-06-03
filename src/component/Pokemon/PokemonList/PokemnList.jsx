import { Box, FlatList, Spinner, Text } from "native-base";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../../context";
import PokemonCard from "../PokemonCard/PokemonCard";

// import data from "../../../constant/pokemon";
import { StyleSheet } from "react-native";

const PokemonList = ({ navigation }) => {
    const [nbDisplay, setnbDisplay] = useState(20);
    const { data, getPokemonList } = useContext(MainContext);

    const handleScroll = () => {
        setnbDisplay(20);
    };
    useEffect(() => {
        getPokemonList();
    }, []);
    return (
        <>
            <FlatList
                numColumns={2}
                horizontal={false}
                style={styles.container}
                data={data[0].slice(0, nbDisplay)}
                // data={data}
                onEndReached={() => handleScroll()}
                renderItem={({ item: pokemon }) => {
                    return (
                        <PokemonCard
                            pokemon={pokemon}
                            navigation={navigation}
                        />
                    );
                }}
            />
            {<Spinner />}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        backgroundColor: "ligthgray",
    },
});

export default PokemonList;
