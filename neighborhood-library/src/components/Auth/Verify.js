import React, { Component } from "react";
import { Redirect } from "react-router-dom";
export default function Verify(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false
      };
    }
    componentDidMount() {
      fetch("http://localhost:3000/checkToken")
        .then(res => {
          if (res.status === 200) {
            this.setState({ loading: false });
          } else {
            const error = new Error(res.error);
            this.setState({ loading: false, redirect: true });
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          this.setState({ loading: false, redirect: true });
        });
    }
    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        console.log("verified hoc");
        return null;
      } else if (redirect) {
        return <Redirect to="/" />, this.setState();
      }
      return (
        <React.Fragment>
          <ComponentToProtect {...this.props} />
        </React.Fragment>
      );
    }
  };
}
