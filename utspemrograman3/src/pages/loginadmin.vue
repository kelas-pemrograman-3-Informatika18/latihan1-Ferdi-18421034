<template>
  <q-page class="bg-black">
    <div class="row">
      <q-card class="fixed-center col-md-4 col-xs-12 bg-orange" flat>
        <div class="q-pa-md q-gutter-y-sm" align="center">
        <q-toolbar class="bg-indigo-8 text-white" >
        <q-toolbar-title>
        ADMIN SILAHKAN LOGIN
        </q-toolbar-title>
        </q-toolbar>
        </div>
   <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        q-icon="people"
        filled
        v-model="username"
        label="Username *"
        label-color="orange"
        bg-color="white"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'wajib di isi']"
      >
      <template v-slot:prepend>
        <q-icon name="person" />
      </template>
      </q-input>

      <q-input
        v-model="password"
        label="Password *"
        label-color="orange"
        bg-color="white"
        lazy-rules :rules="[ val => val && val.length > 0 || 'wajib di isi']"
        filled :type="isPwd ? 'password' : 'text'">
      <template v-slot:prepend>
        <q-icon name="vpn_key" />
      </template>
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
      </q-input>

      <div>
        <div class="q-pa-md q-gutter-y-sm" align="center">
        <q-btn label="login" type="login" color="indigo-8" />
        <q-btn label="Reset" type="reset" color="white" flat class="q-ml-sm" />
        </div>
      </div>
    </q-form>
      </q-card>
    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      username: null,
      password: null,
      isPwd: true

    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('/admin/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.data.sukses) {
          this.$router.push({ name: 'dashboard' })
        } else {
          this.$q.notify({
            type: 'positive',
            message: res.data.pesan
          })
        }
      })
    },
    onReset () {
      this.username = null
      this.password = null
    }
  }
}
</script>
