var app = new Vue({
  el: '#app',
  data: {
    products: [
      {
        id: 1,
        title: 'TAG 1000 (TAG 853)',
        short_text: 'Сucumber Determinate Standard Round',
        image: 'image1.jpg'
      },
      {
        id: 2,
        title: 'TAG 1001 (TAG 855)',
        short_text: 'Сucumber Determinate Standard Round',
        image: 'image2.jpg'
      },
      {
        id: 3,
        title: 'TAG 1002 (TAG 809)',
        short_text: 'Сucumber Determinate Standard Round',
        image: 'image3.jpg'
      },
      {
        id: 4,
        title: 'TAG 1003 (TAG 834 )',
        short_text: 'Сucumber Determinate Standard Round',
        image: 'image4.jpg'
      },
      {
        id: 5,
        title: 'TAG 1004 (TAG 848)',
        short_text: 'Сucumber Determinate BEEF Round',
        image: 'image5.jpg'
      },
      {
        id: 6,
        title: 'TAG 1005 (TAG 800)',
        short_text: 'Сucumber Determinate Standard Round',
        image: 'image6.jpg'
      },
      {
        id: 7,
        title: 'TAG 1006 (TAG 898)',
        short_text: 'Сucumber Determinate Elongated',
        image: 'image7.jpg'
      },
      {
        id: 8,
        title: 'TAG 1007 (TAG 816)',
        short_text: 'Сucumber Determinate Elongated',
        image: 'image8.jpg'
      }
    ]
  },
  mounted: function () {
    console.log(window.localStorage.getItem('prod'))
  },
  methods: {
    addItem: function (id) {
      window.localStorage.getItem('prod', id)
    }
  }
})
