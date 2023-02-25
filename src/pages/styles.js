import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 90vh;
    
    display:flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 100%;
    }

    .search-box{
        margin: 1rem 0;
        
        width: 50%;
        
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .profile-box{
        width: 100%;
        
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        
        text-align: center;
        
        padding: 1rem 0;
    }

    .profile-box__name{
        margin-top: .5rem;
    }

    .profile-box p {
        margin-top: .5rem;

        font-weight: normal;
    }

    .profile-box__logo{
        width: 100%;
        
        img{
        width: 96px;

        border-radius: 50%;

    }}

    .profile-box hr{
        margin: 1rem 0;

        width: 90%;
    }

    .repositorios-box{
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        
        text-align: center;

    }

    h4{
        margin-bottom: 1rem;
    }

    a{
        text-decoration: none;
        
        color: #00ccaf;
        
        transition: all 250ms;
        
        &:hover{
        opacity: .8;}
    }
`