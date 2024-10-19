<template>
  <div>
    <h1>Result Page</h1>
    <!-- 이미지가 로드되면 출력 -->
    <v-img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image"></v-img>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      imageUrl: null,  // 이미지 URL을 저장
    };
  },
  async created() {
    const id = this.$route.params.id;  // URL에서 전달받은 id
    if (id) {
      try {
        // id를 사용하여 서버에서 이미지 데이터를 요청
        const response = await axios.get(`/api/v1/detect/${id}`);
        
        // 이미지 URL 저장
        this.imageUrl = response.data.imageUrl;  
      } catch (error) {
        console.error('이미지 가져오기 실패:', error);
      }
    }
  },
};
</script>

<style scoped>

</style>