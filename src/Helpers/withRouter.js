import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const withRouter = (ParentComponent) => (props) => {
    
    const params = useParams();

    const searchParams = useSearchParams();  //array

    return <ParentComponent {...props} params={params} search={searchParams} />;
}

export default withRouter;
