const SHOP_DATA = {
  evergreens: {
    id: 1,
    title: 'Ever Greens',
    routeName: 'evergreens',
    items: [
      {
        id: 1,
        name: 'Philodendron - Monstera Deliciosa',
        imageUrl: 'https://images.pexels.com/photos/5075473/pexels-photo-5075473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        stoc: 4,
        price: 125
      },
      {
        id: 2,
        name: 'Monstera Adansonii',
        imageUrl: 'gs://flower-time.appspot.com/product photos/MonsteraAdansonii.jfif',
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