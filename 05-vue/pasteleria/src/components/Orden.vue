<template>
    <div class="container text-center">
        <div class="row mt-2">
            <h3>Crear pedido</h3>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">NOMBRE:</span>
                </div>
                <input type="text" class="form-control" placeholder="Username">
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">TELEFONO:</span>
                </div>
                <input type="number" class="form-control" placeholder="Username">
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">CORREO:</span>
                </div>
                <input type="email" class="form-control" placeholder="Username">
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">CANTIDAD DE PASTELES:</span>
                </div>
                <input type="number" class="form-control" placeholder="Username">
            </div>
            <div class="row">
                <h3>Arma tu pastel</h3>
                <div class="col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item active">Seleccione sabores</li>
                        <li class="list-group-item">Chocolate <input type="checkbox" ></li>
                        <li class="list-group-item">Doble Chocolate<input type="checkbox" ></li>
                        <li class="list-group-item">Durazno<input type="checkbox" ></li>
                        <li class="list-group-item">Fresa<input type="checkbox" ></li>
                        <li class="list-group-item">Moka<input type="checkbox" ></li>
                        <li class="list-group-item">Nuez<input type="checkbox" ></li>
                        <li class="list-group-item">Tres leches<input type="checkbox" ></li>
                        <li class="list-group-item">Zanahoria<input type="checkbox" ></li>
                      </ul>
                </div>
                <div class="col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item active">Seleccione accesorios</li>
                        <li class="list-group-item">Bengala <input type="checkbox" ></li>
                        <li class="list-group-item">Letras<input type="checkbox" ></li>
                        <li class="list-group-item">Mágicas<input type="checkbox" ></li>
                        <li class="list-group-item">Número<input type="checkbox" ></li>
                      </ul>
                </div>
            </div>
            <button type="button" class="btn btn-outline-success">Enviar</button>
        </div>
    </div>
</template>