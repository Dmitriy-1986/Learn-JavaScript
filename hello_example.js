class HelloMessage extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "Hello ",
      this.props.name
    );
  }
}

//ReactDOM.render(React.createElement(HelloMessage, { name: "Taylor" }),
//document.getElementById('#hello_example'));

const domHello = document.querySelector('#hello_example');
ReactDOM.render(HelloMessage, { name: "Taylor" });
