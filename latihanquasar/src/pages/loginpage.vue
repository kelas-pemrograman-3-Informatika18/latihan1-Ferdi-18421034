<template>
<q-page class="bg-blue-1">
<div class ="row">
<q-card class="fixed-center col-md-4 col-xs-12 bg-white" flat>
<q-card-section>
<div class="text-h6 q-pb-md">
Halaman Login
</div>
<q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="username"
        label="Username Anda"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Tolong ketik username']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="password anda"
        lazy-rules
        :rules="[
          val => val !== null && val > 0 || 'Password tidak boleh kosong'
        ]"
      />
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        <q-btn label="Register" type="submit" color="primary" flat class="q-ml-sm"
        clickable
        to="register"/>
      </div>
    </q-form>
    </q-card-section>
    </q-card>
    </div>
</q-page>
</template>
<script>
export default {
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('user/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.data.sukses) {
          this.$router.push({ name: 'dashboard' })
        } else {
          this.$q.notify({
            type: 'negative',
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
