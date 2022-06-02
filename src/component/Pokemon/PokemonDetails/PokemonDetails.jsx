import {
    Box,
    Center,
    Container,
    FlatList,
    Heading,
    Image,
    ScrollView,
    Text,
    VStack,
} from "native-base";
import { StyleSheet } from "react-native";
import Badge from "../../Badge/badge";

const PokemonDetails = ({ pokemon }) => {
    return (
        <ScrollView>
            <VStack>
                <Center style={styles.title}>
                    <Heading>{pokemon.name}</Heading>
                    <Heading size="xs">{pokemon.numero}</Heading>
                    <Container style={styles.container}>
                        <Box background="red.100" style={styles.imageBox}>
                            <Image
                                source={{
                                    uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.numero}.png`,
                                }}
                                alt="Alternate Text"
                                size="2xl"
                            />
                        </Box>
                        <Heading style={styles.descTitle} size="md">
                            Description
                        </Heading>
                        <Box>{pokemon.description}</Box>
                        <Heading style={styles.descTitle} size="md">
                            Type
                        </Heading>
                        <Box style={styles.badgeContainer}>
                            <FlatList
                                horizontal={true}
                                data={pokemon.type}
                                renderItem={({ item }, key) => (
                                    <Badge key={item} type={item} />
                                )}
                            />
                        </Box>
                        <Heading style={styles.descTitle} size="md">
                            Attque
                        </Heading>
                        <Box style={styles.badgeContainer}>
                            {/* {pokemon.attaques.map((i) => (
                                <Badge type={i} />
                            ))} */}
                            <FlatList
                                horizontal={true}
                                data={pokemon.attaques}
                                renderItem={({ item }, key) => (
                                    <Badge key={item} type={item} />
                                )}
                            />
                        </Box>
                    </Container>
                </Center>
            </VStack>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    title: {
        paddingTop: 10,
    },
    descTitle: {
        marginTop: 5,
        marginBottom: 5,
    },
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    imageBox: {
        height: 350,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        marginTop: 10,
    },
    badgeContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
    },
});

export default PokemonDetails;
