import {
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Image as VanImage,
  Search,
  Icon
} from 'vant'
const elements = [Icon, Tabbar, TabbarItem, Swipe, SwipeItem, VanImage, Search]
export default function (Vue) {
  elements.forEach((element) => Vue.use(element))
}
