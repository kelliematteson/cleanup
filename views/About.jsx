const React = require('react');
const CleanLayout = require('./layout/CleanLayout');

class About extends React.Component {
  render() {
    return (
        <CleanLayout
          title={'About Clean Up'}
          pageClass={'about'}
        >
            <div className="about__details">
                <p><strong>Clean Up</strong> is an app in development to help pitch in and clean up the environment around you. The pandemic forced me to slow down and take a look at the world right outside my door. This app is inspired by the Buy Nothing Group on Facebook and the share economy. Doing something to help someone else and expecting nothing in return. I think we can do the same thing when we see a mess in our own neighborhood. We don’t always have the time to pick it up ourselves so what if we could report it? And then a neighbor could go clean it up? Paying it forward to each other. <br/>
                <br />
                <br />
This app is the bare bones. A simple CRUD application using Express, Node, React and MongoDB. I’m a software engineer out of General Assembly looking to refine my new skills. I’m using SASS for styling but would like to pull in Tailwind eventually. I also want to create a user with authentication so the user can keep track of posts and the users that clean can gain Good Neighbor points. I want to use a location API so the users can join their specific neighborhood “team”. If you’re interested in helping me develop Clean Up, please reach out! I’d love any advice or great ideas. </p>
<a href="/clean">Back to Clean Up</a>
             </div>
             
        </CleanLayout>);
  }
}

module.exports = About;