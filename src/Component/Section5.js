import React from "react";
import styled from "styled-components";
import Section4 from "./Section4";

const Section5 = () => {
  const SectionStyle = styled.div`
    margin: 30px 0;
  `;

  const SectionTitleStyle = styled.div`
    padding: 10px 0;
    font-size: 25px;
    font-weight: 800;
  `;

  const Sec5CardBoxStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `;

  const Sec5CartStyle = styled.div``;

  const Sec5Img1 = styled.div`
    background-image: url(../images/home1.png);
    height: 180px;
    background-size: 100% 100%;
  `;

  const Sec5Img2 = styled.div`
    background-image: url(../images/home2.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const Sec5Img3 = styled.div`
    background-image: url(../images/home3.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const Sec5Img4 = styled.div`
    background-image: url(../images/home4.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const Sec5Img5 = styled.div`
    background-image: url(../images/home5.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const Sec5Img6 = styled.div`
    background-image: url(../images/home6.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const Sec5Img7 = styled.div`
    background-image: url(../images/home7.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const Sec5Img8 = styled.div`
    background-image: url(../images/home8.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const Sec5CardText = styled.div`
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  `;

  const Sec5CardText1 = styled.div`
    margin: 5px 0;
    font-size: 13px;
    color: gray;
  `;

  const Sec5CardText2 = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: rgb(61, 60, 60);
  `;

  const Sec5CardText3 = styled.div`
    font-size: 12px;
  `;
  return (
    <SectionStyle>
      <SectionTitleStyle>전 세계 숙소</SectionTitleStyle>
      <Sec5CardBoxStyle>
        <Sec5CartStyle>
          <Sec5Img1 />
          <Sec5CardText>
            <Sec5CardText1>오두막 · BALIAN BEACH, BALI</Sec5CardText1>
            <Sec5CardText2>BALIAN TREEHOUSE w beautiful pool</Sec5CardText2>
            <Sec5CardText3>
              <span style={{ color: "rgb(30, 119, 115)" }}>★★★★★</span>
              <span>185</span>
              <span>슈퍼호스트</span>
            </Sec5CardText3>
          </Sec5CardText>
        </Sec5CartStyle>
        <Sec5CartStyle>
          <Sec5Img2 />
          <Sec5CardText>
            <Sec5CardText1>키클라데스 주택 · 이아(OIA)</Sec5CardText1>
            <Sec5CardText2>Unique Architecture Cave House</Sec5CardText2>
            <Sec5CardText3>
              <span style={{ color: "rgb(30, 119, 115)" }}>★★★★★</span>
              <span>188</span>
              <span>슈퍼호스트</span>
            </Sec5CardText3>
          </Sec5CardText>
        </Sec5CartStyle>
        <Sec5CartStyle>
          <Sec5Img3 />
          <Sec5CardText>
            <Sec5CardText1>
              성 · 트웬티나인 팜스(TWENTYNINE PALMS)
            </Sec5CardText1>
            <Sec5CardText2>Tile House</Sec5CardText2>
            <Sec5CardText3>
              <span style={{ color: "rgb(30, 119, 115)" }}>★★★★★</span>
              <span>367</span>
              <span>슈퍼호스트</span>
            </Sec5CardText3>
          </Sec5CardText>
        </Sec5CartStyle>
        <Sec5CartStyle>
          <Sec5Img4 />
          <Sec5CardText>
            <Sec5CardText1>검증됨 · 케이프타운</Sec5CardText1>
            <Sec5CardText2>
              Modern, Chic Penthouse with Mountain, City & Sea Views
            </Sec5CardText2>
            <Sec5CardText3>
              <span style={{ color: "rgb(30, 119, 115)" }}>★★★★★</span>
              <span>177</span>
              <span>슈퍼호스트</span>
            </Sec5CardText3>
          </Sec5CardText>
        </Sec5CartStyle>
        <Sec5CartStyle>
          <Sec5Img5 />
          <Sec5CardText>
            <Sec5CardText1>아파트 전체 · 마드리드(MADRID)</Sec5CardText1>
            <Sec5CardText2>솔광장에 위치한 개인 스튜디오</Sec5CardText2>
            <Sec5CardText3>
              <span style={{ color: "rgb(30, 119, 115)" }}>★★★★★</span>
              <span>459</span>
              <span>슈퍼호스트</span>
            </Sec5CardText3>
          </Sec5CardText>
        </Sec5CartStyle>
        <Sec5CartStyle>
          <Sec5Img6 />
          <Sec5CardText>
            <Sec5CardText1>집 전체 · HUMAC</Sec5CardText1>
            <Sec5CardText2>
              Vacation house in etno-eco village Humac
            </Sec5CardText2>
            <Sec5CardText3>
              <span style={{ color: "rgb(30, 119, 115)" }}>★★★★★</span>
              <span>119</span>
              <span>슈퍼호스트</span>
            </Sec5CardText3>
          </Sec5CardText>
        </Sec5CartStyle>
        <Sec5CartStyle>
          <Sec5Img7 />
          <Sec5CardText>
            <Sec5CardText1>개인실 · 마라케시</Sec5CardText1>
            <Sec5CardText2>The Cozy Palace</Sec5CardText2>
            <Sec5CardText3>
              <span style={{ color: "rgb(30, 119, 115)" }}>★★★★★</span>
              <span>559</span>
              <span>슈퍼호스트</span>
            </Sec5CardText3>
          </Sec5CardText>
        </Sec5CartStyle>
        <Sec5CartStyle>
          <Sec5Img8 />
          <Sec5CardText>
            <Sec5CardText1>게스트용 별채 전체 · 로스앤젤레스</Sec5CardText1>
            <Sec5CardText2>
              Private Pool House with Amazing Views!
            </Sec5CardText2>
            <Sec5CardText3>
              <span style={{ color: "rgb(30, 119, 115)" }}>★★★★★</span>
              <span>170</span>
              <span>슈퍼호스트</span>
            </Sec5CardText3>
          </Sec5CardText>
        </Sec5CartStyle>
      </Sec5CardBoxStyle>
    </SectionStyle>
  );
};

export default Section5;
