import { Label } from "../form/form.style";
import {
  WrapContents,
  ProductTitle,
  ProductName,
  ProductPrice,
  ProductLocation,
  ProductImage,
  ProductTag,
  WrapSpan,
  WrapProductTag,
  ProductContainer,
} from "./campsiteFeed.style";

export default function Feed() {
  return (
    <>
      <ProductContainer>
        <ProductTitle>님의 캠핑장</ProductTitle>
        <WrapContents>
          <ProductImage src="https://i.namu.wiki/i/6o7twe3AB4CC5z3C-LvW3P5cpe9V8KKqbzH3W4EKUgDqMMLMlaB3UvOyw3Y14kHQmZRNLFjCQcPVVqM72vCvYZXnPvMAyziYUNcbx6PWwU6TT8QLff7hyZBkz0Tlkmx3dUAACNOyd2ksEoGakhcSnQ.webp" />
          <WrapSpan>
            <ProductName>님의 캠핑장</ProductName>
            <ProductPrice>가격</ProductPrice>
            <ProductLocation>위치</ProductLocation>
            <WrapProductTag>
              <Label>태그입니다</Label>
              <Label>입니다</Label>
            </WrapProductTag>
          </WrapSpan>
        </WrapContents>
      </ProductContainer>
    </>
  );
}
