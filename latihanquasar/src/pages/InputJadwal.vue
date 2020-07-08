<template>
<q-page padding>
<q-card flat>
<q-card-section class="q-gutter-md">
<div class="text-h5">Input Jadwal</div>
<q-form
  @submit="onSubmit"
  @reset="onReset"
  class="q-mt-lg"
>
<div class="q-gutter-md">
<q-input label="Waktu" v-model="waktu" filled="bg-white" :rules="[ val => val && val.length > 0 || 'Tolong isi waktu anda']"></q-input>
<q-input label="Judul Kegiatan" v-model="judul" filled="bg-white" :rules="[ val => val && val.length > 0 || 'Tolong isi judul anda']"></q-input>
<q-input label="Keterangan" v-model="keterangan" filled="bg-white" :rules="[ val => val && val.length > 0 || 'Tolong isi keterangan anda']"></q-input>
<q-btn type="submit" label="Input" color="blue" unelevated></q-btn>
<q-btn type="reset" label="Reset" color="orange" unelevated></q-btn>
</div>
</q-form>
</q-card-section>
</q-card>
</q-page>
</template>
<script>
export default {
  data () {
    return {
      waktu: null,
      judul: null,
      keterangan: null
    }
  },
  methods: {
    onReset () {
      this.waktu = null
      this.judul = null
      this.keterangan = null
    },
    onSubmit () {
      this.$q.notify({
        type: 'positive',
        message: 'Selamat Anda Berhasil Input Jadwal'
      })
      this.$router.push({ name: 'dashboard' })
    }
  }
}
</script>
