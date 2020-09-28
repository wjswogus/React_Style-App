import React from "react";
import styled from "styled-components";

const Section1 = () => {
  const SectionStyle = styled.div`
    margin: 30px 0;
  `;
  const SectionTitleStyle = styled.div`
    padding: 10px 0;
    font-size: 25px;
    font-weight: 800;
    margin: 0 0 20px 0;
  `;

  const Sec1CardBoxStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `;

  const CardStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 3f;
    border: 1px solid rgb(212, 210, 210);
    border-radius: 6px;
    box-shadow: 0 0 3px 0 rgb(172, 170, 170);
  `;

  const CardImg1 = styled.div`
    background-image: url("images/card1.jpg");
    height: 70px;
    background-size: 100% 100%;
  `;

  const CardImg2 = styled.div`
    background-image: url("images/card2.jpg");
    height: 70px;
    background-size: 100% 100%;
  `;

  const CardImg3 = styled.div`
    background-image: url("images/card3.jpg");
    height: 70px;
    background-size: 100% 100%;
  `;

  const CardImg4 = styled.div`
    background-image: url("images/card4.jpg");
    height: 70px;
    background-size: 100% 100%;
  `;

  const CardTextStyle = styled.div`
    display: grid;
    align-items: center;
    font-weight: 600;
    margin: 0 0 0 10px;
  `;

  return (
    <SectionStyle>
      <SectionTitleStyle>에어비앤비 둘러보기</SectionTitleStyle>
      <Sec1CardBoxStyle>
        <CardStyle>
          <CardImg1></CardImg1>
          <CardTextStyle>숙소 및 부티크 호텔</CardTextStyle>
        </CardStyle>
        <CardStyle>
          <CardImg2></CardImg2>
          <CardTextStyle>트립</CardTextStyle>
        </CardStyle>
        <CardStyle>
          <CardImg3></CardImg3>
          <CardTextStyle>어드벤처</CardTextStyle>
        </CardStyle>
        <CardStyle>
          <CardImg4></CardImg4>
          <CardTextStyle>레스토랑</CardTextStyle>
        </CardStyle>
      </Sec1CardBoxStyle>
    </SectionStyle>
  );
};

export default Section1;
