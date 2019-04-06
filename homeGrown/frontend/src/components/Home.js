import carousel from '@/components/carousel.vue'
import breadCrumb from '@/components/breadCrumb.vue'

export default {
    name: 'home',
    mixins: [],
    extends: {},
    components: { carousel, breadCrumb },
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