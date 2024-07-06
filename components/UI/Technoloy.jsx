import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import classes from "../../styles/technology.module.css";
import TechnologyItemCard from "./TechnologyItemCard";

export default function Technoloy() {
  return (
    <section id="skills" className={`${classes.technology}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="12" md="12">
            <div className={`${classes.technology__content}`}>
              <SectionSubtitle subtitle="Skills" />
            </div>
            <div className={`${classes.technology__card}`}>
              <TechnologyItemCard
                cardTitle={"Meta Ads"}
                cardDec={"I have 2 years of experience in Meta Ads"}
                iconName={"ri-facebook-line"}
              />

              <TechnologyItemCard
                cardTitle={"Semrush"}
                cardDec={"I have 1 years of experience in Semrush"}
                iconName={"ri-links-line"}
              />

              <TechnologyItemCard
                cardTitle={"Keyword planer"}
                cardDec={"I have 1 years of experience in Keyword planer"}
                iconName={"ri-article-line"}
              />
              <TechnologyItemCard
                cardTitle={"Zoho social"}
                cardDec={"I have 1 years of experience in Zoho social"}
                iconName={"ri-bar-chart-grouped-line"}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
