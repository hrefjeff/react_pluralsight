// const Button = (props) => {

//  return (
//      <button>Go</button>
//   );

// }

class Button extends React.Component{

    // // Constructor is a js object with a counter property set to 0
    // state = { counter: 0};
  
  // Methods for the state
  // handleClick = () => {
  //    this.setState({
  //    counter: this.state.counter + 1
  //   });
  // }
  
  // Render function
    render() {
    return (
        <button onClick={ () => this.props.onClickFunction(this.props.incrementValue)}>
        +{this.props.incrementValue}
      </button>
    );
  }

}

const Result = (props) => {

    return (
    <div>{props.counter}</div>
  );

}

class App extends React.Component{

    // Constructor is a js object with a counter property set to 0
    state = { counter: 0};

    incrementCounter = (incrementValue) => {
  
    this.setState((prevState) => ({
        counter: prevState.counter + incrementValue
    }));
  
  }

    render(){
    return (
        <div>
            <Button incrementValue={1} onClickFunction = {this.incrementCounter} />
        <Button incrementValue={5} onClickFunction = {this.incrementCounter} />
        <Button incrementValue={10} onClickFunction = {this.incrementCounter} />
        <Button incrementValue={100} onClickFunction = {this.incrementCounter} />
        <Result counter={this.state.counter} />
        </div>
    );
  }

}

ReactDOM.render(<App />, mountNode);