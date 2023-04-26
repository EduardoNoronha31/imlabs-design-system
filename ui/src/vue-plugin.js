import IMLabsInput from "./components/Input/IMLabsInput.js";

const version = __UI_VERSION__;

function install(app) {
  app.component(IMLabsInput.name, IMLabsInput);
}

export { version, IMLabsInput, install };
