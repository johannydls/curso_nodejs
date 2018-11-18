const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        /**
         * O await serve para garantir que a próxima linha só execute após 
         * conseguir buscar os produtos dentro do banco de dados
         */
        const products = await Product.find();
        console.log(`[${new Date().toLocaleDateString()}] Listando produtos`);
        return res.json(products);
    },

    async store(req, res) {
        const product = await Product.create(req.body);
        console.log(`[${new Date().toLocaleDateString()}] Novo produto adicionado\n ${req.body}`);
        return res.json(product);
    }
}