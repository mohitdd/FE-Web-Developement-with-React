import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap";
import { Loading } from "./LoadingComponent";

function RenderCard({ item, isLoading, errMsg }) {
  console.log("Hello is Loading:" + isLoading);
  if (isLoading) {
    return <Loading></Loading>;
  } else if (errMsg) {
    return <h4>{errMsg}</h4>;
  } else {
    return (
      <Card>
        <CardImg width="100%" src={item.image} alt={item.name}></CardImg>
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? (
            <CardSubtitle>{item.designation}</CardSubtitle>
          ) : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    );
  }
}

function Home(props) {
  console.log("dishes are:" + JSON.stringify(props.dishesLoading));
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.dish}
            isLoading={props.dishesLoading}
            errMsg={props.dishesErrMsg}
          ></RenderCard>
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.promotion}
            isLoading={props.promosLoading}
            errMsg={props.promosErrMess}
          ></RenderCard>
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader}></RenderCard>
        </div>
      </div>
    </div>
  );
}

export default Home;
