<template>
  <div class="page-container">
    <div class="search-container">
      <input type="text" v-model="searchText" class="custom-input" />
      <button @click="search" class="custom-btn">검색</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: ''
    };
  },
  methods: {
    search() {
      this.$router.push({name:'listPage', query:{ search: this.searchText} });
    }
  }
};
</script>

<style scoped>
.page-container {
  display: flex;
  justify-content: flex-end; /* 페이지의 오른쪽으로 정렬 */
  padding: 20px; /* 선택적으로 패딩을 추가하여 여백 조정 */
}

.search-container {
  display: flex;
  align-items: center; /* 수직 가운데 정렬 */
}

.custom-input {
  margin-right: 10px; /* 입력 필드와 버튼 사이의 간격 */
  border: 1px solid black; /* 테두리를 검정색으로 설정 */
  padding: 5px;
  border-radius: 4px;
}

.custom-btn {
  padding: 5px 10px;
  /*background-color: #3498db; 통일성 있는 버튼 색상 (파란색) */
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.custom-btn:hover {
  background-color: grey;
  /*background-color: #2980b9;호버 시 버튼 색상 변화 */
}
</style>
