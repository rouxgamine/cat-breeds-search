const React = require('react');

class DefaultLayout extends React.Component {
    render() {
        const { cat, title } = this.props
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css" />
                    <title>{title}</title>
                </head>
                <body>
                    <nav id='home-new-edit-links'>
                        <a href="/cats" class="home-link">Home Page </a>
                        <a href="/cats/new" class='add-new-link'>  Add a New Cat Breed </a>
                        {cat ? <a href={`/cats/${cat._id}/edit`} class="edit">Edit {cat.breed} </a> : ''} <br />
                        {/* { cat? <a href={`/cats/${cat._id}`}>Show {cat.breed} </a> : ''} */}
                    </nav>
                    <h1 id="title">
                        {title}
                    </h1>
                    {/* <h1>
                        {title}
                    </h1> */}
                    {this.props.children}

                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout