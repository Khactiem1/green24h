<template>
  <ms-dynamic-popup
    :width="1000"
    :height="600"
    :title="$t('i18nCommon.MsFileUpload.ImageManagement')"
    @beforeOpen="beforeOpen"
  >
    <template v-slot:content="{ close }">
      <div ref="slot-content" class="form-content-popup">
        <div class="form-container pd-t-4">
          <div class="form-detail">
            <div v-if="listImageUrl?.length" class="lst-user">
              <div class="user-item flex justify-between" v-for="(item, index) in listImageUrl" :key="item">
                <div class="img"><img :src="item" alt=""> {{ item }}</div>
                <div @click="deleteRow(item, index, 'img')" :title="$t('i18nCommon.delete')" class="fa-solid fa-xmark color-icon-primary"></div>
              </div>
            </div>
            <div v-if="listVideoUrl?.length" class="lst-user">
              <div class="user-item flex justify-between" v-for="(item, index) in listVideoUrl" :key="item">
                <div class="img"><video :src="item" alt=""></video> {{ item }}</div>
                <div @click="deleteRow(item, index, 'video')" :title="$t('i18nCommon.delete')" class="fa-solid fa-xmark color-icon-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:footer="{ close }">
      <div class="form-action">
        <div class="form-action_container">
          <div class="form-action_item">
            
          </div>
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
import { defineComponent, getCurrentInstance, ref } from "vue";
import { showAlert } from '@/commons/globalMessage';
import fileAPI from '@/apis/file/fileAPI';

export default defineComponent({
  props: {},
  setup() {
    const { proxy }: any = getCurrentInstance();
    const editor = ref<any>({});
    const listImageUrl = ref([]);
    const listVideoUrl = ref([]);

    /**
     * Xử lý khi mở popup
     */
    const beforeOpen = (e: any) => {
      const me: any = proxy;
      setTimeout(() => {
        me.$ms.commonFn.focusFirstControl(me.$refs['slot-content']);
      }, 100);
      me._popup = me.$vfm.dynamicModals[me.$vfm.dynamicModals.length - 1];
      me._formParam = e.ref.params._rawValue
        ? e.ref.params._rawValue
        : e.ref.params;
      if(me._formParam?.editor){
        editor.value = me._formParam.editor;
        handleGetAllImages();
      }
    };

    /**
     * Xoá hình ảnh
     */
    const deleteRow = async (item, index, type: string) => {
      const me = proxy;
      const result = await showAlert(me.$t('i18nCommon.AskDeleteRecord'));
      if(result){
        removeImage(item, type);
        if(type == 'img'){
          listImageUrl.value.splice(index, 1);
        }
        else{
          listVideoUrl.value.splice(index, 1);
        }
        fileAPI.deleteFile(item.replace(fileAPI.getUrlViewFile(), ''));
      }
    };

    /**
     * Xóa một ảnh khỏi danh sách và cập nhật lại nội dung Froala
     */
    const removeImage = (imageUrl: string, type: string) => {
      if (!editor.value?.$refs?.froala) return;

      const refEditor = editor.value.$refs.froala;
      let htmlContent = refEditor.value; // Lấy nội dung hiện tại của Froala

      // Xóa ảnh khỏi nội dung HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, "text/html");

      doc.querySelectorAll(type).forEach((img) => {
        if (img.getAttribute("src") === imageUrl) {
          img.remove(); // Xóa ảnh khỏi HTML
        }
      });

      // Cập nhật lại nội dung Froala sau khi xóa ảnh
      const updatedHtml = doc.body.innerHTML;
      refEditor.model = updatedHtml;
      if(typeof refEditor?.updateValue === 'function'){
        refEditor.updateValue();
      }
      if(typeof refEditor?.updateModel === 'function'){
        refEditor.updateModel();
      }
    };

    /**
    * Get all hình ảnh ra
    */
    const handleGetAllImages = () => {
      if(editor.value?.$refs?.froala){
        const refEditor = editor.value.$refs?.froala;
        const htmlContent = refEditor.value;
        const imageUrls = extractImages(htmlContent as string, 'img');
        const videoUrls = extractImages(htmlContent as string, 'video');
        if(imageUrls?.length){
          listImageUrl.value = imageUrls;
        }
        if(videoUrls?.length){
          listVideoUrl.value = videoUrls;
        }
      }
    };

    /**
     * parse hình ảnh ra
     */
    const extractImages = (htmlContent: string, type: string) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');
      const images = doc.querySelectorAll(type);
      return Array.from(images).map((img: any) => img.src);
    };

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
      listImageUrl,
      listVideoUrl,
      deleteRow,
      beforeOpen,
    };
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/detailStyle" as style;
.lst-user{
  margin-bottom: 8px;
  width: 100%;
}
.user-item{
  border: 1px solid var(--primary__color);
  width: 100%;
  border-radius: 2px;
  background-color: #00666824;
  color: var(--primary__color);;
  padding: 6px;
  margin: 6px 0;
  align-items: center;
  gap: 12px;
  .color-icon-primary{
    margin-right: 4px;
    cursor: pointer;
  }
  .img{
    height: 50px;
    display: flex;
    align-items: center;
    img,video{
      height: 100%;
      margin-right: 12px;
    }
  }
}
</style>
