import React from "react";
import { Container, Row, Col } from "reactstrap";
import profile from "../test-data/profile.json";
import { Media } from "reactstrap";

class AccountInfo extends React.Component {
  render() {
    return <Container>
      <Row>
        <Col>
          {profile.map(function (profile, i) {

            return (
              <div key={i}>
                <Media>
                  {/* <Media left top href={experience.url}>
                    <Media object src={experience.logo} alt={experience.companyName}/>
                  </Media> */}
                  <Media body>
                    <Media heading>
                      <a>{profile.UserName}</a>
                      <span className="jobTotalDuration">{profile.Email}</span>
                    </Media>
                  </Media>
                </Media>
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  }
}

export default AccountInfo;