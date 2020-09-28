import React from "react";
import styled from "styled-components";

const Section2 = () => {
  const SectionStyle = styled.div`
    margin: 30px 0;
  `;
  const AdImgStyle1 = styled.div`
    border-radius: 20px;
    margin: 40px 0;
    background-image: url("images/ad1.jpg");
    height: 350px;
    background-size: 100% 100%;
  `;

  return (
    <SectionStyle>
      <AdImgStyle1 />
    </SectionStyle>
  );
};

export default Section2;
