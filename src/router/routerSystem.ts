const router: any[] = [
  {
    path: '/system/user',
    name: 'user',
    component: () => import('@/views/system/user/UserList.vue'),
    meta: { title: 'i18nUser.Title', sub_system_code: "user" }
  },
  {
    path: '/system/role',
    name: 'role',
    component: () => import('@/views/system/role/RoleList.vue'),
    meta: { title: 'i18nRole.Title', sub_system_code: "role" }
  },
  {
    path: '/system/menu',
    name: 'menu',
    component: () => import('@/views/system/menu/MenuList.vue'),
    meta: { title: 'i18nMenu.Title', sub_system_code: "menu" }
  },  
  {
    path: '/lists/dictionary-list',
    name: 'dictionary_list',
    component: () => import('@/views/system/dictionaryList/DictionaryListList.vue'),
    meta: { title: 'i18nDictionaryList.Title', sub_system_code: "dictionary_list" }
  },
  {
    path: '/lists/dictionary',
    name: 'dictionary',
    component: () => import('@/views/system/dictionary/DictionaryList.vue'),
    meta: { title: 'i18nDictionary.Title', sub_system_code: "dictionary" }
  }, 
  {
    path: '/lists/search-key',
    name: 'search_key',
    component: () => import('@/views/system/keyword/KeywordList.vue'),
    meta: { title: 'i18nKeyword.Title', sub_system_code: "search_key" }
  }, 
  {
    path: '/customer/error-report',
    name: 'error_report',
    component: () => import('@/views/system/errorReport/ErrorReportList.vue'),
    meta: { title: 'i18nErrorReport.Title', sub_system_code: "error_report" }
  },
  {
    path: '/system/job-definition',
    name: 'job_definition',
    component: () => import('@/views/system/jobDefinition/JobDefinitionList.vue'),
    meta: { title: 'i18nJobDefinition.Title', sub_system_code: "job_definition" }
  },
  {
    path: '/lists/language',
    name: 'language',
    component: () => import('@/views/system/language/LanguageList.vue'),
    meta: { title: 'i18nLanguage.Title', sub_system_code: "language" }
  },
  {
    path: '/system/function-config',
    name: 'function_config',
    component: () => import('@/views/system/functionConfig/FunctionConfigList.vue'),
    meta: { title: 'i18nFunctionConfig.Title', sub_system_code: "function_config" }
  },
  {
    path: '/system/system-config',
    name: 'system_config',
    component: () => import('@/views/system/systemConfig/SystemConfigList.vue'),
    meta: { title: 'i18nSystemConfig.Title', sub_system_code: "system_config" }
  },
  {
    path: '/system/notify-config',
    name: 'notify_config',
    component: () => import('@/views/system/configNotify/ConfigNotifyList.vue'),
    meta: { title: 'i18nConfigNotify.Title', sub_system_code: "notify_config" }
  },
  {
    path: '/system/config-recieve-notify',
    name: 'config_recieve_notify',
    component: () => import('@/views/system/receiveNotify/ReceiveNotifyList.vue'),
    meta: { title: 'i18nReceiveNotify.Title', sub_system_code: "config_recieve_notify" }
  },
  {
    path: '/lists/country',
    name: 'country',
    component: () => import('@/views/system/country/CountryList.vue'),
    meta: { title: 'i18nCountry.Title', sub_system_code: "country" }
  },
]

export default router;