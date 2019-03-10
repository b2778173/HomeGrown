import vHeader from '@/components/header.vue'
import sideBar from '@/components/sideBar.vue'
import carousel from '@/components/carousel.vue'

export default {
    name: 'home',
    mixins: [],
    extends: {},
    components: { vHeader, sideBar, carousel },
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