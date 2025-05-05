<template>
  <ms-dynamic-popup
		:width="680"
		:height="400"
    :title="`${
      editMode ? $ms.commonFn.getEnumResource(editMode, 'FormState') : ''
    } ${$t('i18nNewsList.Title')}`"
    @beforeOpen="beforeOpen"
    @shortkeyAction="shortkeyAction"
  >
    <template v-slot:content="{ close }">
      <div ref="slot-content" class="form-content-popup">
        <div class="form-container pd-t-4">
          <div class="mb-2">
            <ms-tab-language :ref="msTabLanguageRef" />
          </div>
          <div class="form-detail">
            <div v-for="(lang, indexLang) in listLanguage()" :key="lang.tabKey">
              <div v-show="languageActive() == lang.tabKey" class="form-group">
                <ms-input
                  :maxLength="100"
                  :rules="indexLang == 0 ? [{ name: 'required' }, ] : []"
                  :label="$t('i18nNewsList.Detail.news_list_name')"
                  v-model="model[`news_list_name_${lang.language_code}`]"
                ></ms-input>
              </div>
            </div>
            <div class="form-group">
              <ms-number
                :label="$t('i18nNewsList.Detail.sort')"
                v-model="model.sort"
              ></ms-number>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:footer="{ close }">
      <div class="form-action">
        <div class="form-action_container">
          <div class="form-action_item">
            <ms-button @click="close">
              {{ $t("i18nCommon.Close") }}
            </ms-button>
          </div>
          <div class="form-action_item">
            <ms-button 
              @click="save" 
              class="primary"
              shortkey-target="Save" 
              :title="'Ctrl + s'"
            >
              {{ $t("i18nCommon.crud.save") }}
            </ms-button>
          </div>
        </div>
      </div>
    </template>
  </ms-dynamic-popup>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref } from "vue";
import useModuleNewsList from "@/stores/bus/moduleNewsList";
import newsListAPI from "@/apis/bus/newsListAPI";
import BaseDetail from "@/views/base/BaseDetail";
import MsTabLanguage from "@/components/msTab/MsTabLanguage.vue";

export default defineComponent({
  components: {
    MsTabLanguage,
  },
  extends: BaseDetail,
  setup() {
    const { proxy }: any = getCurrentInstance(); // Instance của component
    const storeModule: any = useModuleNewsList(); // Cấu hình store
    const api = ref(newsListAPI); // Cấu hình api
    const subSystemCode = ref("news_list"); // Cấu hình phân quyền

    return {
      api,
      storeModule,
      subSystemCode,
    };
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/detailStyle" as style;
</style>