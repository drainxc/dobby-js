import Time from "../../Common/Time";
import * as S from "./styles";

export default function Dobby() {
  return (
    <>
      <S.MainDiv>
        <S.Title>병진이형의 전역 날짜까지..</S.Title>
        <Time />
      </S.MainDiv>
    </>
  );
}
