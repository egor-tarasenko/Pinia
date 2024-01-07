<template>
  <div class="modal d-block" v-if="modelValue">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Account-form</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="close" @click="visible = false"></button>
        </div>
        <div class="modal-body">
          <div class="row pb-2">
            <div class="col">
              <input type="text" class="form-control" placeholder="First name" v-model="account.firstName">
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Last name" v-model="account.lastName">
            </div>
          </div>

          <div class="row pd-2">
            <div class="col">
              <input type="text" class="form-control" placeholder="Nickname" v-model="account.nickname">
            </div>
          </div>
          <div class="row pd-2">
            <div class="col">
              <input type="text" class="form-control" placeholder="About" v-model="account.about">
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="visible = false">Close</button>
            <button type="button" class="btn btn-primary">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "pinia"
import {useAccountStore} from "@/stores/account.js"

export default {
  data() {
    return {}
  },
  props:{
    modelValue: {
      required: true,
    },
  },
  computed: {
    ...mapState(useAccountStore, ['account']),
    visible: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}

</script>