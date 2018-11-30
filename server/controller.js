module.exports = {
    create: (req, res) => {
        const dbInstance = req.app.get('db')
        const { product_name, image_url, price } = req.body

        dbInstance.create_product([product_name, image_url, price])
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log(err)
                res.status(500).send({ errorMessage: 'We cannot create this, my lord.' })
            })
    },
    getOne: (req, res) => {
        const dbInstance = req.app.get('db')
        const { params } = req
        
        dbInstance.read_product(params.id)
            .then(product => res.status(200).send(product))
            .catch(err => {
                console.log(err)
                res.status(500).send({ errorMessage: 'We cannot retrieve that, my lord.' })
            })
    },
    getAll: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.read_products()
            .then(products => res.status(200).send(products))
            .catch(err => {
                console.log(err)
                res.status(500).send({ errorMessage: 'We cannot retrieve those, my lord.' })
            })
    },
    update: (req, res) => {
        const dbInstance = req.app.get('db')
        const { params, query } = req
        dbInstance.update_product([params.product_name, query.desc])
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log(err)
                res.status(500).send({ errorMessage: 'We cannot update this, my lord.' })
            })
    },
    delete: (req, res) => {
        const dbInstance = req.app.get('db')
        const { params } = req
        dbInstance.delete_product([params.id])
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log(err)
                res.status(500).send({ errorMessage: 'We cannot delete this, my lord.' })
            })
    },
}