const types = Object.freeze({
    "normal": 1,
    "fire": 2,
    "water": 3,
    "electric": 4,
    "grass": 5,
    "ice": 6,
    "fighting": 7,
    "poison": 8,
    "ground": 9,
    "flying": 10,
    "psychic": 11,
    "bug": 12,
    "rock": 13,
    "ghost": 14,
    "dragon": 15,
    "dark": 16,
    "steel": 17,
    "fairy": 18,
});

class PokemonType {
    constructor(dNotEffective, dSuperEffective) {
        this.dNotEffective = dNotEffective;
        this.dSuperEffective = dSuperEffective;
    }
};

const normal = new PokemonType(
    [],
    [types.fighting]
);

const fire = new PokemonType(
    [types.fire, types.grass, types.ice, types.bug, types.steel, types.fairy]
    [types.water, types.ground, types.rock]
);

const water = new PokemonType(
    [types.fire, types.water, types.ice, types.steel],
    [types.electric, types.grass]
);

const electric = new PokemonType(
    [types.electric, types.flying, types.steel],
    [types.ground]
);

const grass = new PokemonType(
    [types.water, types.electric, types.grass, types.ground],
    [types.fire, types.ice, types.poison, types.flying, types.bug]
);

const ice = new PokemonType(
    [types.ice],
    [types.fire, types.fighting, types.rock, types.steel]
);

const fighting = new PokemonType(
    [types.bug, types.rock, types.dark],
    [types.flying, types.psychic, types.fairy]
);

const poison = new PokemonType(
    [types.grass, types.fighting, types.poison, types.bug, types.fairy],
    [types.ground, types.psychic]
);

const ground = new PokemonType(
    [types.electric, types.poison, types.rock],
    [types.water, types.grass, types.ice]
);

const flying = new PokemonType(
    [types.ground, types.grass, types.fighting, types.bug],
    [types.electric, types.ice, types.rock]
);

const psychic = new PokemonType(
    [types.fighting, types.psychic],
    [types.bug, types.ghost, types.dark]
);

const bug = new PokemonType(
    [types.grass, types.fighting, types.ground],
    [types.fire, types.flying, types.rock]
);

const rock = new PokemonType(
    [types.normal, types.fire, types.poison, types.flying],
    [types.water, types.grass, types.fighting, types.ground, types.steel]
);

const ghost = new PokemonType(
    [types.normal, types.fighting, types.poison, types.bug],
    [types.ghost, types.dark]
);

const dragon = new PokemonType(
    [types.fire, types.water, types.electric, types.grass],
    [types.ice, types.dragon, types.fairy]
);

const dark = new PokemonType(
    [types.psychic, types.ghost, types.dark],
    [types.fighting, types.bug, types.fairy]
);

const steel = new PokemonType(
    [types.poison, types.normal, types.grass, types.ice, types.flying, types.psychic, types.bug, types.rock, types.dragon, types.steel, types.fairy],
    [types.fire, types.fighting, types.ground]
);

const fairy = new PokemonType(
    [types.dragon, types.fighting, types.bug, types.dark],
    [types.poison, types.steel]
);