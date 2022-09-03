import Vue from "vue";
import dayjs from "dayjs";

Vue.filter("timeFormat", (val) => dayjs(val).format("MM/DD/YYYY"));
