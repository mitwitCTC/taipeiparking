import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import zh from '@/locales/zh.json'
import IntroView from '../views/IntroView.vue'
import AnnouncementsView from '../views/AnnouncementsView.vue'
import InquiryView from '../views/InquiryView.vue'
import JoinUsView from '../views/JoinusView.vue'
import PromotionsView from '../views/PromotionsView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import FaqView from '../views/FaqView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import MemmberView from '@/views/MemberView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: zh.components.header.home || 'Home' }
    },
    {
      path: '/intro',
      name: 'intro',
      component: IntroView,
      meta: { title: zh.components.header.intro || 'intro' }
    },
    {
      path: '/announcements',
      name: 'announcements',
      component: AnnouncementsView,
      meta: { title: zh.components.header.announcements || 'announcements' }
    },
    {
      path: '/inquiry',
      name: 'inquiry',
      component: InquiryView,
      meta: { title: zh.components.header.inquiry || 'inquiry' }
    },
    {
      path: '/joinUs',
      name: 'joinUs',
      component: JoinUsView,
      meta: { title: zh.components.header.joinUs || 'joinUs' }
    },
    {
      path: '/promotions',
      name: 'promotions',
      component: PromotionsView,
      meta: { title: zh.components.header.promotions || 'promotions' }
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: ContactUsView,
      meta: { title: zh.components.header.contactUs || 'contactUs' }
    },
    {
      path: '/faq',
      name: 'faq',
      component: FaqView,
      meta: { title: zh.components.footer.faq || 'faq' }
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyView,
      meta: { title: zh.components.footer.privacy || 'privacy' }
    },
    {
      path: '/member',
      name: 'member',
      component: MemmberView,
      meta: { title: zh.pages.member.title || 'member' }
    },
  ]
})

export default router
