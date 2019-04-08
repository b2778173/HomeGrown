<template>
  <div>
    <FullCalendar
      ref="fullCalendar"
      :events="events"
      defaultView="dayGridMonth"
      :plugins="calendarPlugins"
      :header="header"
      @eventClick="handleEventClick"
      @dateClick="handleDateClick"
    />
  </div>
</template>
<!-- .js 檔案在此相依 -->
<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrapPlugin from "@fullcalendar/bootstrap";

export default {
  name: "",
  mixins: [],
  extends: {},
  components: { FullCalendar },
  props: [],
  data() {
    return {
      addEvent: false,
      calendarPlugins: [
        dayGridPlugin,
        timeGridPlugin,
        listPlugin,
        interactionPlugin
      ],
      header: {
        left: "prev, next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay"
      },
      events: [
        {
          title: "my event",
          start: "2019-04-04T10:00"
        }
      ],
      modal5: false // modal appear property
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  updated() {},
  beforeDestroy() {},
  methods: {
    handleDateClick(info) {
      console.log(info);
      let myinfo = info; //將點擊的dateInfo 物件存於local variable
      this.$Modal.confirm({
        // 顯示彈跳視窗
        title: "預約?",
        content: "<p>預約" + info.dateStr + "日</p>",
        okText: "預約",
        onOk: info => {
          let calendarApi = this.$refs.fullCalendar.getApi();
          calendarApi.addEvent({
            title: "good",
            start: myinfo.dateStr,
            allDay: true
          });
          this.$Message.success("預約成功");
        },
        onCancel: () => {
          this.$Message.error("預約取消");
        },
        closable: true,
        width: 300
      });
    },
    handleEventClick(info) {
      alert(info.event.title);
      console.log(info);
    }
  }
};
</script>