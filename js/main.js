var app = new Vue({
  el: '#app',
  data: {
    products: [
      {
        id: 1,
        title: 'TAG 1000 (TAG 853)',
        short_text: 'Сucumber Determinate Standard Round',
        image: 'image1.jpg',
        desc: 'Regular cucumbers have green stripes on a dark green skin with a rough surface and strong trichomes.'
      },
      {
        id: 2,
        title: 'TAG 1001 (TAG 855)',
        short_text: 'Сucumber Determinate Standard Round',
        image: 'image2.jpg',
        desc: 'Regular cucumbers have green stripes on a dark green skin with a rough surface and strong trichomes.'
      },
      {
        id: 3,
        title: 'TAG 1002 (TAG 809)',
        short_text: 'Сucumber Determinate Standard Round',
        image: 'image3.jpg',
        desc: 'Regular cucumbers have green stripes on a dark green skin with a rough surface and strong trichomes.'
      },
      {
        id: 4,
        title: 'TAG 1003 (TAG 834 )',
        short_text: 'Сucumber Determinate Standard Round',
        image: 'image4.jpg',
        desc: 'Regular cucumbers have green stripes on a dark green skin with a rough surface and strong trichomes.'
      },
      {
        id: 5,
        title: 'TAG 1004 (TAG 848)',
        short_text: 'Сucumber Determinate BEEF Round',
        image: 'image5.jpg',
        desc: 'Regular cucumbers have green stripes on a dark green skin with a rough surface and strong trichomes.'
      },
      {
        id: 6,
        title: 'TAG 1005 (TAG 800)',
        short_text: 'Сucumber Determinate Standard Round',
        image: 'image6.jpg',
        desc: 'Regular cucumbers have green stripes on a dark green skin with a rough surface and strong trichomes.'
      },
      {
        id: 7,
        title: 'TAG 1006 (TAG 898)',
        short_text: 'Сucumber Determinate Elongated',
        image: 'image7.jpg',
        desc: 'Regular cucumbers have green stripes on a dark green skin with a rough surface and strong trichomes.'
      },
      {
        id: 8,
        title: 'TAG 1007 (TAG 816)',
        short_text: 'Сucumber Determinate Elongated',
        image: 'image8.jpg',
        desc: 'Regular cucumbers have green stripes on a dark green skin with a rough surface and strong trichomes.'
      }
    ],
    product: [],
    cart: [],
    contactFields: [],
    btnVisible: 0,
    order: 0
  },
  mounted: function () {
    this.getProduct()
    this.checkInCart()
    this.getCart()
  },
  methods: {
    getProduct () {
      if (window.location.hash) {
        var id = window.location.hash.replace('#', '')
        if (this.products && this.products.length > 0) {
          for (i in this.products) {
            if (
              this.products[i] &&
              this.products[i].id &&
              id == this.products[i].id
            )
              this.product = this.products[i]
          }
        }
      }
    },
    addToCart (id) {
      var cart = []
      if (window.localStorage.getItem('cart')) {
        cart = window.localStorage.getItem('cart').split(',')
      }

      if (cart.indexOf(String(id)) == -1) {
        cart.push(id)
        window.localStorage.setItem('cart', cart.join())
        this.btnVisible = 1
      }
    },
    checkInCart () {
      if (
        this.product &&
        this.product.id &&
        window.localStorage
          .getItem('cart')
          .split(',')
          .indexOf(String(this.product.id)) != -1
      )
        this.btnVisible = 1
    },
    getCart () {
      if (window.localStorage.getItem('cart') != null) {
        if (this.products != null && this.products.length > 0) {
          for (let i in this.products) {
            if (
              this.products[i] != null &&
              this.products[i].id != null &&
              window.localStorage
                .getItem('cart')
                .split(',')
                .indexOf(String(this.products[i].id)) != -1
            )
              this.cart.push(this.products[i])
          }
        }
      }
    },
    removeFromCart (id) {
      let cart = []
      if (window.localStorage.getItem('cart') != null) {
        cart = window.localStorage.getItem('cart').split(',')
      }
      if (cart.indexOf(String(id)) != -1) {
        cart.splice(cart.indexOf(String(id)), 1)
        window.localStorage.setItem('cart', cart.join(','))
        this.cart = []
        this.getCart()
      }
    },
    makeOrder () {
      this.cart = []
      window.localStorage.setItem('cart', '')
      this.order = 1
    }
  }
})
