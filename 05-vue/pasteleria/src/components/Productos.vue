<template>
    <section class="container mt-2">
        <div class="row">
            <h1>Pasteles</h1>
            <hr>
            <div class="col-md-3" v-for="producto in $store.state.produtos" :key="producto.id">
                <div class="card  border border-info" >
                    <img class="card-img-top img-mide" :src="'../src/assets/img/'+producto.img " alt="Card image cap">
                    <div class="card-body" id="color-fondo-producto">
                      <div>
                        <h3 class="card-title"> {{ producto.name }} </h3>  
                      </div>
                      <div>
                        <span class="list-group-item"> ${{ producto.price }}.00 </span>
                      </div>
                    </div>
                    <div class="card-body">
                        <button type="button" class="btn btn-info">COMPRAR</button>
                    </div>
                  </div>
                   <br>
            </div>
        </div>
        <div class="row">
            <h1>Accesorios</h1>
            <hr>
            <div class="col-md-3"  v-for="accesorio in $store.state.accesorios" :key="accesorio.id">
                <div class="card border border-success" style="width: 15rem;">
                    <img class="card-img-top img-mide" :src="'../src/assets/img/'+accesorio.img " alt="Card image cap">
                    <div class="card-body" id="color-fondo-accesorio">
                      <div>
                        <h5 class="card-title"> {{ accesorio.name }} </h5>
                        <p class="card-text"> {{ accesorio.descripcion }} </p>
                      </div>
                      <div>
                        <span class="list-group-item"> ${{ accesorio.price }}.00 </span>
                      </div>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item"> {{ accesorio.price }} </li>
                    </ul>
                    <div class="card-body">
                        <button type="button" class="btn btn-success">COMPRAR</button>
                    </div>
                  </div>
                <br>
            </div>
        </div>
    </section>
</template>