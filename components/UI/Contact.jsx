import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>
            <p>
              If you&apos;re interested in working with me or learning more
              about my services, please don&apos;t hesitate to get in touch! You
              can contact me or email to me
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Tamil Nadu, India</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>ansaritrichy2002@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+91 70101 94031</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="https://x.com/KMANSARI20">
                <i className="ri-twitter-line"></i>
              </Link>
              <Link href="https://www.linkedin.com/in/k-thamimul-ansari-2818b31b5/">
                <i className="ri-linkedin-line"></i>
              </Link>
              <Link href="https://www.instagram.com/km.ansari.980/">
                <i className="ri-instagram-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
