import styled, { css } from 'styled-components';
import { HiOutlineLocationMarker, HiOutlineChatAlt2, HiOutlineClock } from 'react-icons/hi';

export const Container = styled.div`
    padding: 48px;
    display: flex;
    flex-direction: column;
    border-top: 1px solid var(--color-border);
`;

export const Title = styled.div`
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: 600;
`;

export const LocationCard = styled.div`
    display: flex;
    align-items: center;
    padding: 7px 0;

    > div {
        margin-left: 8px;
  
    > p {
        font-size: 16px;
    }
    > strong {
        font-size: 14px;
        font-weight: normal;
        color: var(--color-gray);
    } 
    }
`;

const iconCSS = css`
    width: 30px;
    height: 30px;
`;

export const LocationIcon = styled(HiOutlineLocationMarker) `${iconCSS}`;


export const ReputationCard = styled.div`

`;

export const ReputationThermometer = styled.ol`

`;


export const ReputationRow = styled.div`

`;

export const SupportIcon = styled(HiOutlineChatAlt2) `${iconCSS}`;

export const ClockIcon = styled(HiOutlineClock) `${iconCSS}`;

export const More = styled.a`

`;
