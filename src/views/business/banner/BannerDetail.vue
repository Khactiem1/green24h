<template>
  <ms-dynamic-popup
    :width="600"
    :height="520"
    :title="`${
      editMode ? $ms.commonFn.getEnumResource(editMode, 'FormState') : ''
    } ${$t('i18nBanner.Title')}`"
    @beforeOpen="beforeOpen"
  >
    <template v-slot:content="{ close }">
      <div ref="slot-content" class="form-content-popup">
        <div class="form-container mt-4">
          <div class="form-detail">
            <div class="flex form-group">
              <div class="form-item_input">
                <ms-input
                  :maxLength="100"
                  :rules="[{ name: 'required' }]"
                  :label="$t('i18nBanner.Detail.banner_name')"
                  v-model="model.banner_name"
                ></ms-input>
              </div>
              <div class="form-item_input">
                <ms-number
                  :label="$t('i18nBanner.Detail.sort')"
                  v-model="model.sort"
                ></ms-number>
              </div>
            </div>
            <div class="form-group">
              <ms-input
                :maxLength="255"
                :rules="[{ name: 'required' }]"
                :label="$t('i18nBanner.Detail.url')"
                v-model="model.url"
              ></ms-input>
            </div>
          </div>
          <div class="form-detail flex form-select-option">
            <div class="form-item select-image">
              <label class="select-title">{{
                $t("i18nBanner.Detail.picture")
              }} (1750px - 438px)</label>
              <ms-file-image
                v-model="model.picture"
                :path="'/banner/picture'"
              ></ms-file-image>
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
            <ms-button @click="save" class="primary">
              {{ $t("i18nCommon.crud.save") }}
            </ms-button>
          </div>
        </div>
      </div>
    </template>
  </ms-dynamic-popup>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, reactive, ref } from "vue";
import useModuleBanner from "@/stores/business/moduleBanner";
import bannerAPI from "@/apis/business/bannerAPI";
import BaseDetail from "@/views/base/BaseDetail";
import MsFileImage from "@/components/file/MsFileImage.vue";

export default defineComponent({
  mixins: [],
  components: {
    MsFileImage,
  },
  extends: BaseDetail,
  setup() {
    const { proxy }: any = getCurrentInstance(); // Instance của component
    const storeModule: any = useModuleBanner(); // Cấu hình store
    const api = ref(bannerAPI); // Cấu hình api
    const subSystemCode = ref("banner"); // Cấu hình phân quyền

    /**
     * Xử lý dữ liệu trước khi binding
     * @override
     */
    const beforeBindData = async () => {
      const me: any = proxy;
      await me.super("beforeBindData", BaseDetail);
    };

    return {
      api,
      storeModule,
      subSystemCode,
      beforeBindData,
    };
  },
});
</script>

<style lang="scss" scoped>
.select-image {
  .select-title {
    font-family: "notosans-semibold";
    margin-bottom: 8px;
    font-size: 12px;
    white-space: nowrap;
    display: block;
  }
}
.form-item_input {
  width: 50%;
  &:last-child {
    padding-left: 12px;
  }
}
:deep(.data-input) {
  width: 100%;
}
.form-detail {
  padding-bottom: 0;
}
</style>