<template>
<q-page class="bg-blue-1">
    <img src="statics/icons/Untitl2.jpg"
    style="height: 600px"
    >
<div class ="row">
<q-card class="fixed-center col-md-4 col-xs-12 bg-white" flat>
<q-card-section>
<div class="text-h6 q-pb-md">
Login Account
</div>
<q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="username"
        label="Username"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Tolong ketik username']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Password"
        lazy-rules
        :rules="[
          val => val !== null && val > 0 || 'Password tidak boleh kosong'
        ]"
      />
      <div>
        <q-btn label="Masuk" type="submit" color="positive"/>
        <q-btn label="Hapus" type="reset" color="negative" flat class="q-ml-sm\" />
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
      if (this.username === 'ferdi' && this.password === '18421034') {
        this.$q.notify({
          type: 'positive',
          message: 'Selamat Anda Berhasil Login'
        })
        this.$router.push('/home')
      } else {
        this.$q.notify({
          type: 'negative',
          message: 'Gagal Login, username/password salah'
        })
      }
    },
    onReset () {
      this.username = null
      this.password = null
    }
  }
}
</script>
