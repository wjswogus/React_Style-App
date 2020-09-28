import React from "react";
import styled from "styled-components";

const Section4 = () => {
  const SectionStyle = styled.div`
    margin: 30px 0;
  `;
  const SectionTitleStyle = styled.div`
    padding: 10px 0;
    font-size: 25px;
    font-weight: 800;
  `;
  const AdImgStyle = styled.div`
    background-image: url("images/ad2.png");
    background-size: 100% 100%;
    height: 300px;
    margin: 20px 0;
  `;

  return (
    <SectionStyle>
      <SectionTitleStyle>에어비앤비 플러스를 만나보세요!</SectionTitleStyle>
      <div>퀄리티와 인테리어 디자인이 검증된 숙소 셀렉션</div>
      <AdImgStyle />
    </SectionStyle>
  );
};

export default Section4;
