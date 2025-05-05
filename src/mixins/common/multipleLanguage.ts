/**
 * Mixin để xử lý call method lớp cha
 */
export const mixinMultipleLanguage = {
  data(){
    return {
      /**
       * Ref tab language 
       */
      msTabLanguageRef: 'msTabLanguageRef',

      /**
       * Có là form đa ngôn ngữ hay không
       */
      isFormMultipleLanguage: false,

      /**
       * Cờ load xong ngôn ngữ
       */
      isAfterLoadLanguage: false,

      /**
       * Cờ load xong layout
       */
      isAfterLoadLayout: false,

      /**
       * Cấu hình các cột có đa ngôn ngữ
       */
      listColumnsMultipleLanguage: [],
    }
  },
  methods: {
    /**
     * Get ra danh sách language
     */
    listLanguage() {
      const me: any = this;
      if(me.$refs[me.msTabLanguageRef]?.listTabItem?.length){
        return me.$refs[me.msTabLanguageRef].listTabItem;
      }
      return [];
    },

    /**
     * Get ra lang đang active
     */
    languageActive() {
      const me: any = this;
      if(me.$refs[me.msTabLanguageRef]?.activeTab){
        return me.$refs[me.msTabLanguageRef].activeTab;
      }
      return '';
    },

    /**
     * Lấy ra ngôn ngữ mặc định của hệ thống
     */
    getLangDefault() {
      let lang = localStorage.getItem("Lang");
      if(lang){
        return lang;
      }
      return 'vi';
    },
  }
};
