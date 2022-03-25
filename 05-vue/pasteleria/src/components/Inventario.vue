<template>
    <div class="container">
        <div class="row mt-2">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Imagen</th>
                <th scope="col">Producto</th>
                <th scope="col">Existencia</th>
                <th scope="col">Minimi stock</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody v-for="producto in $store.state.produtos" :key="producto.id">
              <tr>
                <th scope="row"> {{ producto.id }} </th>
                <th>
                    <img class="card-img-top img-invetario" :src="'../src/assets/img/'+producto.img " alt="Card image cap">
                </th>
                <td>{{ producto.name }}</td>
                <td> {{  producto.amount }} 
                </td>
                <td>50</td>
                <td>
                    <button type="button" class="btn btn-success" @click="$store.commit('sumarCantidad',producto.id)">+</button>
                    <button type="button" class="btn btn-danger" @click="$store.commit('restarCantidad',producto.id)">-</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
          
    </div>
</template>
<script>

</script>