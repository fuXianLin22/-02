import {
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Image as VanImage,
  Search,
  Icon,
  Grid,
  GridItem,
  Cell,
  Card
} from 'vant'
const elements = [
  Grid,
  Card,
  Cell,
  GridItem,
  Icon,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  VanImage,
  Search
]
export default function (Vue) {
  elements.forEach((element) => Vue.use(element))
}
