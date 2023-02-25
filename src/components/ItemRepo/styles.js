import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h3 {
        font-size: 2rem;
    
        width: 90%;
    
        color: #FAFAFA;
    }
    
    p {
        font-size:1rem;
    
        max-width: 90%;
    
        color: #FAFAFA60;
    
        margin-top: 6px;
        margin-bottom: 20px;
    }


    hr {
        color: #FAFAFA60;
        
        width: 30%;
        
        margin: 20px 0;
    }

    button{
        background-color: firebrick;
        color: #FFF;
    
        border: none;
        border-radius: 6px;
    
        width: 10%;
        min-width: 96px;
    
        padding: .5rem 0;
    
        cursor: pointer;
    
        transition: all 250ms;

        &:hover{
            opacity: .75;
        }

    }
`