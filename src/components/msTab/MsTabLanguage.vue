<template>
	<div class="tab-lang-contaner">
		<ms-tab
			:listTabItem="listTabItem"
			v-model="activeTab"
      @activeTab="handleActiveTab"
		>

		</ms-tab>
	</div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref, onBeforeMount } from 'vue';
import MsTab from '@/components/msTab/MsTab.vue';
import languageAPI from '@/apis/sys/languageAPI';
import fileAPI from '@/apis/file/fileAPI';
import memoryCache from '@/cache/memoryCache';

export default defineComponent({
  components: {
    MsTab,
  },
	props: {

	},
	setup() {
		const { proxy } = getCurrentInstance();
    const listTabItem = ref([]);
		const activeTab = ref('');

    /**
     * Xử lý onBeforeMount
     */
    onBeforeMount(async () => {
      getAllLangActive();
    });

    /**
		 * Thực hiện active tabItem
		 */
		const handleActiveTab = async (tab) => {
      proxy.$emit('activeTabLanguage', tab);
		};

    /**
     * Xử lý get all lang đang active về
     */
    const getAllLangActive = async () => {
      const me: any = proxy;
      let result = memoryCache.get('dataLanguageActive');
      if(!result){
        me.$ms.commonFn.mask();
        const payload = {
          PageIndex: 0,
          PageSize: 0,
          Columns: "*",
          Filter: JSON.stringify([["is_active","=",true]]),
          Sort: "sort ASC",
          CustomParam: {},
        };
        result = await languageAPI.getList(payload);
        me.$ms.commonFn.unmask();
        if(result?.Data?.PageData?.length){
          memoryCache.set('dataLanguageActive', result.Data.PageData);
          result = result.Data.PageData;
        }
      }
      if(result?.length){
        listTabItem.value = result.map(_ => {
          return {
            tabKey: _.language_code,
            title: _.language_name,
            icon: fileAPI.getFileViewUrl(_.icon),
            language_code: _.language_code,
            language_id: _.language_id,
            language_name: _.language_name,
          }
        });
        activeTab.value = listTabItem.value[0].tabKey;
        handleActiveTab(listTabItem.value[0]);
      }
    };

		return {
      listTabItem,
      activeTab,
      handleActiveTab,
		};
	},
});
</script>

<style lang="scss" scoped>

</style>
