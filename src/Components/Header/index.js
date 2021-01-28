import Navigation from './Navigation'
import styled from 'styled-components'


const StyleHeader = styled.header `
background: Beige; 
`

function Header() {
    return (
        <StyleHeader>
            <h2>Header</h2>
            <Navigation />
        </StyleHeader>
    )
}

export default Header
