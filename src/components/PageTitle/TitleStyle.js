import styled from "styled-components";

const TitleStyleContainer = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
align-items: end;
`

const TitleStyleComponent = styled.div`

height: 50%;
border-color: #990000;
border-style: solid;
border-width: ${props => props.borderWidth};
width: 100%;
`

function TitleStyle(){

    return(
        <TitleStyleContainer>
            <TitleStyleComponent borderWidth={'0 0 1px 0'}/>
            <TitleStyleComponent borderWidth={'1px 0 0 0'}/>
        </TitleStyleContainer>
    )
}

export default TitleStyle;