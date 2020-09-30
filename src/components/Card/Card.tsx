import React from 'react';
import { Wrapper, Cards, Title, Status, Img, Content } from "./Card.styles";

// id:string,
// name:string,
// status:string,
// species:string,
// type:string,
// gender:string,
// origin:string,
// location:string,
// image:string,
// episode:string,
// url:string,
// created: string

export default function Card(props) {
return (<div>
  <Wrapper>
    <Cards>
      <Title>{props.name}</Title>
      <Status>Status: {props.status}</Status>
      <Img url={props.image} />
      <Content>Species: {props.species}</Content>
      <Content>Gender: {props.gender}</Content>

    </Cards>
  </Wrapper>
  </div>)
}
