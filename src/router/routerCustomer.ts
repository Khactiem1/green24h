const router: any[] = [
    {
      path: '/customer/voucher-events',
      name: 'customer_voucher_events',
      component: () => import('@/views/customer/voucherEvent/VoucherEventList.vue'),
      meta: { title: 'i18nVoucherEvent.Title', sub_system_code: "customer_voucher_events" }
    },
    {
      path: '/customer/customer-voucher',
      name: 'customer_voucher',
      component: () => import('@/views/customer/voucher/VoucherList.vue'),
      meta: { title: 'i18nVoucher.Title', sub_system_code: "customer_voucher" }
    },
    {
      path: '/lists/member-type',
      name: 'member_type',
      component: () => import('@/views/customer/memberType/MemberTypeList.vue'),
      meta: { title: 'i18nMemberType.Title', sub_system_code: "member_type" }
    },
    {
      path: '/lists/emoticon',
      name: 'emoticon',
      component: () => import('@/views/customer/emoticon/EmoticonList.vue'),
      meta: { title: 'i18nEmoticon.Title', sub_system_code: "emoticon" }
    },
    {
      path: '/customer/order-history',
      name: 'order_history',
      component: () => import('@/views/customer/orderHistory/OrderHistoryList.vue'),
      meta: { title: 'i18nOrderHistory.Title', sub_system_code: "order_history" }
    },
    {
      path: '/customer/recharge-refund',
      name: 'recharge_refund',
      component: () => import('@/views/customer/recharge/RechargeList.vue'),
      meta: { title: 'i18nRecharge.Title', sub_system_code: "recharge_refund" }
    },
    {
      path: '/customer/transaction-history',
      name: 'transaction_history',
      component: () => import('@/views/customer/transaction/TransactionList.vue'),
      meta: { title: 'i18nTransaction.Title', sub_system_code: "transaction_history" }
    },
    {
      path: '/lists/contract-template',
      name: 'contract_template',
      component: () => import('@/views/customer/contractTemplate/ContractTemplateList.vue'),
      meta: { title: 'i18nContractTemplate.Title', sub_system_code: "contract_template" }
    },
    {
      path: '/lists/feature-package',
      name: 'feature_package',
      component: () => import('@/views/customer/featurePackage/FeaturePackageList.vue'),
      meta: { title: 'i18nFeaturePackage.Title', sub_system_code: "feature_package" }
    },
    {
      path: '/lists/membership-plan',
      name: 'membership_plan',
      component: () => import('@/views/customer/membershipPlan/MembershipPlanList.vue'),
      meta: { title: 'i18nMembershipPlan.Title', sub_system_code: "membership_plan" }
    },
    {
      path: '/supplier/register-package',
      name: 'register_package',
      component: () => import('@/views/customer/registerPackage/RegisterPackageList.vue'),
      meta: { title: 'i18nRegisterPackage.Title', sub_system_code: "register_package" }
    },
    {
      path: '/product/product-group',
      name: 'product_group',
      component: () => import('@/views/customer/productGroup/ProductGroupList.vue'),
      meta: { title: 'i18nProductGroup.Title', sub_system_code: "product_group" }
    },
    {
      path: '/supplier/supplier-info',
      name: 'supplier_info',
      component: () => import('@/views/customer/supplier/SupplierList.vue'),
      meta: { title: 'i18nSupplier.Title', sub_system_code: "supplier_info" }
    },
    {
      path: '/product/products-list',
      name: 'products_list',
      component: () => import('@/views/customer/product/ProductList.vue'),
      meta: { title: 'i18nProduct.Title', sub_system_code: "products_list" }
    },
  ]
  
  export default router;