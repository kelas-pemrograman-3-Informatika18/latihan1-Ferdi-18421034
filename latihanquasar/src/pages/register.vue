<template>
<q-page>
Halaman Register
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
        label="Buat Password"
        lazy-rules
        :rules="[
          val => val !== null && val > 0 || 'Password tidak boleh kosong'
        ]"
      />

      <q-input
        filled
        label="Masukan Alamat Anda"
        lazy-rules
        :rules="[
          val => val !== null && val > 0 || 'Alamat tidak boleh kosong'
        ]"
      />

       <div class="q-pa-md q-gutter-sm">
    <div class="q-gutter-sm">
      <q-radio dense v-model="shape" val="Sudah Menikah" label="Sudah Menikah" />
      <q-radio dense v-model="shape" val="Belum Menikah" label="Belum Menikah" />
    </div>

    <div class="q-px-sm q-pt-sm">
      Anda Ternyata: <strong>{{ shape }}</strong>
    </div>
  </div>

  <q-input
        filled
        label="Masukan Nomor Telepon Anda"
        lazy-rules
        :rules="[
          val => val !== null && val > 0 || 'Nomor Tidak boleh kosong'
        ]"
      />

      <div>
        <q-btn label="Daftar" type="submit" color="purple"/>
        <q-btn label="Reset" type="reset" color="red" />
      </div>
    </q-form>
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
      console.log('ini fungsi submit')
    },
    onReset () {
      console.log('ini fungsi reset')
    }
  }
}
</script>
