import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const Container = styled('div')`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;

    @media (min-width: 768px) and (max-width:991px) {
        grid-template-columns: repeat(5, 1fr);
    }
    @media (min-width: 992px) {
        grid-template-columns: repeat(9, 1fr);
    }
`

export default ({posts}) => {
    return (
    <Container className='grid'>
        {
            posts.map((item, i) => {
                let captionText = item.node.caption? deleteTags(item.node.caption) : "Instagram Post"
                //Check for missing images
                return (
                    item.node.localFile? <Image fluid={item.node.localFile.childImageSharp.fluid} key={i} caption={captionText} />  : <div></div>
                )
            }) 
        }
    </Container>
   )
}

function deleteTags(text) {
    return  text.replace(/^(\s*#\w+\s*)+$/gm, "")
}
