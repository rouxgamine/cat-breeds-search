const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout.jsx')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Add a New Cat Breed">
                <div id="add-new-form">
                    <form method="POST" action="/cats">
                        <div>
                            <label htmlFor="breed">Breed:</label>
                            <input id="breed" type="text" name="breed" placeholder="Cat's breed" />
                        </div>
                        <div>
                            <label htmlFor="image">Image: </label>
                            <input id="image" type="text" name="image" placeholder="Cat's Image" />
                        </div>
                        <div>
                            <label htmlFor="temperament">Temperament:</label>
                            <input id="temperament" type="text" name="temperament" placeholder="Cat's temperament" />
                        </div>
                        <div>
                            <label htmlFor="characteristics">Characteristics:</label>
                            <input type="text" name="characteristics" placeholder="Cat's characteristics" />
                        </div>
                        <div>
                            <label htmlFor="health">Health: </label>
                            <input type="text" name="health" placeholder="Cat's health" />
                        </div>
                        <div>
                            <label htmlFor="lifespan">Lifespan: </label>
                            <input type="text" name="lifespan" placeholder="Cat's lifespan" />
                        </div>
                        <div>
                            <label htmlFor="history">History: </label>
                            <input type="text" name="history" placeholder="Cat's history" />
                        </div>
                        <input id="submit-breed-button" type="submit" value="Submit a Cat" />
                    </form>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = New