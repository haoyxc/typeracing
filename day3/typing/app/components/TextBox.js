import React from "react";

export default function TextBox() {
    return (
        <div>
            <input
                className="inputBox"
                type="text"
                name=""
                id=""
                value={this.props.userInput}
                onKeyPress={this.props.onInput(event)}
            />
        </div>
    );
}
