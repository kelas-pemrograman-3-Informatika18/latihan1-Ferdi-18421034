<template>
<div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img
      src="statics/icons/Untitl2.jpg"
      style="height: 400px; max-width:600xr"
      >
      <q-card-section>
        <div class="text-h6">CEO BY : FERDI & DEVI</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
        <div class="q-pa-md q-gutter-sm">
<q-btn color="positive" text-color="white" label="BELI TIKET" size="20px"
clickable
to="beli"/>
  </div>
  <div class="q-pa-md q-gutter-sm">
<q-btn icon="logout" color="negative" te
xt-color="white" label="LOGOUT" size="20px"
clickable
to="loginpage"/>
  </div>
      </q-card-section>
    </q-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      lorem: 'Selamat Datang di VIDI TIKET DAMRI kami menyediakan beberapa tiket untuk tujuan anda'
    }
  }
}
</script>
