const React = require('react');

class CleanLayout extends React.Component{
  render() {
    return (
      <html lang="en" dir="ltr">
        <head>
        {/* charset needs to be Camel Cased in JSX */}
            <meta charSet="utf-8"/>
        {/* This let us dynamically create the title */}
            <title>{this.props.title}</title>
            <link rel="stylesheet" href="/css/main.css" />
        </head>
        <body>
          <h1>{this.props.title}</h1>
            {/* This is where our other components will be injected */}
            <div className={this.props.pageClass}>
                {this.props.children}
            </div>
        </body>
    </html>
    )
  }
}
module.exports= CleanLayout;