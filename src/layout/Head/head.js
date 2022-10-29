import React from 'react'
import { Helmet } from "react-helmet"

function Head({...props}) {
  return (
    <Helmet>
        <title>{props.title} - News, Journals, Lifestyle, Politics, Busniess, Sport</title>
        <meta property="og:title" content="meta-title"/>
        <meta property="og:description"   content={props.desc ? props.desc : ""} />
        <meta property="og:image" content={props.image ? props.image : ""} />
        <meta property="og:url" content={props.url ? props.url : ""} />
        <meta property="og:type" content={props.type ? props.type : ""} />
    </Helmet>
  )
}

export default Head