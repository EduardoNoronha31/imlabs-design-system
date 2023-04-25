import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-imlabs-design-system'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
