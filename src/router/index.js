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
import VendorView from '@/views/VendorView.vue'
import ActivitiesView from '@/views/ActivitiesView.vue'
import PayView from '@/views/PayView.vue'
import AnnouncementsDetailView from '@/views/AnnouncementsDetailView.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'

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
      path: '/announcements/:type/:id',
      name: 'announcement-detail',
      component: AnnouncementsDetailView,
      props: true
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
    {
      path: '/vendor',
      name: 'vendor',
      component: VendorView,
      meta: { title: zh.pages.vendor.title || 'vendor' }
    },
    {
      path: '/activities',
      name: 'activities',
      component: ActivitiesView,
      meta: { title: zh.pages.activities.title || 'activities' }
    },
    {
      path: '/payment',
      name: 'payment',
      component: PayView,
      meta: { title: zh.pages.payment.title || 'payment' }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { title: zh.pages.login.title || 'login' }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
      meta: { title: zh.pages.signup.title || 'signup' }
    },
  ]
})

export default router
