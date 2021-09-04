import React from "react";
import queryString, { parse } from "query-string";
// match below is desrturcured fromobject PaymentResponse, instead of props.match
const Posts = ({ match, location }) => {
  const result = queryString.parse(location.search);
  console.log(result);
  return (
    <div>
      <h1>Posts</h1>
      Year: {match.params.year} , Month:{match.params.month}
    </div>
  );
};

export default Posts;
