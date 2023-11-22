import styled from "styled-components";

const StyledCaption = styled.h4`
    font-family: 'Bai Jamjuree', sans-serif;
    font-size: 2.6rem;
    font-weight: 500;
    margin-bottom: 2.4rem;
`;

function Caption({msn}) {
    return ( 
        <StyledCaption>{msn}</StyledCaption>
     );
}

export default Caption;