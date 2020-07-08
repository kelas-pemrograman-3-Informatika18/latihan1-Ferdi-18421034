<template>
  <q-page>
    <q-form>
 <div class="col q-mr-xl q-ml-xl q-mt-td">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      autoplay
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-carousel-slide :name="3" img-src="~assets/20200509_203859_0000.png" />
      <q-carousel-slide :name="1" img-src="~assets/20200509_203940_0000.png"/>
      <q-carousel-slide :name="2" img-src="~assets/20200509_210453_0000.png"/>
    </q-carousel>
    <q-card-section>
    SILAHKAN PILIH DAMRI YANG ANDA INGINKAN
    </q-card-section>
    <div class="q-pa-md row items-start q-gutter-md">
 <q-card class="my-card" style="height: 220px; weight: 250px">
      <q-img src="https://newslampungterkini.com/wp-content/uploads/2019/10/Inilah-Jadwal-Keberangakatan-Bus-Damri-Lampung-2019.jpg">
        <div class="absolute-bottom">
          <div class="text-h6">Royal Class</div>
          <div class="text-subtitle2">AC,Wi-Fi,televisi,Toilet,Kursi refleksi,Jumlah Kursi 21,dll</div>
        </div>
      </q-img>
      <q-separator />
      <q-card-actions vertical align="center">
        <q-btn to="RoyalClass" flat>Pesan</q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card" style="height: 220px; weight: 250px">
      <q-img src="https://cdn2.tstatic.net/tribunnews/foto/bank/images/bus-damri-eksekutif-menggunakan-bus-hdd-dari-mecedes-benz_20180404_115730.jpg" style="height: 155px">
        <div class="absolute-bottom">
          <div class="text-h6">Executive Class</div>
          <div class="text-subtitle2">AC,Kursi Biasa,dan jumlah Kursi 24</div>
        </div>
      </q-img>
      <q-separator />
      <q-card-actions vertical align="center">
        <q-btn to="ExecutiveClass" flat>Pesan</q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card" style="height: 220px; weight: 250px">
      <q-img src="https://3.bp.blogspot.com/-2d5boZfvI3M/XCBFSA57D7I/AAAAAAAAEf0/rPoAAgWo42sCZST3rF-et__jYl0ixoVUwCPcBGAYYCw/s640/Damri%2BMalang.jpg" style="height: 155px">
        <div class="absolute-bottom">
          <div class="text-h6">Business Class</div>
          <div class="text-subtitle2">AC,Kursi Biasa,dan Jumlah Kursi 43</div>
        </div>
      </q-img>
      <q-separator />
      <q-card-actions vertical align="center">
        <q-btn to="BusinessClass" flat>Pesan</q-btn>
      </q-card-actions>
    </q-card>
  </div>
  </div>
 </q-form>
</q-page>
</template>
<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 1,
      toolbar: false
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
