import React from "react";
import { Route as ReactRouter, Redirect } from "react-router-dom";
import { Footer, Header, Layout } from "../components";

const PrivateRoute = props => {
  const isAuthorized = true;
  if (!isAuthorized) return <Redirect to="/404" />;
  const withoutHeaderAndFooter = props.withoutHeaderAndFooter;
  const schema = (
    <React.Fragment>
      {!withoutHeaderAndFooter && <Header />}
      <ReactRouter {...props} />
      {!withoutHeaderAndFooter && <Footer />}
    </React.Fragment>
  );
  if (props.withoutLayout) return schema;
  return <Layout>{schema}</Layout>;
};

export default PrivateRoute;
