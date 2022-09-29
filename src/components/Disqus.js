import React from 'react'
import {DiscussionEmbed} from 'disqus-react'

function DisqusComments({data}) {
    const shortName = 'http-localhost-3000-4ukzfinigy'
    const disqusOptions = {
        url: "http://localhost:3000/content"+data.slug,
        identifier:  data.slug,
        title: data.title
    }
  return (
    <div>
        <DiscussionEmbed 
            shortname={shortName}
            config={disqusOptions}
        />
    </div>
  )
}

export default DisqusComments