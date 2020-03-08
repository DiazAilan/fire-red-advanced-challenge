class Ability { new?: boolean; name: ChangedValue }
class ChangedAmount { old: number; new: number }
class ChangedValue { old: string; new: string }

class Move {
    name: string;
    power?: ChangedAmount;
    accuracy?: ChangedAmount;
    priority?: ChangedAmount;
    effect?: ChangedValue;
    notes?: string;
}

class Stats {
    hp?: string;
    atk?: string;
    def?: string;
    spAtk?: string;
    spDef?: string;
    spe?: string;
}

class PokemonData {
    name: string;
    ability?: Ability;
    stats?: Stats;
    evolution?: ChangedValue;
    moves?: Move[];
    encounter?: ChangedValue;
    catch?: ChangedAmount;
}

export const data: PokemonData[] = [{
    name: 'Venusaur',
    ability: {new: true, name: {old: 'Overgrown', new: 'Chlorophyll'}},
    stats: {spDef: '+5'},
    moves: [{
        name: 'Frenzy Plant',
        accuracy: {old: 90, new: 100}
    }]
},{
    name: 'Charizard',
    ability: {new: true, name: {old: 'Blaze', new: 'Drought'}},
    moves: [{
        name: 'Blast Burn',
        accuracy: {old: 90, new: 100}
    }]
}, {
    name: 'Blastoise',
    ability: {new: true, name: {old: 'Torrent', new: 'Rain Dish'}},
    stats: {spDef: '+10'},
    moves: [{
        name: 'Hydro Cannon',
        accuracy: {old: 90, new: 100}
    }]
}, {
    name: 'Butterfree',
    stats: {hp: '+20', spAtk: '+10', spDef: '+20', spe: '+20'},
}, {
    name: 'Beedrill',
    stats: {atk: '+30', spe: '+20'},
    moves: [{
        name: 'Twin Needle',
        accuracy: {old: 25, new: 40}
    }]
}, {
    name: 'Pidgeot',
    stats: {hp: '+20', spDef: '+20', spe: '+10'},
    moves: [{
        name: 'Feather Dance',
        priority: {old: 0, new: 2}
    }]
}, {
    name: 'Raticate',
    ability: {name: {old: 'Run Away', new: 'Guts'}},
    stats: {atk: '+20', spe: '+20'},
    moves: [{
        name: 'Super Fang',
        accuracy: {old: 90, new: 100}
    }, {
        name: 'Hyper Fang',
        accuracy: {old: 90, new: 100}
    }]
}, {
    name: 'Fearrow',
    stats: {atk: '+20', spe: '+20'},
}, {
    name: 'Arbok',
    ability: {name: {old: 'Shed Skin', new: 'Intimidate'}},
    stats: {hp: '+20', atk: '+10', def: '+20', spDef: '+20', spe: '+20'},
}, {
    name: 'Raichu',
    ability: {new: true, name: {old: 'Static', new: 'Lightning Rod'}},
    stats: {spe: '+20'},
    moves: [{
        name: 'Volt Tackle',
        power: {old: 120, new: 130},
        notes: 'Aprendido a nivel 43 por Pikachu'
    }],
}, {
    name: 'Sandslash',
    ability: {new: true, name: {old: 'Sand Veil', new: 'Sand Stream'}},
    encounter: {old: 'No encontrable', new: '10% en Ruta 4 (Sandshrew)'}
}, {
    name: 'Nidoqueen',
    stats: {atk: '+10', def: '+10', spDef: '+10'},
}, {
    name: 'Nidoking',
    stats: {atk: '+20'},
}, {
    name: 'Clefable',
    stats: {hp: '+10', def: '+10', spAtk: '+10'},
}, {
    name: 'Ninetales',
    ability: {new: true, name: {old: 'Flash Fire', new: 'Drought'}},
    encounter: {old: 'No encontrable', new: '10% en Ruta 5 (Vulpix)'}
}, {
    name: 'Wigglytuff',
    stats: {hp: '+20', spAtk: '+30'},
}, {
    name: 'Golbat',
    stats: {hp: '+10', atk: '+20', def: '+10', spDef: '+5', spe: '+20'},
}, {
    name: 'Vileplume',
    stats: {hp: '+10', spAtk: '+10', spe: '+10'},
    moves: [{
        name: 'Petal Dance ',
        power: {old: 80, new: 130},
    }],
}, {
    name: 'Parasect',
    stats: {hp: '+20', atk: '+20', def: '+20', spAtk: '+20', spDef: '+20'},
}, {
    name: 'Venomoth',
    stats: {hp: '+20', spDef: '+20', spe: '+20'},
}, {
    name: 'Dugtrio',
    ability: {name: {old: 'Sand Veil', new: 'Arena Trap'}},
}, {
    name: 'Persian',
    stats: {hp: '+10', atk: '+10', def: '+10'},
}, {
    name: 'Golduck',
    ability: {name: {old: 'Damp', new: 'Cloud Nine'}},
    stats: {hp: '+10', spe: '+10'},
}, {
    name: 'Primeape',
    stats: {atk: '+10', spe: '+10'},
}, {
    name: 'Arcanine',
    ability: {name: {old: 'Flash Fire', new: 'Intimidate'}},
    stats: {spDef: '+5'},
}, {
    name: 'Poliwrath',
    ability: {name: {old: 'Damp', new: 'Water Absorb'}},
    stats: {hp: '+10', atk: '+10', def: '+10', spDef: '+10'},
}, {
    name: 'Alakazam',
    ability: {name: {old: 'Inner Focus', new: 'Synchronize'}},
    stats: {spDef: '+10'},
    evolution: {old: 'Intercambio', new: 'Nivel 32'},
    moves: [{
        name: 'Kinesis',
        priority: {old: 0, new: 1},
        effect: {old: 'Reduce la presición de un enemigo', new: 'Reduce el ataque de ambos enemigos'}
    }]
}, {
    name: 'Machamp',
    stats: {atk: '+5'},
    evolution: {old: 'Intercambio', new: 'Nivel 36'},
    moves: [{
        name: 'Vital Throw',
        power: {old: 80, new: 100},
    }]
}, {
    name: 'Victreebel',
    stats: {atk: '+10', spAtk: '+10', spDef: '+10'},
    encounter: {old: 'No encontrable', new: '10% en Ruta 4 (Bellsprout)'}
}, {
    name: 'Tentacruel',
    ability: {new: true, name: {old: 'Clear Body & Liquid Ooze', new: 'Rain Dish'}},
    stats: {spDef: '+10'},
}, {
    name: 'Golem',
    ability: {name: {old: 'Rock Head', new: 'Sturdy'}},
    stats: {hp: '+10', atk: '+10', def: '+10'},
    evolution: {old: 'Intercambio', new: 'Nivel 36'},
    moves: [{
        name: 'Vital Throw',
        power: {old: 80, new: 100},
    }]
}, {
    name: 'Rapidash',
    ability: {name: {old: 'Run Away', new: 'Flash Fire'}},
    stats: {atk: '+10', spe: '+10'},
}, {
    name: 'Slowbro',
    ability: {new: true, name: {old: 'Oblivious & Own Tempo', new: 'Shell Armor'}},
    stats: {hp: '+5'},
    encounter: {old: 'No encontrable', new: '10% en Seafom Islands (Slowpoke)'}
}, {
    name: 'Magneton',
    ability: {name: {old: 'Sturdy', new: 'Magnet Pull'}},
}, {
    name: 'Farfecthd',
    stats: {hp: '+20', atk: '+30', spAtk: '+20', spe: '+20'}
}]
