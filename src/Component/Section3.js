import React from "react";
import styled from "styled-components";

const Section3 = () => {
  const SectionStyle = styled.div`
    margin: 30px 0;
  `;
  const SectionTitleStyle = styled.div`
    padding: 10px 0;
    font-size: 25px;
    font-weight: 800;
    margin: 0 0 20px 0;
  `;

  const Sec3CardBoxStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `;

  const Sec3Card1 = styled.div`
    background-image: url(../images/choo1.png);
    height: 250px;
    background-size: 100% 100%;
  `;
  const Sec3Card2 = styled.div`
    background-image: url(../images/choo2.png);
    height: 250px;
    background-size: 100% 100%;
  `;
  const Sec3Card3 = styled.div`
    background-image: url(../images/choo3.png);
    height: 250px;
    background-size: 100% 100%;
  `;
  const Sec3Card4 = styled.div`
    background-image: url(../images/choo4.png);
    height: 250px;
    background-size: 100% 100%;
  `;
  const Sec3Card5 = styled.div`
    background-image: url(../images/choo5.png);
    height: 250px;
    background-size: 100% 100%;
  `;
  return (
    <SectionStyle>
      <SectionTitleStyle>추천 여행지</SectionTitleStyle>
      <Sec3CardBoxStyle>
        <Sec3Card1 />
        <Sec3Card2 />
        <Sec3Card3 />
        <Sec3Card4 />
        <Sec3Card5 />
      </Sec3CardBoxStyle>
    </SectionStyle>
  );
};

export default Section3;
