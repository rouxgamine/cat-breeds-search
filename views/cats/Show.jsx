const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout.jsx')

class Show extends React.Component {

    render() {
        const { breed, image, temperament, characteristics, health, lifespan, history } = this.props.cat
        return (
            <DefaultLayout title={`${breed}`} cat={this.props.cat}>
            {/* <DefaultLayout title={`${breed} Show Page`} cat={this.props.cat}> */}

                <img src={`${image}`} className="show-img" alt={`Image of ${breed}`} />
                <div id="show-added-data">
                    <div>
                        <label htmlFor="temperament" className='labels-show-page'>Temperament: </label>
                        <p className='added-text-show-page'>{temperament}</p>
                    </div>
                    <div>
                        <label htmlFor="characteristics" className='labels-show-page'>Characteristics: </label>
                        <p className='added-text-show-page'>{characteristics}</p>
                    </div>
                    <div>
                        <label htmlFor="health" className='labels-show-page'>Health: </label>
                        <p className='added-text-show-page'>{health}</p>
                    </div>
                    <div>
                        <label htmlFor="lifespan" className='labels-show-page'>Lifespan:</label>
                        <p className='added-text-show-page'>{lifespan}</p>
                    </div>
                    <div>
                        <label htmlFor="history" className='labels-show-page'>History: </label>
                        <p className='added-text-show-page'>{history}</p>
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