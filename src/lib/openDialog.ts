import { createApp, h } from 'vue';
import Dialog from './Dialog.vue'

export const openDialog = (options) => {
    const { title, content } = options;
    const div = document.createElement('div')
    document.body.appendChild(div)
    const close = () => {
        app.unmount()
        div.remove()
    }
    const app = createApp({
        render() {
            return h(Dialog,
                {
                    visible: true,
                    "onUpdate:value": (newVisible: Boolean) => {
                        if (newVisible === false) {
                            close()
                        }
                    },
                }, { title, content })
        }
    })
    app.mount(div)

}