import React, { Component } from 'react';
import { Card, CardImg, cardText, CardBody, CardTitle,} from "reactstrap";

class CampsiteInfo extends Component {
  renderCampsite(campsite) {
   render() {
    if (this.props.campsite) {
      return (
        <div className="row">
          {this.renderCampsite(this.props.campsite)}
          {this.renderComments(this.props.campsite.comments)}
        </div>
      );
    }
    return <div />;
  }

    return (
      <div className="col-md-5 m-1">
        <card>
          <cardImg top src={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <cardText>{campsite.description}</cardText>
          </CardBody>
        </card>
      </div>
    );
  }
  renderComments(comments) {
    if (comments) {
      return (
        <div className="col-md-5 m-1">
          <h4>Comments</h4>
          {comments.map((comment) => {
            return (
              <div key={comment.id}>
                <p>
                  {comment.text}
                  <br />
                  -- {comment.author},{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </div>
            );
          })}
        </div>
      );
    }
    return <div />;
  }
}
export default CampsiteInfo;
