//import App from ' /App vue'


const roomsList = [
    {
        img: 'https://picsum photos/250/150/?random',
        type: 'vip',
        size: 'larg',
        info: 'Proactively simplify proactive methods of empowerment vis-a-vis.',
        servces: [],
        price: '400$'
    }, {
        img: 'https://picsum photos/250/150/?random',
        type: 'vip',
        size: 'larg',
        info: 'Proactively simplify proactive methods of empowerment vis-a-vis.',
        servces: [],
        price: '400$'
    }, {
        img: 'https://picsum photos/250/150/?random',
        type: 'special',
        size: 'small',
        info: 'Proactively simplify proactive methods of empowerment vis-a-vis.',
        servces: [],
        price: '400$'
    }, {
        img: 'https://picsum photos/250/150/?random',
        type: 'special',
        size: 'small',
        info: 'Proactively simplify proactive methods of empowerment vis-a-vis.',
        servces: [],
        price: '400$'
    }, {
        img: 'https://picsum photos/250/150/?random',
        type: 'vip',
        size: 'larg',
        info: 'Proactively simplify proactive methods of empowerment vis-a-vis.',
        servces: [],
        price: '400$'
    }, {
        img: 'https://picsum photos/250/150/?random',
        type: 'special',
        size: 'larg',
        info: 'Proactively simplify proactive methods of empowerment vis-a-vis.',
        servces: [],
        price: '400$'
    }, {
        img: 'https://picsum photos/250/150/?random',
        type: 'normal',
        size: 'small',
        info: 'Proactively simplify proactive methods of empowerment vis-a-vis.',
        servces: [],
        price: '400$'
    }, {
        img: 'https://picsum photos/250/150/?random',
        type: 'special',
        size: 'medium',
        info: 'Proactively simplify proactive methods of empowerment vis-a-vis.',
        servces: [],
        price: '400$'
    }, {
        img: 'https://picsum photos/250/150/?random',
        type: 'normal',
        size: 'small',
        info: 'Proactively simplify proactive methods of empowerment vis-a-vis.',
        servces: [],
        price: '400$'
    }, {
        img: 'https://picsum photos/250/150/?random',
        type: 'vip',
        size: 'larg',
        info: 'Proactively simplify proactive methods of empowerment vis-a-vis.',
        servces: [],
        price: '400$'
    }
];
export default {
    data() {
        return {
            work: 'Filter By :',
            type: '',
            size: '',
            rooms: roomsList
        }
    },
    methods: {
        roomFilterByType: function (room) {
            console.log(event.target.value);
            this.type = event.target.value;
        },
        roomFilterBySize: function (room) {
            console.log(event.target.value);
            this.size = event.target.value;
        }
    },
    computed: {
        uniqueTypes: function () {
            const types = [];
            this.rooms.forEach(room => {
                if (!types.includes(room.type)) {
                    types.push(room.type);
                }
            });
            return types;
        },
        uniqueSizes: function () {
            const sizes = [];
            this.rooms.forEach(room => {
                if (!sizes.includes(room.size)) {
                    sizes.push(room.size);
                }
            });
            return sizes;
        }
    }
}
