var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './vmSocks-green.jpg',
        inStock: false,
        inventory: 100,
        details: ["Item1", "Item 2", "Item3", "Continue the rest la"],
        variants: [
            {
                //Id just make up something is ok
                variantId: 2234, 
                variantColor: "green",
                variantImage: 'vmSocks-green.jpg'
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: 'vmSocks-blue.jpg'
            }
        ], 
        cart: 0
    },

    methods: {
        addToCart: function() {
            this.cart += 1
        },
        updateProduct: function(variantImage) {
            this.image = variantImage
        }
    }
})