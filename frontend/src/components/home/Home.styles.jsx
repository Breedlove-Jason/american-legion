import styled from "styled-components";
import { Image } from "react-bootstrap";

export const SectionTitle = styled.h1`
    font-size: 2rem;
    color: #ffffff;
    text-align: center;
    margin-bottom: 20px;

    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
`;

export const ContentContainer = styled.div`
    padding: 20px;
    background-color: rgba(15, 37, 55, 0.8);
    border-radius: 10px;
    margin-bottom: 20px;

    @media (max-width: 600px) {
        padding: 10px;
    }
`;

export const StyledImage = styled(Image)`
    width: 100%;
    height: auto;
    margin-bottom: 15px;
    border-radius: 10px;
`;

export const BottomText = styled.p`
    position: relative;
    bottom: 0;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    margin: 0;
    width: 100%;
    text-align: left;
    font-size: 18px;
    z-index: 1;
    border: 1px solid #000;
    border-radius: 15px;

    @media (max-width: 600px) {
        font-size: 16px;
        padding: 5px;
    }
`;

export const PageTitle = styled.h1`
    font-size: 3.5rem;
    color: #ffffff;
    text-align: center;
    margin-bottom: 20px;

    @media (max-width: 600px) {
        font-size: 2.5rem;
    }
`;

export const StyledLink = styled.a`
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: #ff6347; /* Change to a different color on hover */
    }
`;