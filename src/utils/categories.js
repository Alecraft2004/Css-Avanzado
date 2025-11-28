export const subcategoriasMap = {
    1: [ // Gaming
      { id: 1, nombre: 'PC Gaming' }, { id: 2, nombre: 'Consolas' }, { id: 3, nombre: 'Accesorios' }, { id: 4, nombre: 'Periféricos' }, { id: 5, nombre: 'Sillas' }
    ],
    2: [ // Tecnología
      { id: 6, nombre: 'Laptops' }, { id: 7, nombre: 'Smartphones' }, { id: 8, nombre: 'Tablets' }, { id: 9, nombre: 'Audio' }, { id: 10, nombre: 'Cámaras' }
    ],
    3: [ // Supermercado
      { id: 11, nombre: 'Despensa' }, { id: 12, nombre: 'Bebidas' }, { id: 13, nombre: 'Limpieza' }, { id: 14, nombre: 'Cuidado Personal' }, { id: 15, nombre: 'Mascotas' }
    ],
    4: [ // Libros
      { id: 16, nombre: 'Ficción' }, { id: 17, nombre: 'No Ficción' }, { id: 18, nombre: 'Infantil' }, { id: 19, nombre: 'Educación' }, { id: 20, nombre: 'Comics' }
    ]
  };
  
  export const getSubcategoryIdByName = (name) => {
    for (const catId in subcategoriasMap) {
        const sub = subcategoriasMap[catId].find(s => s.nombre === name);
        if (sub) return sub.id;
    }
    return null;
  };
