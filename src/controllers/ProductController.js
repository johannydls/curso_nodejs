const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        /**
         * O await serve para garantir que a próxima linha só execute após 
         * conseguir buscar os produtos dentro do banco de dados
         */
        const products = await Product.find();
        return res.json(products);
    },
}