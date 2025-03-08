const router: any [] = [
  {
    path: '/lists/banner',
    name: 'banner',
    component: () => import('@/views/business/banner/BannerList.vue'),
    meta: { title: 'i18nBanner.Title', sub_system_code: "banner" }
  },
  {
    path: '/news/news-all',
    name: 'news',
    component: () => import('@/views/business/news/NewsList.vue'),
    meta: { title: 'i18nNews.Title', sub_system_code: "news" }
  },
  {
    path: '/news/news-list',
    name: 'news_list',
    component: () => import('@/views/business/newsList/NewsListList.vue'),
    meta: { title: 'i18nNewsList.Title', sub_system_code: "news_list" }
  },
  {
    path: '/lists/footer',
    name: 'footer',
    component: () => import('@/views/business/footer/FooterList.vue'),
    meta: { title: 'i18nFooter.Title', sub_system_code: "footer" }
  },
  {
    path: '/lists/menu-frontend',
    name: 'menu_frontend',
    component: () => import('@/views/business/menuFrontend/MenuFontendList.vue'),
    meta: { title: 'i18nMenuFontend.Title', sub_system_code: "menu_frontend" }
  },
  {
    path: '/lists/quick-link',
    name: 'quick_link',
    component: () => import('@/views/business/quickLink/QuickLinkList.vue'),
    meta: { title: 'i18nQuickLink.Title', sub_system_code: "quick_link" }
  },
  {
    path: '/lists/bank',
    name: 'bank',
    component: () => import('@/views/business/bank/BankList.vue'),
    meta: { title: 'i18nBank.Title', sub_system_code: "bank" }
  },
  {
    path: '/lists/department',
    name: 'department',
    component: () => import('@/views/business/department/DepartmentList.vue'),
    meta: { title: 'i18nDepartment.Title', sub_system_code: "department" }
  },
  {
    path: '/lists/anoucement',
    name: 'anoucement',
    component: () => import('@/views/business/anoucement/AnoucementList.vue'),
    meta: { title: 'i18nAnoucement.Title', sub_system_code: "anoucement" }
  },
  {
    path: '/lists/support-list',
    name: 'supportList',
    component: () => import('@/views/business/supportList/SupportListList.vue'),
    meta: { title: 'i18nSupportList.Title', sub_system_code: "support_list" }
  },
  {
    path: '/lists/position',
    name: 'position',
    component: () => import('@/views/business/position/PositionList.vue'),
    meta: { title: 'i18nPosition.Title', sub_system_code: "position" }
  },
  {
    path: '/lists/support-center',
    name: 'support_center',
    component: () => import('@/views/business/support/SupportList.vue'),
    meta: { title: 'i18nSupport.Title', sub_system_code: "support_center" }
  },
  {
    path: '/customer/contact',
    name: 'customer_contact',
    component: () => import('@/views/business/contact/ContactList.vue'),
    meta: { title: 'i18nContact.Title', sub_system_code: "customer_contact" }
  },
  {
    path: '/lists/company-info',
    name: 'company_info',
    component: () => import('@/views/business/companyInfo/CompanyInfoList.vue'),
    meta: { title: 'i18nCompanyInfo.Title', sub_system_code: "company_info" }
  },
  {
    path: '/lists/province',
    name: 'province',
    component: () => import('@/views/business/province/ProvinceList.vue'),
    meta: { title: 'i18nProvince.Title', sub_system_code: "province" }
  },
  {
    path: '/lists/district',
    name: 'district',
    component: () => import('@/views/business/district/DistrictList.vue'),
    meta: { title: 'i18nDistrict.Title', sub_system_code: "district" }
  },
  {
    path: '/lists/ward',
    name: 'ward',
    component: () => import('@/views/business/ward/WardList.vue'),
    meta: { title: 'i18nWard.Title', sub_system_code: "ward" }
  },
  {
    path: '/lists/product-category',
    name: 'category_list',
    component: () => import('@/views/business/category/CategoryList.vue'),
    meta: { title: 'i18nCategory.Title', sub_system_code: "category" }
  },
  {
    path: '/lists/payment-method',
    name: 'payment_method',
    component: () => import('@/views/business/paymentMethod/PaymentMethodList.vue'),
    meta: { title: 'i18nPaymentMethod.Title', sub_system_code: "payment_method" }
  },
  {
    path: '/lists/brand',
    name: 'brand',
    component: () => import('@/views/business/brand/BrandList.vue'),
    meta: { title: 'i18nBrand.Title', sub_system_code: "brand" }
  },
  {
    path: '/lists/staff',
    name: 'staff',
    component: () => import('@/views/business/staff/StaffList.vue'),
    meta: { title: 'i18nStaff.Title', sub_system_code: "staff" }
  }
]

export default router;