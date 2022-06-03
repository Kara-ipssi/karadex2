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
                                    uri: `${pokemon.image}`,
                                }}
                                alt="Alternate Text"
                                size="2xl"
                            />
                        </Box>
                        <Heading style={styles.descTitle} size="md">
                            Description
                        </Heading>
                        <Text
                            style={{
                                textAlign: "justify",
                                marginTop: 20,
                                marginBottom: 20,
                            }}
                        >
                            {pokemon.description}
                        </Text>
                        <Heading style={styles.descTitle} size="md">
                            Type
                        </Heading>
                        <Box style={styles.badgeContainer}>
                            <FlatList
                                horizontal={true}
                                data={pokemon.types}
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
        marginBottom: 30,
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
