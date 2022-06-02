import { Box, FlatList, Text } from "native-base";

import PokemonCard from "../PokemonCard/PokemonCard";

import data from "../../../constant/pokemon";
import { StyleSheet } from "react-native";

const PokemonList = ({ navigation }) => {
    return (
        <FlatList
            numColumns={2}
            horizontal={false}
            style={styles.container}
            data={data}
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
