import styled from "styled-components";

import { InfoLargeOutline } from '@styled-icons/typicons/InfoLargeOutline'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  position: relative;

  height: 100vh;

  color: var(--font);

  font-weight: 700;
  font-size: 78px;

  > span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;

      position: absolute;
      top: 50px;
      right: 50px;

      padding: 15px;

      font-size: 12px;

      border-radius: 10px;
      background: var(--background-sec);
  }

  > span .tooltip {
    display: none;
  }

  

  > span:hover .tooltip {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;

      position: absolute;
      right: 35px;

      padding: 15px;

      font-size: 12px;
      white-space: nowrap;

      border-radius: 10px 0 0 10px;
      background: var(--background-sec);
  }
`

export const InfoIcon = styled(InfoLargeOutline)`
  width: 13.8px;
  height: 13.8px;
`