<template>
  <q-page padding>
    <q-card flat>
      <q-card-section class="q-gutter-model">
        <div class="text-h5">Pemesanan Tiket</div>
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-mt-lg"
       >
          <div class="q-gutter-md">
            <q-input label="Nama" v-model="Nama" filled :rules="[ val => val && val.length > 0 || 'wajib di isi']"></q-input>
            <q-input label="No Hp" v-model="no_hp" filled :rules="[ val => val && val.length > 0 || 'wajib di isi']"></q-input>
            <q-input label="Rute" v-model="rute" filled :rules="[ val => val && val.length > 0 || 'wajib di isi']"></q-input>
            <q-input label="Keberangkatan" v-model="keberangkatan" filled :rules="[ val => val && val.length > 0 || 'wajib di  isi']"></q-input>
            <q-input label="Kelas Damri" v-model="kelas_damri" filled :rules="[ val => val && val.length > 0 || 'wajib di isi']"></q-input>
            <q-input label="Harga Tiket" v-model="harga_tiket" filled :rules="[ val => val && val.length > 0 || 'wajib di isi']"></q-input>
            <q-input label="jumlah Kursi" v-model="jumlah_kursi" filled :rules="[ val => val && val.length > 0 || 'wajib di isi']"></q-input>
            <q-input label="Total" v-model="total" filled :rules="[ val => val && val.length > 0 || 'wajib di isi']"></q-input>
          </div>
          <div class="q-px-sm">
      Pilih Metode Pembayaran
    </div>
      <div class="q-pa-md">
      <div class="q-gutter-sm">
      <q-radio v-model="pembayaran" val="TF" label="Transfer BANK" />
      <q-radio v-model="pembayaran" val="ATM" label="ATM" />
      <q-radio v-model="pembayaran" val="indo/alfa" label="indomart/Alfamart" />
    </div>
    </div>
    <q-btn to="/home" type="submit" label="Input" color="blue" unelevated></q-btn>
    <q-btn type="reset" label="Reset" color="blue" flat unelevated></q-btn>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      Nama: null,
      no_hp: null,
      rute: null,
      keberangkatan: null,
      kelas_damri: null,
      harga_tiket: null,
      jumlah_kursi: null,
      total: null,
      pembayaran: '',

      accept: false
    }
  },
  methods: {
    onReset () {
      this.Nama = null
      this.no_hp = null
      this.rute = null
      this.keberangkatan = null
      this.kelas_damri = null
      this.jumlah_kursi = null
      this.total = null
    },
    onSubmit () {
      this.$q.notify({
        type: 'positive',
        message: 'Berhasil Transaksi'
      })
      this.$router.push({ name: 'dashboard' })
    }
  }
}
</script>
