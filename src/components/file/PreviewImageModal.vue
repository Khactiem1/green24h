<template>
  <div class="preview-modal" v-if="file">
    <div class="modal-overlay" @click="onCancel"></div>
    <div class="modal-content">
      <div class="crop-container" :style="style">
        <cropper
          ref="cropper"
          class="cropper"
          :src="fileUrl"
          :auto-zoom="autoZoom"
          @ready="onCropperReady"
          @change="onCropChange"
        />
        <!-- :stencil-props="{
            aspectRatio: aspectRatio,
          }" -->
          <!-- :stencil-size="{
            width: maxWidth,
            height: maxWidth / aspectRatio
          }" -->
      </div>
      <!-- <div class="flex info-image">{{cropSize.width}}px * {{cropSize.height}}px</div> -->
      <div v-if="isInitCropSize" class="flex flex-center info-image">
        <div class="flex" style="width: 100px;">
          <ms-number v-model="cropSizeModel.width" @change="changeSize" :max="cropSize.width ? cropSize.width : 100000" :min="0"></ms-number>
          <span>px</span>
        </div>
        *
        <div class="flex" style="width: 100px;">
          <ms-number v-model="cropSizeModel.height" @change="changeSize" :max="cropSize.height ? cropSize.height : 100000" :min="0"></ms-number>
          <span>px</span>
        </div>
      </div>
      <div class="modal-actions">
        <ms-button style="margin-right: 12px;" @click="onCancel">{{ $t('i18nCommon.Close') }}</ms-button>
        <ms-button class="primary" @click="onConfirm">{{ $t('i18nCommon.crud.save') }}</ms-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watch, defineComponent, getCurrentInstance, toRefs } from 'vue';
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';

export default defineComponent({
  components: {
    Cropper,
  },
  props: {
    file: { type: File, required: true },
    aspectRatio: { type: Number, default: 1/1 }, // Tỷ lệ ảnh mong muốn (1:1, 16:9,...)
    maxWidth: { type: Number, default: 1024 }, // Kích thước nén tối đa
    maxSize: { type: Number, default: 800 * 1024 }, // Dung lượng tối đa cho phép (ví dụ: 800kb)
    autoZoom: { type: Boolean, default: false }, // autoZoom
  },
  setup(props){
    const { proxy } = getCurrentInstance();
    const { file }: any = toRefs(props);
    const cropper = ref(null);
    const fileUrl = ref('');
    const cropSize = ref({ width: 0, height: 0 });
    const cropSizeModel = ref({ width: 0, height: 0 });
    const isInitCropSize = ref(false);

    /**
     * Max ảnh có thể hiển thị
     */
    const style = {
      maxWidth: `${window.innerWidth - 40}px`,
      maxHeight: `${window.innerHeight - 127}px`,
    };

    /**
     * Xử lý crop full ảnh
     */
    const onCropperReady = () => {
      const me: any = proxy;
      const cropper = me.$refs.cropper;
      if (cropper) {
        const { image } = cropper.getResult();
        // Đặt vùng crop bằng toàn bộ kích thước ảnh
        if(image){
          cropper.setCoordinates({
            x: 0,
            y: 0,
            width: image.width,
            height: image.height,
          });
        }
      }
    };

    /**
     * Thay đổi kích thước chọn ảnh
     */
    const onCropChange = () => {
      const me: any = proxy;
      const cropper = me.$refs.cropper;
      const { coordinates, image } = cropper.getResult();
      cropSizeModel.value.width = Math.round(coordinates.width);
      cropSizeModel.value.height = Math.round(coordinates.height);
      if(!isInitCropSize.value){
        cropSize.value.width = Math.round(image.width);
        cropSize.value.height = Math.round(image.height);
        isInitCropSize.value = true;
      }
    };

    /**
     * Thay đổi kích thước ảnh trên ms-number
     */
    const changeSize = () => {
      const me: any = proxy;
      const cropperInstance = me.$refs.cropper;
      if (cropperInstance && cropSizeModel.value.width > 0 && cropSizeModel.value.height > 0) {
        cropperInstance.setCoordinates({
          x: 0,
          y: 0,
          width: cropSizeModel.value.width,
          height: cropSizeModel.value.height,
        });
      }
    };

    // Tạo URL từ file
    watch(
      () => file,
      (newFile) => {
        if (newFile) {
          fileUrl.value = URL.createObjectURL(file.value);
        }
      },
      { immediate: true }
    );

    // Hủy chỉnh sửa
    const onCancel = () => {
      const me: any = proxy;
      if(fileUrl.value){
        URL.revokeObjectURL(fileUrl.value); // Giải phóng bộ nhớ
      }
      me.$emit('cancel');
    };

    // Xác nhận chỉnh sửa và xử lý ảnh
    const onConfirm = async () => {
      const me: any = proxy;
      const canvas = cropper.value.getCanvas();

      if (canvas) {
        const mimeType = file.value.type; // Lấy mime type từ file gốc

        // Nén file đến khi đạt dung lượng yêu cầu
        const blob = await compressImage(canvas, mimeType, me.maxSize);

        // Tạo file mới với mime type gốc
        const processedFile = new File([blob], file.value.name, { type: mimeType });
        if(fileUrl.value){
          URL.revokeObjectURL(fileUrl.value); // Giải phóng bộ nhớ
        }
        me.$emit('confirm', processedFile);
      }
    };

    const compressImage = async (canvas: HTMLCanvasElement, mimeType: string, maxSize: number): Promise<Blob> => {
      let quality = 1.0; // Bắt đầu với chất lượng nén 100%
      let blob: Blob;

      do {
        blob = await new Promise<Blob>((resolve) => canvas.toBlob(resolve, mimeType, quality));
        quality -= 0.1; // Giảm dần chất lượng nén mỗi lần lặp
      } while (blob.size > maxSize && quality > 0); // Lặp lại nếu file vẫn quá lớn và còn có thể giảm chất lượng

      return blob;
    };

    return {
      style,
      fileUrl,
      cropSize,
      cropSizeModel,
      cropper,
      isInitCropSize,
      changeSize,
      onCancel,
      onConfirm,
      onCropChange,
      onCropperReady,
    }
  }
});
</script>

<style lang="scss" scoped>
.preview-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
}

.modal-content {
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  z-index: 1001;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.crop-container {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  .cropper{
    width: 100%;
    height: 100%;
    background: #DDD;
  }
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 6px;
}
.info-image{
  font-weight: 700;
  padding: 6px 0;
  align-items: center;
  justify-content: center;
  gap: 8px;
  :deep(.input){
    height: 28px;
  }
  span{
    text-align: end;
    display: inline-block;
    padding: 5px 2px;
  }
}
</style>
