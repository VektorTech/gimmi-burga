import styled from 'styled-components';

export const Form = styled.div`
    padding: 2.5rem 5rem;
    text-align: center;
    line-height: 4rem;
`;

export const Name = styled.h2`
    font-size: 2rem;
    margin-bottom: 1rem;
`;

export const Description = styled.p`
    font-size: 1.5rem;
    line-height: 2rem;
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 20rem;
    border-radius: .5rem;
    resize: none;
`;

export const BtnControl = styled.button`
    border: none;
    width: 3rem;
    height: 3rem;
    background-color: #ed6676;
    font-size: 1.5rem;

    &:nth-of-type(2){
        background-color: #51e088;
    }
`;

export const Amount = styled.input`
    border: none;
    width: 3rem;
    height: 3rem;
    text-align: center;
    font-size: 1.5rem;
`;

export const Submit = styled.input`
    border-radius: 1rem;
    width: 15rem;
    height: 5rem;
    margin-top: 1rem;
    font-weight: bold;
    background-color: #e6c212;
    border: none;
`;