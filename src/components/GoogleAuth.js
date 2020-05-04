import React from "react";

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };
    
    componentDidMount() {
        // Initialize and store GoogleAuth object into this.auth
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "426043248859-bpecvm4ik42gvknks71snhbqagp05kb9.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);

                window.GoogleUser = this.auth.currentUser.get();
            });
        });
    }
    
    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });

        window.GoogleUser = this.auth.currentUser.get();
    };

    onSignIn = () => {
        this.auth.signIn();
    };

    onSignOut = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
            return (
                <button onClick={this.onSignOut} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignIn} className="ui red google button">
                    <i className="google icon" />
                    Sign In
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;