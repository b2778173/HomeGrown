export default {
    name: '',
    mixins: [],
    extends: {},
    components: {},
    props: [],
    data() {
        return {
            cards: [
                { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
                { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
                { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
                { title: 'Best airlines2', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
                { title: 'Best airlines3', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
                { title: 'Pre-fab homes2', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 }
            ]
        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    updated() {},
    beforeDestroy() {},
    methods: {
        viewDetails() {
            this.$router.push('/productDetails');
        }
    },
};