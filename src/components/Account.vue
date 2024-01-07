<template>
  <div class="row ps-3 align-content-start">
    <div class="col-8">
      <h2>My Account</h2>
    </div>

    <div class="col-4 text-end">
      <button class="btn btn-warning btn-sm"  @click="openForm">Edit</button>
    </div>

    <div class="col-12">
      FullName: {{account.firstName + account.lastName}}
    </div>

    <div class="col-12">
      Nickname: {{upperCaseNickname}}
    </div>

    <div class="col-12">
      About: {{account.about}}
    </div>

    <account-form v-model="showForm"/>
  </div>
</template>

<script>
import AccountForm from "@/components/AccountForm.vue"
import {mapState, mapGetters} from "pinia"
import {useAccountStore} from "@/stores/account.js"

export default {
  components: { AccountForm },
  data() {
    return {
      showForm: false,
    }
  },
  methods: {
    openForm() {
      this.showForm = true
    }
  },
  computed:{
    ...mapState(useAccountStore, ['account']),
    ...mapGetters(useAccountStore, ['upperCaseNickname']),
  }
}
</script>

