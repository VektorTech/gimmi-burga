import styled from 'styled-components';

export const Form = styled.div`
    padding: 3rem;
    text-align: center;
    line-height: 2rem;
`;

export const Name = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

export const Description = styled.p`
    font-size: 1rem;
    line-height: 1rem;
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 15rem;
    border-radius: .5rem;
    resize: none;
`;

export const BtnControl = styled.button`
    border: none;
    width: 2rem;
    height: 2rem;
    background-color: #ed6676;

    &:nth-of-type(2){
        background-color: #51e088;
    }
`;

export const Amount = styled.input`
    border: none;
    width: 2rem;
    height: 2rem;
    text-align: center;
`;

export const Submit = styled.input`
    border-radius: 1rem;
    width: 10rem;
    height: 3rem;
    margin-top: 1rem;
    background-color: #e6c212;
    border: none;
`;