import React from "react";

import Input from "./Input";
import Render from "./Render";

class Tracking extends React.Component {
    // The purpose of this file is to store a collection of entries
    // for the Render file to render
    state = { entries: [] };
    
    onEntrySubmit = entry => {
        let doesDateHaveEntry = 0;
        for (let i = 0; i < this.state.entries.length; i++) {
            if (entry.date === this.state.entries[i].date) {
                doesDateHaveEntry++;
            }
        }

        if (doesDateHaveEntry) {
            this.setState(prevState => {
                return {
                    entries: prevState.entries.map(
                        el => el.date === entry.date ? { ...el, weight: entry.weight } : el
                )}
            })
        } else {
            this.setState(prevState => {
                return {
                    entries: [...prevState.entries, entry]
                };
            });
        }
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <Input onSubmit={this.onEntrySubmit} />
                <Render entries={this.state.entries} />
            </div>
        );
    }
}

export default Tracking;