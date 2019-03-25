import carousel from '@/components/carousel.vue'

export default {
    name: 'home',
    mixins: [],
    extends: {},
    components: { carousel },
    props: [],
    data() {
        return {};
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
        this.init();
    },
    updated() {},
    beforeDestroy() {},
    methods: {
        init() {
            // $('#app').html() = '111111';
        }
    },
};