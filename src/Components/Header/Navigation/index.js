import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const StyledUl = styled.ul`
display: flex;
flex-direction:column;
align-items: center;
list-style: none;

li, li a {
  padding: 10px;
  text-decoration: none;
}

li a {
  text-decoration: none;
}
li a:link, li a:visited  {
  color: black;
}

  li a:hover {  
    color: orange;
}
`
function index() {
    return (
        <StyledUl>
          <li>
            <Link to = '/' > Home </Link>
          </li>

          <li><Link to = '/about' > About </Link>
          </li>

          <li><Link to = '/contact' > Contact </Link>
          </li>

          <li>
          <Link to = '/projects' > Projects</Link>  
          </li>

        </StyledUl>
    )
}

export default index
