import { h } from "vue";
import { QInput } from "quasar";

export default {
  name: "IMLabsInput",

  setup() {
    return () =>
      h(QInput, {
        class: "IMLabsInput",
        label: "IMLabsInput",
      });
  },
};
