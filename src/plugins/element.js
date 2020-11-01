import Vue from 'vue'
import { 
    Button ,
    Form,
    FormItem,
    Input,
    // 弹框提示组件
    Message
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 挂载弹框提示组件
Vue.prototype.$message=Message

