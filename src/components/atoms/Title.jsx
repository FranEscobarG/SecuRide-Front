import styled from "styled-components";

const StyledTitle = styled.h2`
    font-size: 5rem;
    .textColor{
        color: #ff003c;
        text-shadow:  1px 1px 1px #41000f, 3px 3px 6px #820925;
    }
`;

function Title({text, textColor}) {
    return ( 
        <StyledTitle>{text} <span className="textColor">{textColor}</span> </StyledTitle>
     );
}

export default Title;