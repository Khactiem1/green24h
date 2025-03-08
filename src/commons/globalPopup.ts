import { type App, defineAsyncComponent } from "vue";

/** Phần popup phân hệ */

/** Dictionary */
const EmployeeDetail = defineAsyncComponent(() => import('@/views/dictionary/employee/EmployeeDetail.vue'));

/** Business */
const BannerDetail = defineAsyncComponent(() => import('@/views/business/banner/BannerDetail.vue'));
const NewsDetail = defineAsyncComponent(() => import('@/views/business/news/NewsDetail.vue'));
const NewsListDetail = defineAsyncComponent(() => import('@/views/business/newsList/NewsListDetail.vue'));
const FooterDetail = defineAsyncComponent(() => import('@/views/business/footer/FooterDetail.vue'));
const MenuFontendDetail = defineAsyncComponent(() => import('@/views/business/menuFrontend/MenuFontendDetail.vue'));
const QuickLinkDetail = defineAsyncComponent(() => import('@/views/business/quickLink/QuickLinkDetail.vue'));
const BankDetail = defineAsyncComponent(() => import('@/views/business/bank/BankDetail.vue'));
const DepartmentDetail = defineAsyncComponent(() => import('@/views/business/department/DepartmentDetail.vue'));
const AnoucementDetail = defineAsyncComponent(() => import('@/views/business/anoucement/AnoucementDetail.vue'));
const SupportListDetail = defineAsyncComponent(() => import('@/views/business/supportList/SupportListDetail.vue'));
const PositionDetail = defineAsyncComponent(() => import('@/views/business/position/PositionDetail.vue'));
const SupportDetail = defineAsyncComponent(() => import('@/views/business/support/SupportDetail.vue'));
const ContactDetail = defineAsyncComponent(() => import('@/views/business/contact/ContactDetail.vue'));
const CompanyInfoDetail = defineAsyncComponent(() => import('@/views/business/companyInfo/CompanyInfoDetail.vue'));
const ProvinceDetail = defineAsyncComponent(() => import('@/views/business/province/ProvinceDetail.vue'));
const DistrictDetail = defineAsyncComponent(() => import('@/views/business/district/DistrictDetail.vue'));
const WardDetail = defineAsyncComponent(() => import('@/views/business/ward/WardDetail.vue'));
const CategoryDetail = defineAsyncComponent(() => import('@/views/business/category/CategoryDetail.vue'));
const PaymentMethodDetail = defineAsyncComponent(() => import('@/views/business/paymentMethod/PaymentMethodDetail.vue'));
const BrandDetail = defineAsyncComponent(() => import('@/views/business/brand/BrandDetail.vue'));
const StaffDetail = defineAsyncComponent(() => import('@/views/business/staff/StaffDetail.vue'));

/** System */
const UserDetail = defineAsyncComponent(() => import('@/views/system/user/UserDetail.vue'));
const RoleDetail = defineAsyncComponent(() => import('@/views/system/role/RoleDetail.vue'));
const MenuDetail = defineAsyncComponent(() => import('@/views/system/menu/MenuDetail.vue')); 
const DictionaryListDetail = defineAsyncComponent(() => import('@/views/system/dictionaryList/DictionaryListDetail.vue'));
const DictionaryDetail = defineAsyncComponent(() => import('@/views/system/dictionary/DictionaryDetail.vue'));
const ErrorReportDetail = defineAsyncComponent(() => import('@/views/system/errorReport/ErrorReportDetail.vue'));
const JobDefinitionDetail = defineAsyncComponent(() => import('@/views/system/jobDefinition/JobDefinitionDetail.vue'));
const LanguageDetail = defineAsyncComponent(() => import('@/views/system/language/LanguageDetail.vue'));
const SystemConfigDetail = defineAsyncComponent(() => import('@/views/system/systemConfig/SystemConfigDetail.vue'));
const ConfigNotifyDetail = defineAsyncComponent(() => import('@/views/system/configNotify/ConfigNotifyDetail.vue'));
const ReceiveNotifyDetail = defineAsyncComponent(() => import('@/views/system/receiveNotify/ReceiveNotifyDetail.vue'));
const ReceiveSelectUser = defineAsyncComponent(() => import('@/views/system/receiveNotify/ReceiveSelectUser.vue'));
const KeywordDetail = defineAsyncComponent(() => import('@/views/system/keyword/KeywordDetail.vue'));
const FunctionConfigDetail = defineAsyncComponent(() => import('@/views/system/functionConfig/FunctionConfigDetail.vue'));
const CountryDetail = defineAsyncComponent(() => import('@/views/system/country/CountryDetail.vue'));

/** Customer */
const VoucherEventDetail = defineAsyncComponent(() => import('@/views/customer/voucherEvent/VoucherEventDetail.vue'));
const VoucherDetail = defineAsyncComponent(() => import('@/views/customer/voucher/VoucherDetail.vue'));
const MemberTypeDetail = defineAsyncComponent(() => import('@/views/customer/memberType/MemberTypeDetail.vue'));
const EmoticonDetail = defineAsyncComponent(() => import('@/views/customer/emoticon/EmoticonDetail.vue'));
const RechargeDetail = defineAsyncComponent(() => import('@/views/customer/recharge/RechargeDetail.vue'));
const ContractTemplateDetail = defineAsyncComponent(() => import('@/views/customer/contractTemplate/ContractTemplateDetail.vue'));
const RegisterPackageDetail = defineAsyncComponent(() => import('@/views/customer/registerPackage/RegisterPackageDetail.vue'));
const ProductGroupDetail = defineAsyncComponent(() => import('@/views/customer/productGroup/ProductGroupDetail.vue'));
const SupplierDetail = defineAsyncComponent(() => import('@/views/customer/supplier/SupplierDetail.vue'));
const FeaturePackageDetail = defineAsyncComponent(() => import('@/views/customer/featurePackage/FeaturePackageDetail.vue'));
const MembershipPlanDetail = defineAsyncComponent(() => import('@/views/customer/membershipPlan/MembershipPlanDetail.vue'));


/** Phần popup hệ thống system */
const MsConfigLayoutList = defineAsyncComponent(() => import('@/components/layout/MsConfigLayoutList.vue'));
const ChangePassword = defineAsyncComponent(() => import('@/components/layout/ChangePassword.vue'));
const TheSettingClamp = defineAsyncComponent(() => import('@/components/system/TheSettingClamp.vue'));
const UserProfile = defineAsyncComponent(() => import('@/components/layout/UserProfile.vue'));
const FileManagement = defineAsyncComponent(() => import('@/components/froala/FileManagement.vue'));

export const register = (app: App<Element>) => {
  app.component('EmployeeDetail', EmployeeDetail);
  app.component('UserDetail', UserDetail);
  app.component('RoleDetail', RoleDetail);
  app.component('MenuDetail', MenuDetail);
  app.component('MenuFontendDetail', MenuFontendDetail);
  app.component('QuickLinkDetail', QuickLinkDetail);
  app.component('BannerDetail', BannerDetail);
  app.component('ErrorReportDetail', ErrorReportDetail);
  app.component('JobDefinitionDetail', JobDefinitionDetail);
  app.component('LanguageDetail', LanguageDetail);
  app.component('SystemConfigDetail', SystemConfigDetail);
  app.component('ConfigNotifyDetail', ConfigNotifyDetail);
  app.component('ReceiveNotifyDetail', ReceiveNotifyDetail);
  app.component('ReceiveSelectUser', ReceiveSelectUser);
  app.component('NewsDetail', NewsDetail);
  app.component('NewsListDetail', NewsListDetail);
  app.component('DictionaryListDetail', DictionaryListDetail);
  app.component('DictionaryDetail', DictionaryDetail);
  app.component('MsConfigLayoutList', MsConfigLayoutList);
  app.component('ChangePassword', ChangePassword);
  app.component('TheSettingClamp', TheSettingClamp);
  app.component('BankDetail', BankDetail);
  app.component('UserProfile', UserProfile);
  app.component('FileManagement', FileManagement);
  app.component('FooterDetail', FooterDetail);
  app.component('AnoucementDetail', AnoucementDetail);
  app.component('DepartmentDetail', DepartmentDetail);
  app.component('SupportListDetail', SupportListDetail);
  app.component('PositionDetail', PositionDetail);
  app.component('SupportDetail', SupportDetail);
  app.component('ContactDetail', ContactDetail);
  app.component('KeywordDetail', KeywordDetail);
  app.component('CompanyInfoDetail', CompanyInfoDetail);
  app.component('FunctionConfigDetail', FunctionConfigDetail);
  app.component('FeaturePackageDetail', FeaturePackageDetail);
  app.component('MembershipPlanDetail', MembershipPlanDetail);
  app.component('ProvinceDetail', ProvinceDetail);
  app.component('DistrictDetail', DistrictDetail);
  app.component('WardDetail', WardDetail);
  app.component('VoucherEventDetail', VoucherEventDetail);
  app.component('VoucherDetail', VoucherDetail);
  app.component('CategoryDetail', CategoryDetail);
  app.component('MemberTypeDetail', MemberTypeDetail);
  app.component('PaymentMethodDetail', PaymentMethodDetail);
  app.component('EmoticonDetail', EmoticonDetail);
  app.component('ContractTemplateDetail', ContractTemplateDetail);
  app.component('BrandDetail', BrandDetail);
  app.component('RegisterPackageDetail', RegisterPackageDetail);
  app.component('ProductGroupDetail', ProductGroupDetail);
  app.component('SupplierDetail', SupplierDetail);
  app.component('CountryDetail', CountryDetail);
  app.component('StaffDetail', StaffDetail);

}