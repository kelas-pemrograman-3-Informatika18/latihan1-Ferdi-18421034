<template>
  <q-page class="bg-black">
    <div class="row">
      <q-card class="fixed-center col-md-4 col-xs-12 bg-orange" flat>
   <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Username *"
        label-color="orange"
        bg-color="white"
        lazy-rules :rules="[ val => val && val.length > 0 || 'wajib di isi']"
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

      <q-input
        filled
        type="int"
        v-model="gmail"
        label="Gmail *"
        label-color="orange"
        bg-color="white"
        lazy-rules :rules="[val => val && val.length > 0 || 'wajib di isi']"
      >
      <template v-slot:prepend>
        <q-icon name="email" />
      </template>
      </q-input>

      <div>
        <q-btn label="Register" type="submit" color="indigo-8"/>
        <q-btn label="Login" type="submit" color="white" flat class="q-ml-sm" />
        <q-btn label="Reset" type="reset" color="white" flat class="q-ml-sm" />
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
      name: null,
      password: null,
      gmail: null,
      isPwd: true

    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('/user/registerr', {
        name: this.name,
        password: this.password,
        gmail: this.gmail
      }).then((res) => {
        if (res.data.sukses) {
          this.$q.notify({
            type: 'positive',
            message: res.data.pesan
          })
          this.$router.push({ name: 'login' })
        } else {
          this.$q.notify({
            type: 'positive',
            message: res.data.pesan
          })
        }
      })
    },
    onReset () {
      this.name = null
      this.password = null
      this.gmail = null
    }
  }
}
</script>
