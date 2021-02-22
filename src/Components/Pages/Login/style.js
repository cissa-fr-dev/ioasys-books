import styled from 'styled-components';
import LightLogo from '../../../Assets/Images/LightLogo.png';
import img from '../../../Assets/Images/BackgroundImage.png';

export const BackgroundImage = styled.div` 
    width: 100%;
    background-size: cover;
    background-position: center;
    background-image: url(${img}); 
	font-family: 'Heebo', sans-serif;
	font-style: normal;
    display: flex;
    flex: 1;
    justify-content: center;     
    align-items: center;    
   
    @media screen and (max-width: 700px) {    
        &:after {
            content: "";
            background-size: cover;
            background-position: center;
            background-image: url(${img});
            display: flex;
            flex: 1;
            justify-content: center;     
            align-items: center;       
        }
    }
`;

export const Content = styled.div`    
    width: 80%;
    margin-left: 10%;
    display: flex;
    height: 100vh;     
    align-items: center;  
    form {
        max-width: 300px;
        display: flex;
        flex-direction: column;
    }      
`;

export const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    margin-bottom: 25px;
`;

export const Img = styled.img.attrs({
    src: (`${LightLogo}`)
})`
   height:30px;
`;

export const Input = styled.input`
    height: 60px;   
    background: rgba(0, 0, 0, 0.32);
    border-radius: 4px;
    border: none; 
    outline: none;
    color: white;
    padding: 10px;
    width: 100%;

    :nth-child(1){
        background: transparent;
    }

    ::placeholder{    
        height: 100px;
        color: white;
        opacity: 0.5;
        font-size: 12px;
        line-height: 16px;
    };

    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
        -webkit-text-fill-color: white;
    }

    :focus {
        outline: none;
        color: white;
    };  
`;

export const Label = styled.label`
    color: white;
    outline: none;
    margin-top: 0px;
    top: -50%;
    z-index: 2;
    transition: 0.2s; 
    padding: 8px 10px;
`;

export const Button = styled.button`
    cursor: pointer;
    position: relative;
    height: 35px;
    width: 100px;
    background: #FFFFFF;
    border-radius: 44px;
    font-weight: 600;
    border: none; 
    color: #B22E6F;
    margin-right: 15px;

    :focus {
        outline: none;
    };

    :hover{
        box-shadow: rgb(50 40 44) 5px 3px 15px;
        transition: 0.4s;
    }
`;

export const Title = styled.h1`
    color: #ffffff;
    margin-left: 10px;
    font-weight: 300;
    font-size: 28px;
    line-height: 48px;
    width: 77px;
    height: 40px;
    left: 236px;
    top: 272px;
`;