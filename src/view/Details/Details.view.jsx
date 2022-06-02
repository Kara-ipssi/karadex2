import { Text } from "native-base";
import { PokemonDetails } from "../../component";

const Details = ({ navigation, route }) => {
    const { pokemon } = route.params;
    return <PokemonDetails pokemon={pokemon} />;
};

export default Details;
