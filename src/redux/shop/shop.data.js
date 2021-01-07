const SHOP_DATA = {
  evergreens: {
    id: 1,
    title: 'Ever Greens',
    routeName: 'evergreens',
    items: [
      {
        id: 1,
        name: 'Philodendron - Monstera Deliciosa',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5111WlxKCrL._AC_SL1000_.jpg',
        stoc: 4,
        price: 125
      },
      {
        id: 2,
        name: 'Monstera Adansonii',
        imageUrl: 'data:image/jpeg;base64,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',
        stoc: 2,
        price: 83
      },
      {
        id: 3,
        name: 'Anthurium Clarinervium',
        imageUrl: 'https://peppyflora.com/wp-content/uploads/2020/11/Anthurium-Clarinervium-Heart-shaped-Peppyflora-Product-01-a.jpg',
        stoc: 6,
        price: 35
      },
      {
        id: 4,
        name: 'String of turtles',
        imageUrl: 'https://www.hobbyplants.com/wp-content/uploads/2020/04/string-of-turtles-e1587972207623.jpg',
        stoc: 8,
        price: 25
      },
      {
        id: 5,
        name: 'Monstera Peru',
        imageUrl: 'https://www.chooseyourplant.com/images/plants/monstera-peru-3.jpg',
        stoc: 1,
        price: 118
      },
      {
        id: 6,
        name: 'Philodendron Silver Sword',
        imageUrl: 'https://cdn.shopify.com/s/files/1/1780/8157/products/PhiloHastatum-Nebula_1200x1200.jpg?v=1588071835',
        stoc: 2,
        price: 64
      },
      {
        id: 7,
        name: 'Snake plant (Sanseviria)',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81E6cMb9e1L._AC_SL1500_.jpg',
        stoc: 9,
        price: 38
      },
      {
        id: 8,
        name: 'Pothos',
        imageUrl: 'https://images.homedepot-static.com/productImages/0ea99b3d-f526-4755-b282-3707acc41ff7/svn/costa-farms-house-plants-6goldpothos-64_1000.jpg',
        stoc: 6,
        price: 24
      }
    ]
  },
  exotics: {
    id: 2,
    title: 'Exotics',
    routeName: 'exotics',
    items: [
      {
        id: 9,
        name: 'Alocasia Stingray',
        imageUrl: 'gs://flower-time.appspot.com/product photos/AlocasiaStingray.jpg',
        stoc: 4,
        price: 220
      },
      {
        id: 10,
        name: 'Philodendron Prince of Orange',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0013/3529/6118/products/Nursery-Pot-4_Philodendron-Prince-of-Orange.jpg?v=1557436736',
        stoc: 4,
        price: 280
      },
      {
        id: 11,
        name: 'Monstera Adansonii Variegated',
        imageUrl: 'https://i.pinimg.com/564x/0c/45/7a/0c457a83dd190d9799f45a63514823ce.jpg',
        stoc: 4,
        price: 110
      },
      {
        id: 12,
        name: 'Philodendron Malay Gold',
        imageUrl: 'https://photo.floraccess.com/dhlb5sfettohteogupukkb2ubr2n58s0qbggba2a_superthumb.jpg',
        stoc: 4,
        price: 160
      }
    ]
  },
  flowerPlants: {
    id: 3,
    title: 'Plants with flowers',
    routeName: 'flowerPlants',
    items: [
      {
        id: 13,
        name: 'Gloxinia',
        imageUrl: 'https://www.flowertime.ro/images/products/1459339213DSC_0059.jpg',
        stoc: 6,
        price: 125
      },
      {
        id: 14,
        name: 'Hibiscus',
        imageUrl: 'https://homedepot.scene7.com/is/image/homedepotcanada/p_1000407393.jpg?wid=1000&hei=1000&op_sharpen=1',
        stoc: 7,
        price: 90
      },
      {
        id: 15,
        name: 'Geranium',
        imageUrl: 'https://assets.mitre10.co.nz/sys-master/productimages/hc7/hf1/8835135340574/274812xlg.jpg',
        stoc: 5,
        price: 90
      },
      {
        id: 16,
        name: 'Kalanchoe',
        imageUrl: 'https://www.cascadefloralwholesale.com/wp-content/uploads/2018/03/KALA6.jpg',
        stoc: 4,
        price: 165
      },
      {
        id: 17,
        name: 'Orchid',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0021/3041/1580/products/1_ebc0f225-627d-441d-8627-1ef54ec829bd_2048x.progressive.jpg?v=1570023684',
        stoc: 9,
        price: 185
      },
      {
        id: 18,
        name: 'Peace Lily',
        imageUrl: 'https://5.imimg.com/data5/SC/IQ/MY-33408826/peace-lily-500x500.jpg',
        stoc: 5,
        price: 185
      }
    ]
  },
  indoor: {
    id: 4,
    title: 'Indoor plants',
    routeName: 'indoor',
    items: [
      {
        id: 19,
        name: 'Philodendron - Monstera Deliciosa',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5111WlxKCrL._AC_SL1000_.jpg',
        stoc: 4,
        price: 125
      },
      {
        id: 20,
        name: 'Monstera Adansonii',
        imageUrl: 'gs://flower-time.appspot.com/product photos/MonsteraAdansonii.jfif',
        stoc: 2,
        price: 83
      },
      {
        id: 21,
        name: 'Anthurium Clarinervium',
        imageUrl: 'https://peppyflora.com/wp-content/uploads/2020/11/Anthurium-Clarinervium-Heart-shaped-Peppyflora-Product-01-a.jpg',
        stoc: 6,
        price: 35
      },
      {
        id: 22,
        name: 'String of turtles',
        imageUrl: 'https://www.hobbyplants.com/wp-content/uploads/2020/04/string-of-turtles-e1587972207623.jpg',
        stoc: 6,
        price: 25
      },
      {
        id: 23,
        name: 'Monstera Peru',
        imageUrl: 'https://www.chooseyourplant.com/images/plants/monstera-peru-3.jpg',
        stoc: 1,
        price: 118
      },
      {
        id: 24,
        name: 'Philodendron Silver Sword',
        imageUrl: 'https://cdn.shopify.com/s/files/1/1780/8157/products/PhiloHastatum-Nebula_1200x1200.jpg?v=1588071835',
        stoc: 2,
        price: 64
      },
      {
        id: 25,
        name: 'Snake plant (Sanseviria)',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81E6cMb9e1L._AC_SL1500_.jpg',
        price: 18
      },
      {
        id: 26,
        name: 'Alocasia Stingray',
        imageUrl: 'gs://flower-time.appspot.com/product photos/AlocasiaStingray.jpg',
        stoc: 220,
        price: 220
      },
      {
        id: 27,
        name: 'Philodendron Prince of Orange',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0013/3529/6118/products/Nursery-Pot-4_Philodendron-Prince-of-Orange.jpg?v=1557436736',
        stoc: 4,
        price: 280
      },
      {
        id: 28,
        name: 'Monstera Adansonii Variegated',
        imageUrl: 'https://i.pinimg.com/564x/0c/45/7a/0c457a83dd190d9799f45a63514823ce.jpg',
        stoc: 4,
        price: 110
      },
      {
        id: 29,
        name: 'Philodendron Malay Gold',
        imageUrl: 'https://photo.floraccess.com/dhlb5sfettohteogupukkb2ubr2n58s0qbggba2a_superthumb.jpg',
        stoc: 4,
        price: 160
      },
      {
        id: 30,
        name: 'Gloxinia',
        imageUrl: 'https://www.flowertime.ro/images/products/1459339213DSC_0059.jpg',
        stoc: 6,
        price: 125
      },
      {
        id: 31,
        name: 'Geranium',
        imageUrl: 'https://assets.mitre10.co.nz/sys-master/productimages/hc7/hf1/8835135340574/274812xlg.jpg',
        stoc: 5,
        price: 90
      },
      {
        id: 32,
        name: 'Orchid',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0021/3041/1580/products/1_ebc0f225-627d-441d-8627-1ef54ec829bd_2048x.progressive.jpg?v=1570023684',
        stoc: 9,
        price: 185
      },
      {
        id: 33,
        name: 'Peace Lily',
        imageUrl: 'https://5.imimg.com/data5/SC/IQ/MY-33408826/peace-lily-500x500.jpg',
        stoc: 5,
        price: 185
      },
      {
        id: 34,
        name: 'Pothos',
        imageUrl: 'https://images.homedepot-static.com/productImages/0ea99b3d-f526-4755-b282-3707acc41ff7/svn/costa-farms-house-plants-6goldpothos-64_1000.jpg',
        stoc: 6,
        price: 14
      }
    ]
  },
  outdoor: {
    id: 5,
    title: 'Outdoor plants',
    routeName: 'outdoor',
    items: [
      {
        id: 35,
        name: 'Lavender',
        imageUrl: 'https://mobileimages.lowes.com/product/converted/022532/022532089810xl.jpg',
        stoc: 6,
        price: 50
      },
      {
        id: 36,
        name: 'Hibiscus',
        imageUrl: 'https://homedepot.scene7.com/is/image/homedepotcanada/p_1000407393.jpg?wid=1000&hei=1000&op_sharpen=1',
        stoc: 7,
        price: 90
      },
      {
        id: 37,
        name: 'Roses',
        imageUrl: 'https://i1.fnp.com/images/pr/l/v20190115144739/rose-plant-in-round-fabric-pot_1.jpg',
        stoc: 10,
        price: 25
      },
      {
        id: 38,
        name: 'Ivy',
        imageUrl: 'https://static.turbosquid.com/Preview/001155/684/BH/ivy-pot-3D-model_600.jpg',
        stoc: 12,
        price: 25
      },
      {
        id: 39,
        name: 'Lemon Tree',
        imageUrl: 'https://cdn.vivre.eu/upload/2017/02/thumbs/58aedee7309779.34556877.1400x1400.jpg',
        stoc: 5,
        price: 40
      },
      {
        id: 40,
        name: 'Fuchsia',
        imageUrl: 'https://www.gardeningknowhow.com/wp-content/uploads/2015/12/fuchsia-houseplant.jpg',
        stoc: 7,
        price: 25
      },
      {
        id: 41,
        name: 'Tulips',
        imageUrl: 'https://www.paynes.com/wp-content/uploads/2014/11/red-tulips-indoor-pot-web.jpg',
        stoc: 22,
        price: 25
      },
      {
        id: 42,
        name: 'Thuja',
        imageUrl: 'https://i.pinimg.com/originals/2f/68/ab/2f68abe5ab1e0618a849d1c7be4e3455.jpg',
        stoc: 10,
        price: 225
      }
    ]
  }
};

export default SHOP_DATA;