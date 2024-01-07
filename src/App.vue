<template>
  <div class="container mt-2">
    <div class="row">
      <div class="col">
        <the-header/>
      </div>
    </div>
  </div>

  <div class="container d-flex mt-3">
    <div class="col-3">
      <the-sidebar/>
    </div>

    <div class="col-9">
     <account/>
    </div>
  </div>

  <div class="container mt-2">
    <div class="col">
      <the-footer/>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"
import TheSidebar from "@/components/TheSidebar.vue"
import Account from "@/components/Account.vue"
import TheFooter from "@/components/TheFooter.vue"

export default {
  components: {TheHeader, TheSidebar, Account, TheFooter,},

  data() {
    return{}
  },
}

</script>
