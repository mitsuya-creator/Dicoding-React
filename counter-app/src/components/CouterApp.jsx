import React from "react";

class CounterApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

        this.onIncreaseButton = this.onIncreaseButton.bind(this);
        this.onResetButton = this.onResetButton.bind(this);
    }
    onIncreaseButton() {
        this.setState(prev => {
            return {

                count: prev.count + 1
            }
        })
    }
    onResetButton() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    render() {
        return (
            <>
                <IncreaseBtn increase={this.onIncreaseButton} />
                <CounterDisplay count={this.state.count} />
                <ResetBtn reset={this.onResetButton} />
            </>
        )
    }
}


function CounterDisplay({ count }) {
    if (count === 0) {
        return <p>{count}</p>
    }
    if (count % 5 === 0 && count % 7 === 0) count = "FizzBuzz";
    if (count % 5 === 0) count = "Fizz";
    if (count % 7 === 0) count = "Buzz";
    return <p>{count}</p>
}
function IncreaseBtn({ increase }) {
    return <button onClick={increase}>+increase</button>
}
function ResetBtn({ reset }) {
    return <button onClick={reset}>reset</button>
}
export { CounterApp };