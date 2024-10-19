<template>
  <v-container class="pa-8" fluid>
    <!-- 파일 선택 -->
    <v-card outlined>
      <v-card-title>이미지 파일 업로드</v-card-title>
      <v-card-text>
        <v-file-input
          v-model="file"
          accept="image/*"
          label="이미지 파일을 선택하세요"
          prepend-icon="mdi-file-image"
          outlined
          dense
        ></v-file-input>
      </v-card-text>
      
      <!-- 전송 버튼 -->
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!file"
          @click="uploadFile"
          color="primary"
          elevation="2"
        >
          파일 전송
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      file: null,  // 선택된 파일을 저장
    };
  },
  methods: {
    async uploadFile() {
      if (this.file) {
        const formData = new FormData();
        formData.append('file', this.file);  // FormData에 파일 추가

        try {
          const response = await axios.post('/api/v1/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',  // 파일 전송 시 필요한 헤더
            },
          });

          const id = response.data.id;  // 서버에서 받은 id

          // ResultPage로 이동하면서 id를 넘김
          this.$router.push({ name: 'resultPage', params: { id } });

        } catch (error) {
          // 오류 처리
          console.error('파일 업로드 실패:', error);
        }
      }
    },
  },
};
</script>

<style scoped>
.v-file-input {
  margin-bottom: 16px;
}
.v-btn {
  min-width: 120px;
}
</style>