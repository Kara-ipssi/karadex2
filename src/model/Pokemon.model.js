export class Pokemon {
    name;
    numero;
    // image;
    description;
    types;
    attaques;

    constructor(data) {
        this.name = data.name;
        this.numero =
            String(data.order).length === 1
                ? "00" + String(data.order)
                : String(data.order).length === 2
                ? "0" + data.order
                : data.order;
        this.image = data.sprites["other"]["official-artwork"].front_default;
        this.description =
            "Dans le monde des Pokémon existent des Pokémon extrêmement rares qui sont d'une couleur différente de la normale. Lorsqu'ils sont envoyés au combat ou lorsqu'ils apparaissent, ils émettent un léger scintillement. Ce sont des Pokémon nommés chromatiques, plus couramment appelés shiny (shinies ou shinys au pluriel).";
        this.types = data.types.map(({ type }) => type.name);
        this.attaques = data.moves.map(({ move }) => move.name);
    }

    fromArray(data) {
        return data.map((d) => new Pokemon(d));
    }
}
