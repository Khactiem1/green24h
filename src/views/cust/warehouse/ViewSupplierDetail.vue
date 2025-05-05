<template>
    <ms-dynamic-popup
        :width="1200"
        :height="800"
        :title="$t('i18nWarehouse.Detail.supplier')"
        @beforeOpen="beforeOpen"
    >
        <template v-slot:content="{ close }">
        <div ref="slot-content" class="form-content-popup">
            <div class="form-container">
            <div class="table-function sticky">
                <div class="form-fix">
                <div class="action-left flex">
                    <div style="width: 200px">
                    <ms-input
                        @input="debounceSearch"
                        v-model="searchText"
                        :placeholder="$t('i18nCommon.search')"
                    >
                    </ms-input>
                    </div>
                </div>
                <list-condition-filter
                    :grid="$refs[viewRef]"
                    @loadData="loadData"
                ></list-condition-filter>
                </div>
            </div>
            <ms-grid-viewer
                :ref="viewRef"
                :columns="columns"
                :data="storeModule.items"
                :pageTotal="storeModule.total"
                :loading="storeModule.loading"
                :idField="'supplier_id'"
                :gridInfo="gridInfo"
                :loadData="loadData"
                :showAction="false"
                :multiple="false"
            >
            </ms-grid-viewer>
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
            </div>
        </div>
        </template>
    </ms-dynamic-popup>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref, reactive } from "vue";
import MsGridViewer from "@/components/msGridViewer/MsGridViewer.vue";
import ListConditionFilter from "@/components/msGridViewer/ListConditionFilter.vue";
import BaseList from "@/views/base/BaseList";
import useModuleSupplier from "@/stores/cust/moduleSupplier";
import supplierAPI from "@/apis/cust/supplierAPI";

export default defineComponent({
components: {
    MsGridViewer,
    ListConditionFilter,
},
extends: BaseList,
setup() {
    const { proxy }: any = getCurrentInstance(); // Instance của component
    const storeModule: any = useModuleSupplier(); // Cấu hình store
    const api = ref(supplierAPI); // Cấu hình api

    /**
     * Xử lý khi mở popup
     * @override
     */
    const beforeOpen = (e: any) => {
        const me: any = proxy;
        me._popup = me.$vfm.dynamicModals[me.$vfm.dynamicModals.length - 1];
        me._formParam = e.ref.params._rawValue
            ? e.ref.params._rawValue
            : e.ref.params;
        if(me._formParam?.dataRow){

        }
    };

    /**
     * Xử lý custom tham số load data trước khi call lên serve lấy dữ liệu
     * @override
     */
    const customParamLoadData = async (param: any) => {
        const me = proxy;
        const filterWarehouseType = [
            "warehouse_id", 
            "=", 
            me._formParam.dataRow?.warehouse_id ? me._formParam.dataRow.warehouse_id : null
        ];
        if(!param.CustomParam){
            param.CustomParam = {};
        }
        param.CustomParam.ViewName = '"CUST".cust_view_get_supplier_warehouse';
        me.$ms.commonFn.concatFilter(param, filterWarehouseType);
    };

    /**
     * Layout
     */
    const columns = reactive(
        [
            {
                "lock": false,
                "width": "200",
                "header": "i18nSupplier.Detail.supplier_name",
                "dataField": "supplier_name",
                "formatType": 12,
                "headerCustom": "",
                "visible": true
            },
            {
                "lock": false,
                "width": "160",
                "header": "i18nSupplier.Detail.phone",
                "dataField": "phone",
                "formatType": 12,
                "headerCustom": "",
                "visible": true
            },
            {
                "lock": false,
                "width": "160",
                "header": "i18nSupplier.Detail.email",
                "dataField": "email",
                "formatType": 12,
                "headerCustom": "",
                "visible": true
            },
            {
                "lock": false,
                "width": "160",
                "header": "i18nSupplier.Detail.province_name",
                "dataField": "province_name",
                "formatType": 12,
                "headerCustom": "",
                "visible": true
            },
            {
                "lock": false,
                "width": "160",
                "header": "i18nSupplier.Detail.district_name",
                "dataField": "district_name",
                "formatType": 12,
                "headerCustom": "",
                "visible": true
            },
            {
                "lock": false,
                "width": "160",
                "header": "i18nSupplier.Detail.ward_name",
                "dataField": "ward_name",
                "formatType": 12,
                "headerCustom": "",
                "visible": true
            },
            {
                "lock": false,
                "width": "160",
                "header": "i18nSupplier.Detail.address",
                "dataField": "address",
                "formatType": 12,
                "headerCustom": "",
                "visible": true
            },
        ]
    );

    /**
     * Đóng form
     */
    const hide = () => {
        try {
            const me: any = proxy;
            me._popup.value = false;
            me.$nextTick(() => {
            delete me._popup;
            });
        } catch (ex) {
            console.error(ex);
        }
    };

    return {
        api,
        columns,
        storeModule,
        beforeOpen,
        customParamLoadData,
    };
},
});
</script>

<style lang="scss" scoped>
.form-content-popup{
    height: 100%;
}
.form-container{
    padding: 0 16px 0 0;
    height: 100%;
    display: flex;
    flex-direction: column;
}
:deep(.ms-grid-viewer){
    flex: 1;
}
</style>
  