import { request } from '@/utils/request'
export const getBanners = () => {
  return request({ url: '/home/swiper' })
}
