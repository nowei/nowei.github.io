// tslint:disable:max-line-length

import * as React from "react";
import { Link } from "react-router-dom";

export class NotFoundPage extends React.Component {
  public componentDidMount() {
    document.title = "Not found";
  }

  public render() {
    return (
      <div>
        <h1>Page not found</h1>
        <p>The page you requested could not be found.</p>
        <p>
          <Link to="/">Home</Link>
        </p>
      </div>
    );
  }
}

export default NotFoundPage;
