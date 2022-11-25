const {createApp} = Vue;

    createApp({

        data() {
            return {
                message: 'Buongiorno mondo!',
                image: './img/286699b4-24ea-4fdf-8fc1-25eb198ec6a5.webp',
                myClass: 'hidden'
            }
        },
        methods: {
            saluta() {
                this.myClass = 'visible'
            },
            salutaFra() {
                this.message = 'Bonjour a tout le monde'
                this.myClass = 'visible'
                this.image = './img/cezaranne.jpg'
            },
            salutaNap() {
                this.message = 'Ueue buongiorn a tutt quant!'
                this.myClass = 'visible'
                this.image = './img/cesi.jpg'
            }
        }
    
    }).mount('#app')