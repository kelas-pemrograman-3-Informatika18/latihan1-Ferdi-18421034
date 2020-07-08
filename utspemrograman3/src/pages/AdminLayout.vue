<template>
  <q-layout view="lHh Lpr lFf">
    <q-header unelevated>
      <q-toolbar class="bg-black">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          VIDI WEBSITE
        </q-toolbar-title>
        <q-btn label="About" color="blue" @click="toolbar = true" />
         <q-dialog v-model="toolbar" parsistent transition-show="flip-down" transition-hide="flip-up">
        <q-card>
        <q-toolbar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          <q-toolbar-title><span class="text-weight-bold">Vidi</span> Website</q-toolbar-title>
          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>
        <q-card-section>
         Website ini dibuat untuk mempermudah anda dalam pemesanan tiket damri secara online
         serta memberikan kenyamanan dan fasilitas yang sesuai dengan kebutuhan anda
        </q-card-section>
      </q-card>
    </q-dialog>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu
        </q-item-label>
        <q-item clickable active-class="active" exact v-ripple :to="{ name  : 'dashboard'}">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

            <q-item-section>
              Home
            </q-item-section>
          </q-item>
          <q-item clickable active-class="active" exact v-ripple :to="{ name: 'rute_hargatiket'}">
          <q-item-section avatar>
            <q-icon name="directions_bus" />
          </q-item-section>

            <q-item-section>
              Rute dan Jadwal Keberangkatan
            </q-item-section>
          </q-item>
          <q-item clickable active-class="active" exact v-ripple :to="{ name: 'pemesanan'}">
          <q-item-section avatar>
            <q-icon name="directions_bus" />
          </q-item-section>

            <q-item-section>
             Pemesanan Tiket
            </q-item-section>
          </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      targetEl: '#target-img-1',
      toolbar: false
    }
  }
}
</script>
