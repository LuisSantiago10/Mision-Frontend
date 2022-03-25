import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      produtos: [
          { id:1,name:'Pastel de Zanahoria',price:350.00,img:'pastel-zanahoria.jpeg',amount:35 },
          { id:2,name:'Pastel de chocolate',price:280.00,img:'pastel-chocolate.jpeg',amount:50 },
          { id:3,name:'Pastel de durazno',price:150.00,img:'pastel-durazno.jpeg',amount:2 },
          { id:4,name:'Pastel de fresa',price:200.00,img:'pastel-fresa.jpeg',amount:13 },
          { id:5,name:'Pastel de moka',price:250.00,img:'pastel-moka.jpeg',amount:30 },
          { id:6,name:'Pastel de nuez',price:50.00,img:'pastel-nuez.jpeg',amount:35 },
          { id:7,name:'Pastel de tres leches',price:50.00,img:'pastel-tres-leches.jpeg',amount:20 },
          { id:8,name:'Pastel de doble chocolate',price:370.00,img:'pastel-doble-chocolate.jpeg',amount:3 },
      ],
      accesorios: [
        { id:1,name:'Velas bengala',description:'Accesorio',price:35.00,img:'velas-bengala.jpeg',amount:20 },
        { id:2,name:'Velas de letras',description:'Accesorio',price:50.00,img:'velas-letras.jpeg',amount:20 },
        { id:3,name:'Velas mágicas',description:'Accesorio',price:15.00,img:'velas-magicas.jpeg',amount:20 },
        { id:4,name:'Velas de número',description:'Accesorio',price:10.00,img:'velas-numero.jpeg',amount:20 },
      ]
    }
  },
  mutations: {
    sumarCantidad(state,id){
      let index = state.produtos.findIndex( x => x.id === id )
      state.produtos[index].amount ++ ;
    },
    restarCantidad(state,id){
      let index = state.produtos.findIndex( x => x.id === id )
      state.produtos[index].amount -- ;
    }
  },
  methods: {
    getPic(dato) {
      return '../assets/img/' + dato;
    }
  }
})

export default store