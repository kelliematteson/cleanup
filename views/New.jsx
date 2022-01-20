const React = require('react');
const CleanLayout = require('./layout/CleanLayout');

class New extends React.Component {
  render() {
    return (
        <CleanLayout
          title={'New Clean Up Requests'}
          pageClass={'new'}
        >
            <div className="card">
            <form action="/clean" method="POST">
                Location: <input type="text" name="location" /><br/>
                Description: <input type="text" name="description" /><br/>
                Requires more than 2 people: <input type="checkbox" name="moreHelp" /><br/>
                <input className="btn" type="submit" name="" value="Create CleanUP"/>
             </form>
             </div>
        </CleanLayout>);
  }
}

module.exports = New;