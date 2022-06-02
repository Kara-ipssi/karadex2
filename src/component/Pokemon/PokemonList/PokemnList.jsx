import { Box, FlatList, Text } from "native-base";
import { useContext, useEffect } from "react";
import { MainContext } from "../../../context";
import PokemonCard from "../PokemonCard/PokemonCard";

import data2 from "../../../constant/pokemon";
import { StyleSheet } from "react-native";

const PokemonList = ({ navigation }) => {
    const { data, getData } = useContext(MainContext);
    useEffect(() => {
        getData();
    }, []);
    return (
        <FlatList
            numColumns={2}
            horizontal={false}
            style={styles.container}
            data={data[0]}
            renderItem={({ item: pokemon }) => {
                return (
                    <PokemonCard pokemon={pokemon} navigation={navigation} />
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        backgroundColor: "ligthgray",
    },
});

export default PokemonList;
