<template>
  <q-page padding>
    <q-table
      title="EXECUTIVE CLASS"
      :data="data"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="Rute" :props="props">
            {{ props.row.Rute }}
          </q-td>
          <q-td key="jadwal_berangkat" :props="props">
            {{ props.row.jadwal_berangkat }}
          </q-td>
          <q-td key="harga_tiket" :props="props">
            {{ props.row.harga_tiket }}
          </q-td>
          <q-td key="Aksi" :props="props">
            <div class="row">
              <div class="col">
                <q-btn to="pemesanan" label="pilih" color="orange" unelevated=""></q-btn>
              </div>
            <div class="row">
              <div class="col">
                <q-btn to="/home" label="kembali" color="indigo-8" unelevated=""></q-btn>
            </div>
            </div>
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      columns: [
        { name: 'Rute', align: 'center', label: 'Rute', field: 'Rute', sortable: true },
        { name: 'jadwal_berangkat', label: 'Jadwal Keberangkatan', align: 'center', field: 'keberangkatan', sortable: true },
        { name: 'harga_tiket', align: 'center', label: 'Harga Tiket', field: 'harga_tiket', sortable: true },
        { name: 'Aksi', label: 'Aksi', field: 'Aksi', align: 'center' }
      ],
      data: [
        {
          Rute: 'Metro - Jakarta',
          jadwal_berangkat: 'Senin 09:00',
          harga_tiket: '215.000'
        },
        {
          Rute: 'Metro - Bandung',
          jadwal_berangkat: 'Senin 09:00',
          harga_tiket: '240.000'
        },
        {
          Rute: 'Metro - Bogor',
          jadwal_berangkat: 'Senin 09:00',
          harga_tiket: '225.000'
        },
        {
          Rute: 'Bandar Lampung - Jakarta',
          jadwal_berangkat: 'Senin 11:00',
          harga_tiket: '200.000'
        },
        {
          Rute: 'Bandar Lampung - Bekasi',
          jadwal_berangkat: 'Senin 14:00',
          harga_tiket: '245.000'
        },
        {
          Rute: 'Bandar Lampung - Bogor',
          jadwal_berangkat: 'Rabu 10:00',
          harga_tiket: '215.000'
        },
        {
          Rute: 'Pringsewu - Jakarta',
          jadwal_berangkat: 'Rabu 13:00',
          harga_tiket: '220.000'
        }
      ]
    }
  }
}
</script>
