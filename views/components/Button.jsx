const React = require('react');

class Button extends React.Component {
    render(){
        return (
            <form action={this.props.endpoint} method="POST">
                <input className='btn' type="submit" value={`CLEAN ✅`}></input>
            </form>
        )
    }
}
module.exports = Button;