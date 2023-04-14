import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client":

const SPACE_QUERY = gql`{
  query missionsResult {
    result {
      totalCount
    }
  launchNext {
      mission_name
    }
  }
}`

const { data, loading } = useQuery(SPACE_QUERY);

export default Test = () => {
  return(
    <div>{data}</div>
  )
}
