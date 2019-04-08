<template>
  <div>
    <full-calendar ref="mycalendar"
      :eventSources="eventSources"
      :config="config"
      @day-click="dayClick"
      @event-selected="eventSelected"
      style="margin: 3%"
    ></full-calendar>
    <input ref="input" value="幹">
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
              end: "2019-04-04T12:00",
              // backgroundColor: "green",
              // color: "green",
              ps: "預約要快狠準"
            },
            {
              title: "1人",
              start: "2019-04-04T13:00",
              end: "2019-04-04T15:00",
              ps: "預約要快狠準"
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
        timezone: "local", // 練現在加入的時間為現在時區, 不然會轉為GMT+8
        buttonText: { today: "本日" },
        // buttonIcons: false,
        customButtons: {
          myCustomButton: {
            text: "custom!",
            click: function() {
              alert("clicked the custom button!");
            }
          }
        },
        aspectRatio: 1.5,
        contentHeight: 400,
        // height: 250,
        // defaultView: "month",
        // defaultView: "agendaDay",
        defaultView: "agendaWeek",
        header: {
          left: "today, prev,next, myCustomButton"
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
    dayClick(info) {
      console.log(info);
      if (confirm("加入新事項?")) {
        this.eventSources[0].events.push({
          title: "2人",
          start: info._d,
          end: new Date(info._d.getTime() + 1000 * 60 * 30)
        });
      }
    },
    eventSelected(info) {
      console.log(this.$refs.input.value);
      alert(info.title + " " + info.ps);
    },
    eventMouseEnter(info) {
      alert(info);
    }
  }
};
</script>