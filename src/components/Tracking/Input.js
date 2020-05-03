import React from "react";

class Input extends React.Component {
    // I am initializing state with a object, because I want the dates
    // and weights to be locked together.
    state = { entry: { date: "", weight: "" } };

    // Calculate today's date and set to default in the form
    componentDidMount = () => {
        const date = new Date();
        const today = date.toISOString().substring(0, 10);
        
        this.setState({ entry: { ...this.state.entry, date: today } });
    };

    // React does not allow me to update a specific property with setState
    // I had to create onDateChange and onWeightChange in order to modify
    // a specific property in my state object without affecting the other
    // property
    onDateChange = event => {
        this.setState({ entry: { ...this.state.entry, date: event.target.value } });
    };

    onWeightChange = event => {
        this.setState({ entry: { ...this.state.entry, weight: event.target.value } });
    };


    // This method passes the Input (child) state into the App (parent)
    // state
    onFormSubmit = event => {
        // This prevents the page from refreshing every time something is
        // submitted
        event.preventDefault();
        
        // Check if date field is empty
        if (this.state.entry.date) {
            this.props.onSubmit({...this.state.entry});
            this.setState({ entry: { date: "", weight: "" } });
        } else {
            window.alert("Please enter a date");
        }
    };

    render() {
        return (
            <div className="ui form">
                <div className="fields">
                    <form onSubmit={this.onFormSubmit} className="field">
                        <label>Date</label>
                        <input
                            type="date"
                            value={this.state.entry.date}
                            onChange={this.onDateChange}
                        />
                    </form>
                    <form onSubmit={this.onFormSubmit} className="field">
                        <label>Weight</label>
                        <input
                            type="number"
                            step="0.01"
                            value={this.state.entry.weight}
                            onChange={this.onWeightChange}
                        />
                    </form>
                </div>
                <div onClick={this.onFormSubmit} className="ui submit button">Submit</div>
            </div>
        );
    }
}

export default Input;