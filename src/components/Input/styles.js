import styled from "styled-components";

export const InputContainer = styled.div`

    border: 1px solid #FAFAFA;
    border-radius: 20px;

    height: 54px;
    width: 70%;

    input {
        background: transparent;
        color: #FFFFFF;
        
        border: none;
        width: 100%;
        height: 54px;
        
        text-align: center;
        font-size: 20px;
        
        &:focus{
            outline: none;
        }
        
    }

`