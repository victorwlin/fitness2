import React from "react";

const Render = props => {    
    function compare(a, b) {
        let comparison = 0;
        if (a.date > b.date) {
            comparison = 1;
        } else if (a.date < b.date) {
            comparison = -1;
        }
        return comparison;
    }

    props.entries.sort(compare);

    return (
        <table className="ui celled table">
            <thead><tr>
                <th style={{backgroundColor: "#118ab2", color:"white"}}>Date</th>
                <th style={{backgroundColor: "#118ab2", color:"white"}}>Weight</th>
            </tr></thead>
            <tbody>
                {props.entries.map(entry => {
                    return (
                        <tr key={entry.date}>
                            <td data-label="Date">{entry.date}</td>
                            <td data-label="Weight">{(Math.round(entry.weight * 100) / 100).toFixed(2)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
};

export default Render;