import React from "react";
import styled from "styled-components";

const Search = () => {
  const SearchStyle = styled.div`
    width: 430px;
    height: 500px;
    display: inline-block;
    background-color: white;
    position: relative;
    top: 10px;
    left: 50px;
    border-radius: 6px;
    box-shadow: 0 2px 2px 0 rgb(214, 214, 214);
    padding: 20px 30px;
  `;

  const SearchTitleStyle = styled.div`
    padding: 10px 0;
    font-size: 30px;
    font-weight: 800;
    color: rgb(70, 70, 70); ;
  `;

  const SubTitleStyle = styled.td`
    padding: 10px 0;
    font-size: 16px;
    font-weight: 600;
  `;

  const SearchInputStyle = styled.input`
    height: 45px;
    width: 100%;
    color: rgb(100, 98, 98);
    font-size: 15px;
    border: 1px solid rgb(230, 227, 227);
  `;

  const SearchSelectStyle = styled.select`
    height: 45px;
    width: 100%;
    color: rgb(100, 98, 98);
    font-size: 15px;
    border: 1px solid rgb(230, 227, 227);
  `;

  const SearchButtonBoxStyle = styled.div`
    display: grid;
    grid-template-columns: auto;
    justify-content: end;
    padding: 10px 0px;
  `;

  const SearchButtonStyle = styled.button`
    background-color: rgb(255, 90, 95);
    color: white;
    width: 70px;
    height: 45px;
    font-size: 15px;
    font-weight: 700;
    border-radius: 6px;
    border: 0;
    cursor: pointer;
  `;

  return (
    <SearchStyle>
      <SearchTitleStyle>
        특색 있는 숙소와 즐길 <br /> 거리를 예약하세요.
      </SearchTitleStyle>
      <table style={{ width: "100%" }}>
        <tr>
          <SubTitleStyle colSpan="2">목적지</SubTitleStyle>
        </tr>
        <tr>
          <td colSpan="2">
            <SearchInputStyle type="text" placeholder="모든 위치" />
          </td>
        </tr>
        <tr>
          <SubTitleStyle>체크인</SubTitleStyle>
          <SubTitleStyle>체크아웃</SubTitleStyle>
        </tr>
        <tr>
          <td>
            <SearchInputStyle type="date" />
          </td>
          <td>
            <SearchInputStyle type="date" />
          </td>
        </tr>
        <tr>
          <SubTitleStyle colSpan="2">인원</SubTitleStyle>
        </tr>
        <tr>
          <SubTitleStyle colSpan="2">
            <SearchSelectStyle>
              <option>인원</option>
            </SearchSelectStyle>
          </SubTitleStyle>
        </tr>
      </table>
      <SearchButtonBoxStyle>
        <SearchButtonStyle>검색</SearchButtonStyle>
      </SearchButtonBoxStyle>
    </SearchStyle>
  );
};

export default Search;
