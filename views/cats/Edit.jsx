const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout.jsx')

class Edit extends React.Component {
    render() {
        const { breed, image, temperament, characteristics, health, lifespan, history, _id } = this.props.cat

        return (
            <DefaultLayout title={`${breed} Edit Page`} cat={this.props.cat}>
                <div id="add-new-form">
                    <form method="POST" action={`/cats/${_id}?_method=PUT`}>
                        <div>
                            <label htmlFor="breed">Breed:</label>
                            <input type="text" name="breed" defaultValue={breed} />
                        </div>
                        <div>
                            <label htmlFor="image">Image: </label>
                            <input type="img" name="image" defaultValue={image} />
                        </div>
                        <div>
                            <label htmlFor="temperament">Temperament:</label>
                            <input type="text" name="temperament" defaultValue={temperament} />
                        </div>
                        <div>
                            <label htmlFor="characteristics">Characteristics:</label>
                            <input type="text" name="characteristics" defaultValue={characteristics} />
                        </div>
                        <div>
                            <label htmlFor="health">Health: </label>
                            <input type="text" name="health" defaultValue={health} />
                        </div>
                        <div>
                            <label htmlFor="lifespan">Lifespan: </label>
                            <input type="text" name="lifespan" defaultValue={lifespan} />
                        </div>
                        <div>
                            <label htmlFor="history">History: </label>
                            <input type="text" name="history" defaultValue={history} />
                        </div>
                        <input id="edit-button" type="submit" value="Edit Cat's Breed" />
                    </form>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Edit