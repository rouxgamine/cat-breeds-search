const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout.jsx')

class Index extends React.Component {
  render () {
    const { cats } = this.props
    console.log(cats)
    // const cats = this.props.cats
    return (
      <DefaultLayout title='Cats Index Page'>
                    {
                        cats.map((cat) => {
                          const { breed, image, _id } = cat
                          return (
                            <div class="index">
                                {/* {_id} */}
                                <p>{breed}</p>
                                <a href={`/cats/${_id}`} > 
                                    <img src={`${image}`} alt={`Image of ${breed}`} />
                                <br />

                                <p>Learn more</p>
                            
                                {/* {learn_more} </a> <br />                          */}
                                </a>
                                <p>
                                <a href="">Sing in to find a breader</a>
                                </p>
                                
                              
                            
                                {/* <form method='POST' action={`/cats/${_id}?_method=DELETE`}>
                                    <input type='submit' value={`Delete ${breed}`}/>
                                </form>     */}
                            
                                    
                            </div>
                          )
                        })
                    }
      </DefaultLayout>
    )
  }
}

module.exports = Index
