<template>
  <q-page padding>
     <q-table
      title="Rute dan Harga Tiket Damri"
      :data="data"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="Rute" :props="props">
            {{ props.row.Rute }}
          </q-td>
          <q-td key="keberangkatan" :props="props">
            {{ props.row.keberangkatan }}
          </q-td>
          <q-td key="kelas_damri" :props="props">
            {{ props.row.kelas_damri }}
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
                <q-btn to="/home" label="kembali" color="negative" unelevated=""></q-btn>
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
        { name: 'keberangkatan', label: 'Keberangkatan', align: 'center', field: 'keberangkatan', sortable: true },
        { name: 'kelas_damri', align: 'center', label: 'Kelas Damri', field: 'kelas_damri', sortable: true },
        { name: 'harga_tiket', align: 'center', label: 'Harga Tiket', field: 'harga_tiket', sortable: true },
        { name: 'Aksi', label: 'Aksi', field: 'Aksi', align: 'center' }
      ],
      data: [
        {
          Rute: 'Lampung - Jakarta',
          keberangkatan: 'Senin 09:00',
          kelas_damri: 'AC',
          harga_tiket: '250.000/kursi'
        },
        {
          Rute: 'Lampung - Jakarta',
          keberangkatan: 'Senin 11:00',
          kelas_damri: 'Executive',
          harga_tiket: '230.000/kursi'
        },
        {
          Rute: 'Lampung - Jakarta',
          keberangkatan: 'Senin 14:00',
          kelas_damri: 'Royal',
          harga_tiket: '220.000/kursi'
        },
        {
          Rute: 'Lampung - Bandung',
          keberangkatan: 'Rabu 10:00',
          kelas_damri: 'AC',
          harga_tiket: '280.000/kursi'
        },
        {
          Rute: 'Lampung - Bandung',
          keberangkatan: 'Rabu 13:00',
          kelas_damri: 'Executive',
          harga_tiket: '265.000/kursi'
        },
        {
          Rute: 'Lampung - Bandung',
          keberangkatan: 'Rabu 15:00',
          kelas_damri: 'Royal',
          harga_tiket: '250.000/kursi'
        }
      ]
    }
  }
}
</script>
