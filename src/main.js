import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Search, Swipe, SwipeItem, Image as VanImage, Tabbar, TabbarItem, Grid, GridItem, Col, Row, Icon, Overlay, Button, Dialog, Form, Field, CellGroup, Tag } from 'vant'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'vant/lib/index.css'

axios.defaults.baseURL = '/api'

const app = createApp(App)
app.use(router)
app.use(Search)
app.use(Swipe)
app.use(SwipeItem)
app.use(VanImage)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Grid)
app.use(GridItem)
app.use(VueAxios, axios)
app.use(Col)
app.use(Row)
app.use(Icon)
app.use(Overlay)
app.use(Button)
app.use(Dialog)
app.use(Form)
app.use(Field)
app.use(CellGroup)
app.use(Tag)
app.mount('#app')
