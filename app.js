var app = new Vue({
    el: '#app',
    data: {
        types: [
            { title: 'Normal', stats: normal, color: '#AAAA99' },
            { title: 'Fire', stats: fire, color: '#FF4422' },
            { title: 'Water', stats: water, color: '#3399FF' },
            { title: 'Electric', stats: electric, color: '#FFCC33' },
            { title: 'Grass', stats: grass, color: '#77CC55' },
            { title: 'Ice', stats: ice, color: '#66CCFF' },
            { title: 'Fighting', stats: fighting, color: '#BB5544' },
            { title: 'Poison', stats: poison, color: '#AA5599' },
            { title: 'Ground', stats: ground, color: '#DDBB55' },
            { title: 'Flying', stats: flying, color: '#8899FF' },
            { title: 'Psychic', stats: psychic, color: '#FF5599' },
            { title: 'Bug', stats: bug, color: '#AABB22' },
            { title: 'Rock', stats: rock, color: '#BBAA66' },
            { title: 'Ghost', stats: ghost, color: '#6666BB' },
            { title: 'Dragon', stats: dragon, color: '#7766EE' },
            { title: 'Dark', stats: dark, color: '#775544' },
            { title: 'Steel', stats: steel, color: '#AAAABB' },
            { title: 'Fairy', stats: fairy, color: '#EE99EE' },
        ],
        selected: []
    },
    methods: {
        addType: function(typeName) {
            this.selected.push(this.types.find(type => type.title === typeName));
        },
        removeType: function(typeName){
            this.selected = this.selected.filter(type => type.title !== typeName);
        }
    },
    computed: {
        weaknesses: function(){
            const weaknesses = [];

            let notEffective = [];
            let superEffective = [];
            
            for(const type of this.selected) {
                notEffective.push(...type.stats.dNotEffective);
                superEffective.push(...type.stats.dSuperEffective);

                for (const effective of superEffective) {
                    if(notEffective.includes(effective))
                        superEffective = superEffective.filter(x => x !== effective);
                }
            }

            for (const type of superEffective) {
                const name = Object.keys(types).find(key => types[key] === type);
                const value = this.types.filter(item => item.title.toLowerCase() === name)[0];
                
                weaknesses.push(value);
            }

            return weaknesses;
        }
    }
})