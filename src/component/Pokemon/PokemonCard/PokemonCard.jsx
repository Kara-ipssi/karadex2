import {
    Box,
    VStack,
    Text,
    Image,
    Center,
    Heading,
    Pressable,
} from "native-base";
import { StyleSheet } from "react-native";

const PokemonCard = ({ pokemon, navigation }) => {
    return (
        <Box style={styles.card}>
            <Pressable
                onPress={() =>
                    navigation.navigate("poke_details", {
                        pokemon,
                    })
                }
                style={styles.presseble}
            >
                <Image
                    source={{
                        uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.numero}.png`,
                    }}
                    alt="Alternate Text"
                    size="xl"
                />
                <Heading size="lg">{pokemon.name}</Heading>
                <Text>{pokemon.numero}</Text>
            </Pressable>
        </Box>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 25,
        marginLeft: 10,
        borderRadius: 25,
        height: 200,
        width: "45%",
    },
    presseble: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default PokemonCard;
