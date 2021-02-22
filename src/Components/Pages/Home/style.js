import styled from 'styled-components';
import img from '../../../Assets/Images/FirstBackground.png';
import DarkLogo from '../../../Assets/Images/DarkLogo.png';

export const BackgroundImage = styled.div`  
    background-size: cover;
    background-position: center;
    background-image: url(${img}); 
	font-family: 'Heebo', sans-serif;
	font-style: normal;
`;

export const Content = styled.div`    
    height: 100%;
    width: 80%;
    margin-left: 10%;
`;

export const Img = styled.img.attrs({
    src: (`${DarkLogo}`)
})`
   height:30px;
`;

export const Header = styled.div`
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
`;

export const List = styled.div`
    width: 100%;
    height: 60%;   
    display: flex;
    flex-wrap: wrap;
`;

export const Title = styled.h1`
    color: #333333;
    margin-left: 10px;
    font-weight: 300;
    font-size: 28px;
    line-height: 40px;
    width: 77px;
    height: 40px;
    left: 236px;
    top: 272px;
`;

export const Card = styled.div`
    height: 150px;
    display: flex;
    margin: 10px;
    max-width: 100%;
    flex: 1 1 200px;
    background: #FFFFFF;
    box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
    border-radius: 4px;

    :hover{
        cursor: pointer;
        box-shadow: rgb(84 16 95 / 40%) 0px 10px 24px;
        transition: height 1s;
    }
`;

export const BookTitle = styled.h1`
    height: 20px;
    left: 228px;
    top: 136px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: rgba(51, 51, 51, 1);
`;

export const Author = styled.h3`
    width: 98px;
    height: 20px;
    left: 228px;
    top: 156px;
    font-size: 12px;
    line-height: 20px;
    color:rgba(171, 38, 128, 1);
`;

export const Informations = styled.a`
    font-size: 12px;
    line-height: 16px;
    color: #999999;
    display: flex;
    margin-top: 14px;
`;

export const ModalBody = styled.div`
	position: relative;
	flex: 1 1 auto;
	padding: 1rem;
`;

export const SignOutButton = styled.button`
    border: solid 1px rgba(51, 51, 51, 0.2);
    background: transparent;
    border-radius: 20px;
    height: 27px;
    color: #3333338a;
    `;