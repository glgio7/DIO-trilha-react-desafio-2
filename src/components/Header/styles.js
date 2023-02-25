import styled from "styled-components";

export const HeaderContainer = styled.header`
width: 100vw;
height: 60px;

background-color: #101010;

display: flex;
align-items: center;
justify-content: center;

img{
    width: 100%;
}

.header__logo{
    cursor: pointer;

    width: 42px;

    border-radius: 50%;

    margin-right: .5rem;
}

h1{
    cursor: pointer;

    font-size: 2rem;

    margin-left: .5rem;
}
`