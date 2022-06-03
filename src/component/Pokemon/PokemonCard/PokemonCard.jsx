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
import { useEffect, useContext, useState } from "react";
import { MainContext } from "../../../context";
import { API_URL } from "../../../config";
import { Pokemon } from "../../../model";
const PokemonCard = ({ pokemon, navigation }) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const getPokemon = async (name) => {
        const options = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        };

        try {
            setLoading(true);
            const response = await fetch(`${API_URL}/pokemon/${name}`, options);
            const data = await response.json();
            // console.log(data, "one poke");
            let poke = new Pokemon(data);
            setData(poke);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    useEffect(() => {
        getPokemon(pokemon.name);
    }, [pokemon]);

    if (loading === true) {
        return <Text>Chargement</Text>;
    }
    return (
        <Box style={styles.card}>
            <Pressable
                onPress={() =>
                    navigation.navigate("poke_details", {
                        pokemon: data,
                    })
                }
                style={styles.presseble}
            >
                <Image
                    source={{
                        uri: `${data.image}`,
                    }}
                    alt="Alternate Text"
                    size="xl"
                />
                <Heading size="lg">{data.name}</Heading>
                <Text>{data.numero || "000"}</Text>
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
