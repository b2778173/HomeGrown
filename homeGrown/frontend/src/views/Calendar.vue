<template>
  <div>
    <full-calendar
      class
      :eventSources="eventSources"
      :eventColor="color"
      :config="config "
      @day-click="go()"
    ></full-calendar>
  </div>
</template>
<!-- .js 檔案在此相依 -->
<script>
export default {
  name: "",
  mixins: [],
  extends: {},
  components: {},
  props: [],
  data() {
    return {
      eventSources: [
        {
          events: [
            {
              title: "1人",
              start: "2019-04-04T10:00",
              end: "2019-04-04T12:00"
              // backgroundColor: "green",
              // color: "green",
            },
            {
              title: "1人",
              start: "2019-04-04T13:00",
              end: "2019-04-04T15:00"
            }
          ],
          color: "pink", // an option!
          textColor: "black" // an option!
        },
        {
          // any other event sources...
        }
      ],

      config: {
        // aspectRatio:5,
        // contentHeight:500,
        height: auto,
        // defaultView: "month",
        // defaultView: "agendaDay",
        defaultView: "agendaWeek",
        header: {
          left: "prevYear, nextYear today, prev,next",
          // center: "",
          // right: "today prev,next"
        }
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    console.log(this.config.defaultView);
  },
  updated() {},
  beforeDestroy() {},
  methods: {
    go() {
      alert("點得好!");
    }
  }
};
</script>