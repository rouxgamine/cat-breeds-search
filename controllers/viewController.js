
const RESOURCE_PATH = '/cats'

const viewController = {
    index(req, res, next){
        console.log("entering view controller")
        res.render('cats/Index', res.locals.data)
    },
    newView(req, res, next){
        res.render('cats/New')
    },
    edit(req, res, next){
        res.render('cats/Edit', res.locals.data)
    },
    show(req, res, next){
        res.render('cats/Show', res.locals.data)
    },
    redirectHome(req, res, next){
        res.redirect(RESOURCE_PATH)
    },
    redirectShow(req, res, next){
        const catId = req.params.id || res.locals.data.cat._id
        res.redirect(`${RESOURCE_PATH}/${catId}`)
    }

}

module.exports = viewController