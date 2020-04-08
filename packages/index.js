/**
 * @author sudong.duan
 * Date: 20/2/28
 */
import sdHeader from './header/index.js';
import {sdDialog, dialog} from './dialog/index.js';
import toast from './toast/index.js'
import sdPopup from './popup/index.js'
import sdPicker from './picker/index.js'
import sdDateTimePicker from './dateTimePicker'


const components = [
    sdHeader,
    sdDialog,
    sdPopup,
    sdPicker,
    sdDateTimePicker
]

const install = function(Vue) {
    if (install.installed) return
    components.map((component) => {Vue.component(component.name, component)})
    Vue.prototype.$dialog = dialog
    Vue.prototype.$toast = toast
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
//移动端集成响应式布局 rem
function flexible (window, document) {
    var docEl = document.documentElement
    var dpr = window.devicePixelRatio || 1

    // adjust body font size
    function setBodyFontSize () {
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px'
        }
        else {
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 10
    function setRemUnit () {
        var rem = docEl.clientWidth / 7.5
        docEl.style.fontSize = rem + 'px'
    }

    setRemUnit()

    // reset rem unit on page resize
    window.addEventListener('resize', setRemUnit)
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            setRemUnit()
        }
    })

    // detect 0.5px supports
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}
flexible(window, document)
//使用阿里巴巴矢量库
function icon() {
    const script = document.createElement('script')
    const css = document.createElement('link')
    const html = document.getElementsByTagName('html')[0]
    script.src = '//at.alicdn.com/t/font_1665721_9k1s0ol9u4r.js'
    script.type = 'text/javascript'
    css.href = '//at.alicdn.com/t/font_1665721_9k1s0ol9u4r.css'
    css.rel = 'stylesheet'
    html.appendChild(css)
    html.appendChild(script)
}
icon()

export default {
    install,
    sdHeader,
    sdDialog,
    sdPopup,
    sdPicker,
    sdDateTimePicker
}