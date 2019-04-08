<template>
  <div id="calendar" ref="calendar"></div>
</template>
<!-- .js 檔案在此相依 -->
<script>
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrapPlugin from "@fullcalendar/bootstrap";

export default {
  name: "",
  mixins: [],
  extends: {},
  components: {},
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
      var calendarEl = this.$refs.calendar; // 取得id=calendar Element
      document.addEventListener("DOMContentLoaded", function() {
        var calendar = new Calendar(calendarEl, {
          plugins: [
            dayGridPlugin,
            timeGridPlugin,
            listPlugin,
            interactionPlugin
            // bootstrapPlugin
          ],
          //   themeSystem: 'bootstrap',
          header: {
            left: "prev, next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay"
          },
          events: [
            {
              id: "a",
              title: "my event",
              start: new Date()
            }
          ],
          dateClick(info) {
            console.log("date u clicked = ", info);
            if (confirm("加入事項?")) {
              if (info.view.type == "dayGridMonth") {
                calendar.addEvent({
                  title: "dynamic event",
                  start: info.date,
                  allDay: true
                });
              }
            }
          },
          eventClick(info) {
            console.log("event clicked!=", info);
          }
        });
        calendar.render();
      });
    }
  }
};
</script>