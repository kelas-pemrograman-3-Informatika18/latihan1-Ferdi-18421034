<template>
  <q-page padding>
  <q-table
      title="Jadwal Kegiatanku"
      :data="data"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="Waktu" :props="props">
            {{ props.row.Waktu }}
          </q-td>
          <q-td key="Judul" :props="props">
            {{ props.row.Judul }}
          </q-td>
          <q-td key="Keterangan" :props="props">
            {{ props.row.Keterangan }}
          </q-td>
          <q-td key="Aksi" :props="props">
            <div class="row">
            <div class="col">
            <q-btn label="Hapus" color="positive" icon="edit" unelevated></q-btn>
            </div>
            <div class="col">
            <q-btn label="Hapus" color="negative" icon="delete" unelevated></q-btn>
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
        {
          name: 'Waktu',
          required: true,
          label: 'Waktu',
          align: 'left',
          field: 'Waktu',
          sortable: true
        },
        { name: 'Judul', align: 'center', label: 'Judul', field: 'Judul', sortable: true },
        { name: 'Keterangan', label: 'Keterangan', align: 'center', field: 'Keterangan', sortable: true },
        { name: 'Aksi', label: 'Aksi', field: 'Aksi', align: 'center' }
      ],

      data: [
        {
          Waktu: '3 April 2020',
          Judul: 'Belajar Pemrograman 3',
          Keterangan: 'Belajar Pemrograman 3 secara online'
        },
        {
          Waktu: '4 April 2020',
          Judul: 'Belajar Teori Bahasa Automata',
          Keterangan: 'Belajar Teori Bahasa Automata secara online'
        }
      ]
    }
  }
}
</script>
