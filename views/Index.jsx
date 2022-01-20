const React = require('react');
const CleanLayout = require('./layout/CleanLayout');
const Button = require('./components/Button');

class Index extends React.Component {
    render() {
        return (
            <CleanLayout 
            title={'CleanUp'}
            pageClass={'index'}
            >
                <div className="intro">
                    <a href="/clean/new"><h3 className="about__clean">Create a new clean up request</h3></a>
                    <a href="/clean/about"><h3>About Clean Up</h3></a>
                    <img className="trash" src="/images/trash.jpg"/>
                </div>
                <div className="card__display">
                {
                   this.props.clean.map((clean, i) => {
                    return (
                        <div className="card" key={clean._id}>
                        <a href={`/clean/${clean._id}`}><img className="trash" src="/images/trash.jpg"/></a><br />
                        <p className="card__location">Location:</p> <a href={`/clean/${clean._id}`}>{ clean.location }</a>
                        <p className="card__description">Mess to Look for:</p><p className="card__details"> { clean.description }</p>
                        <p className="card__need">{ clean.needHelp ? `This needs more than 2 people` : `This is a 1-2 person job` }</p>
                        <a href={`/clean/${clean._id}/edit`}><p className="card__edit">Edit Post</p></a>
                        <Button endpoint={`/clean/${clean._id}?_method=DELETE`}/>
                        </div>
                        )
                    })
                }
            </div>
            </CleanLayout>
        )
    }
}

module.exports = Index;