const React = require('react');
// As you can see we are using the app layout
const CleanLayout = require('./layout/CleanLayout');


class Edit extends React.Component{
  render() {
    return (
      <CleanLayout 
        title="Edit Page"
        pageClass={'edit'}
        >      
     {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
          {/* form is not complet we will do that below*/}
      <form action={`/clean/${this.props.clean._id}?_method=PUT`} method="POST">
          Location: <input type="text" name="location" defaultValue={this.props.clean.location}/><br/>
          Description: <input type="text" name="description"  defaultValue={this.props.clean.description}/><br/>
          Does this job need more than 2 people?
              { this.props.clean.needHelp? <input type="checkbox" name="needHelp" defaultChecked />: <input type="checkbox" name="needHelp"/> }
          <br/>
          <input className="btn" type="submit" value="Update"/>
      </form>
      </CleanLayout>
    )
  }
}
module.exports= Edit;