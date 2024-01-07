<template>
  <section class="row justify-content-between align-items-center header">
    <div class="col-auto"><a href="#">Logo</a></div>
    <div class="col-auto d-flex align-items-center">
      <div class="d-inline-block avatar"></div>
      <div class="d-inline-block  nickname"><a href="#">{{upperCaseNickname}}</a></div>
    </div>
  </section>
</template>

<script>
import {mapState, mapGetters} from "pinia"
import {useAccountStore} from "@/stores/account.js"

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(useAccountStore, ['account']),
    ...mapGetters(useAccountStore, ['upperCaseNickname'])
  }
}
</script>

<style scoped>
.header {
  padding: 10px;
  border-top: 1px solid darkcyan;
  border-bottom: 1px solid darkcyan;
}

.avatar {
  height: 20px;
  width: 20px;
  background-color: darkcyan;
  border-radius: 10px;
}

a {
  color: darkcyan;
}
</style>