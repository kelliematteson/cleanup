const React = require('react');
const CleanLayout = require('./layout/CleanLayout');
const Button = require('./components/Button');

class Show extends React.Component {
    render() {
        return(
            <CleanLayout 
                title={`Clean Request at ${this.props.clean.location}`}
                pageClass={'show'}
            >
                <div className="card">
                Please go to: { this.props.clean.location } <br />
                Mess Details: { this.props.clean.description } <br />
                { this.props.clean.needHelp ? 'This job needs more than 2 people' : 'This is a 1-2 person clean-up'} <br />
                <a href="/clean">Go Back to all the Clean Up requests</a><br />
                <Button endpoint={`/clean/${this.props.clean._id}?_method=DELETE`}/>
                </div>
            </CleanLayout>
        )
    }
}

module.exports = Show;