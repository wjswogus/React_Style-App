import React from "react";
import styled from "styled-components";

const Section1 = () => {
  const SectionTitleStyle = styled.div`
    padding: 10px 0;
    font-size: 20px;
    font-weight: 800;
  `;

  return (
    <div>
      <SectionTitleStyle>에어비앤비 둘러보기</SectionTitleStyle>
      <div>
        <div>숙소 및 부티크 호텔</div>
        <div>트립</div>
        <div>어드벤처</div>
        <div>레스토랑</div>
      </div>
    </div>
  );
};

export default Section1;
