import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProps(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return (
      <Component
        {...props}
        // location={location}
        // navigate={navigate}
        // params={params}
        router = {{location, navigate, params}}
      />
    );
  }
  return ComponentWithRouterProps;
}
export default withRouter;
