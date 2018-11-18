const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        /**
         * O await serve para garantir que a próxima linha só execute após 
         * conseguir buscar os produtos dentro do banco de dados
         */
        const products = await Product.find();
        console.log(`[${new Date().toLocaleString()}] Listagem de Produtos: GET /api/products\n`);
        return res.json(products);
    },

    async store(req, res) {
        const product = await Product.create(req.body);
        console.log(`[${new Date().toLocaleString()}] Adição de Produto: POST /api/products\n`);
        return res.json(product);
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);
        console.log(`[${new Date().toLocaleString()}] Detalhes de Produto: GET /api/products/${req.params.id}\n`);
        return res.json(product);
    }, 

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log(`[${new Date().toLocaleString()}] Atualização de Produto: PUT /api/products/${req.params.id}\n`);
        return res.json(product);
    },

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);
        console.log(`[${new Date().toLocaleString()}] Remoção de Produto: DELETE /api/products/${req.params.id}\n`);
        return res.send();
    }
}