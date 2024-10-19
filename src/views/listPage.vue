<template>
  <v-container>
    <!-- 리스트 출력 -->
    <v-row>
      <v-col
        v-for="result in resultList"
        :key="result.id"
        cols="12"
        sm="6"
        md="4"
      > <!--결과 값들을 resultList에 담아서 출력 -->
        <v-card class="mb-4">
          <v-card-title>ID: {{ result.id }}</v-card-title>
          <v-card-actions>
            <v-btn
              :href="`/resultPage/${result.id}`"
              color="primary"
              text
            >
              자세히 보기
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- 페이지네이션 -->
    <div class="pagination">
      <v-btn 
        v-if="currentPage > 1"
        @click="fetchList(currentPage - 1)"
        color="primary"
      >
        Previous
      </v-btn>

      <span>Page {{ currentPage }} of {{ totalPages }}</span>

      <v-btn 
        v-if="currentPage < totalPages"
        @click="fetchList(currentPage + 1)"
        color="primary"
      >
        Next
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'listPage',
  data() {
    return {
      resultList: [], // 초기에는 빈 배열로 설정
      currentPage: 1,  // 현재 페이지 번호
      totalPages: 1    // 전체 페이지 수
    };
  },
  mounted() {
    // 컴포넌트가 마운트되면 url에서 검색어를 가져옴
    this.fetchList(this.currentPage, this.$route.query.search || '');
  },
  watch: {
    // url 변경될 때마다 첫 페이지로 이동하여 데이터 가져옴
    '$route.query.search'(newSearch){
      this.currentPage = 1;
      this. fetchList(this.currentPage, newSearch);
    }
  },
  methods: {
    fetchList(page, searchKeyWord) {
      let url = `/resultlist?page=${page}`;
      if (searchKeyWord) {
        url += `&search=${searchKeyWord}`;
      }

      axios.get(url)
        .then(response => {
          this.resultList = response.data.items; // 페이징된 데이터 항목들
          this.totalPages = response.data.totalPages; // 전체 페이지 수
        })
        .catch(error => {
          console.error('Error fetching list:', error);
        });
    }
  },
};
</script>

<style scoped>
/* 페이지네이션 스타일 */
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination v-btn {
  margin: 0 5px;
}

.pagination span {
  margin: 0 10px;
}

/* 카드 간의 간격 */
.v-card {
  margin-bottom: 20px;
}
</style>
