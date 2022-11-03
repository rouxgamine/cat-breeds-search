const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout.jsx')

class Show extends React.Component {

    render() {
        const { breed, image, temperament, characteristics, health, lifespan, history } = this.props.cat
        return (
            <DefaultLayout title={`${breed} Show Page`} cat={this.props.cat}>
                <img src={`${image}`} class="show-img" alt={`Image of ${breed}`} />
                {/* <a href={`${learn_more}`}>Learn More</a> */}
                <div id="show-added-data">
                    <div>
                        <label htmlFor="temperament">Temperament: </label>
                        {temperament}
                    </div>
                    <div>
                        <label htmlFor="characteristics">Characteristics: </label>
                        {characteristics}
                    </div>
                    <div>
                        <label htmlFor="health">Health: </label>
                        {health}
                    </div>
                    <div>
                        <label htmlFor="">Lifespan:</label>
                        {lifespan}
                    </div>
                    <div>
                        <label htmlFor="history">History: </label>
                        {history}
                    </div>

                    <a href=""><p>Find Breader</p></a>
                    <form id="delete-breed" method='POST' action={`?_method=DELETE`}>
                        <input type='submit' value={`Delete ${breed}`} />
                    </form>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show 