import { request } from '@/utils/request'
export const getBanners = () => {
  return request({ url: '/home/swiper' })
}
export const getHouse = () => {
  return request({ url: '/home/groups' })
}
