import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="SEO" icon="ri-search-eye-line" />

                <ServicesItem title="Social Media" icon="ri-linkedin-line" />
              </div>
              <ServicesItem
                title="Content creation"
                icon="ri-pen-nib-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Content</h3>
            <h3 className="mb-4">Better SEO</h3>
            <p>
              I&apos;m Proven SEO and digital marketing professional with a strong track record
of managing social media for 5+ companies. Expertise in crafting highperforming social media strategies and developing engaging content
calendars. Enthusiastic and results-oriented, confident in exceeding
expectations and delivering exceptional performance.

            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
