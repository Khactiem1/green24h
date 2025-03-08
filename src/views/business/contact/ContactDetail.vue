<template>
    <ms-dynamic-popup :width="1000" :height="700" :title="`${editMode ? $ms.commonFn.getEnumResource(editMode, 'FormState') : ''
        } ${$t('i18nContact.Title')}`" @beforeOpen="beforeOpen">
        <template v-slot:content="{ close }">
            <div ref="slot-content" class="form-content-popup">
                <div class="form-container pd-t-4">
                    <div class="form-detail">
                        <div class="form-group">
                            <ms-input :disabled="true" :label="$t('i18nContact.Detail.contact_title')"
                                v-model="model.contact_title"></ms-input>
                        </div>

                        <div class="form-group flex">
                            <div class="form-item_input">
                                <ms-input :disabled="true" :label="$t('i18nContact.Detail.customer_name')"
                                    v-model="model.customer_name">
                                </ms-input>
                            </div>
                            <div class="form-item_input">
                                <ms-input :disabled="true" :label="$t('i18nContact.Detail.customer_email')"
                                    v-model="model.customer_email">
                                </ms-input>
                            </div>
                            <div class="form-item_input">
                                <ms-combobox-v2 :label="$t('i18nContact.Detail.status')" valueField="dictionary_value"
                                    displayField="dictionary_name" :data="dataCombobox.dictionary"
                                    :initText="model.dictionary_name"
                                    @comboboxLoadData="(payload) => comboboxLoadData(payload, dictionaryAPI, dataCombobox, 'dictionary')"
                                    :buildFilter="filterNewType" queryMode="remote" :remoteFilter="true"
                                    v-model="model.status" v-model:display="model.dictionary_name">
                                </ms-combobox-v2>
                            </div>
                        </div>
                        <div class="form-group" style="padding-left: 0;">

                        </div>
                    </div>
                    <div class="form-detail form-group">
                        <ms-froala 
                            v-if="isShowFroala" 
                            :label="$t('i18nContact.Detail.content')"
                            v-model="model.content"
                            :pathImage="'/contact/content/image'"
                            :pathVideo="'/contact/content/video'" 
                        />
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
import useModuleContact from "@/stores/business/moduleContact";
import contactAPI from "@/apis/business/contactAPI";
import dictionaryAPI from "@/apis/system/dictionaryAPI";
import BaseDetail from "@/views/base/BaseDetail";
import MsFroala from '@/components/froala/MsFroala.vue';
import { useRemoteCombobox } from '@/setup/remoteCombobox';


export default defineComponent({
    mixins: [],
    components: {
        MsFroala,
    },
    extends: BaseDetail,
    setup() {
        const { proxy }: any = getCurrentInstance(); // Instance của component
        const storeModule: any = useModuleContact(); // Cấu hình store
        const api = ref(contactAPI); // Cấu hình api
        const subSystemCode = ref("customer_contact"); // Cấu hình phân quyền
        const isShowFroala = ref(false); // Cấu hình xong thì show text editor
        const { comboboxLoadData } = useRemoteCombobox();

        const dataCombobox = reactive({
            dictionary: [],
        });
        /**
        * Xử lý sau khi bind xong data
        * @override
        */
        const afterBindData = async () => {
            isShowFroala.value = true;
        };
        const filterNewType = (payload) => {
            const me: any = proxy;
            const filterNewsType = ["dictionary_list_code", "=", "TrangThaiXuLy"]; // fix cứng lọc theo LoaiTin trong danh mục từ điển của a Sang
            me.$ms.commonFn.concatFilter(payload, filterNewsType);
        };
        return {
            api,
            storeModule,
            subSystemCode,
            isShowFroala,
            dataCombobox,
            dictionaryAPI,
            afterBindData,
            filterNewType,
            comboboxLoadData
        };
    },
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/detailStyle" as style;

.form-item_input {
    width: 50%;

    &:nth-child(2),
    &:last-child {
        padding-left: 12px;
    }
}
</style>