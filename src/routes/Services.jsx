import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "../styles/Services.css"; // Your custom styles
import Logo from "../images/logo.jpg";

const Services = () => {
  const services = [
    {
      name: "Management",
      link: "/management",
      description:
        "We will concentrate on collaborating closely with management to make all essential decisions necessary for enhancing productivity and minimizing gaps in the chain of command.",
      image: "https://www.deanza.edu/cis/pm/images/pm-header-2.jpg",
    },
    {
      name: "Human Resources",
      link: "/humanresources",
      description:
        "In today's era, innovative technologies are being leveraged to transform human resources into a valuable asset for companies. We are committed to creating a carefully designed and diverse workplace to enhance productivity.",
      image:
        "https://lsuonline-static.s3.amazonaws.com/media/images/2021/06/18/PDV_2021_NewsroomLg_Human_Resources_Specialist.jpg",
    },
    {
      name: "Accounting",
      link: "/accounting",
      description:
        "Operational accounting plays a crucial role in providing real-time insights into the company's financial health. We are dedicated to enhancing our reporting and bookkeeping practices to align seamlessly with your company's specific needs",
      image:
        "https://marvel-b1-cdn.bc0a.com/f00000000299134/www.bentley.edu/sites/default/files/styles/media_image_xl/public/2021-08/financial%20accounting.jpg?h=28decbfb&itok=ki4V-hOM",
    },
    {
      name: "Data Analysis",
      link: "/data-analysis",
      description:
        "We will develop dynamic dashboards that provide your company's decision-makers with comprehensive data, enabling them to make well-informed decisions at the right time.",
      image:
        "https://lpsonline.sas.upenn.edu/sites/default/files/2022-10/plpso-feratures-data-business.jpg",
    },
    {
      name: "Training & Development",
      link: "/training",
      description:
        "Training should not be viewed merely as a box-ticking exercise. Its purpose is to enhance skills and provide learning opportunities, empowering teams to achieve their highest personal and business productivity",
      image:
        "https://keydifferences.com/wp-content/uploads/2015/04/Training-Vs-Development1.jpg",
    },
    {
      name: "Compliance",
      link: "/compliance",
      description:
        "Compliance with regulations is essential for every business. We will conduct confidential internal audits to ensure that your agency adheres to all rules and regulations, and offer recommendations for sustained compliance in the future.",
      image:
        "https://reciprocity.com/wp-content/uploads/2019/01/compliance-automation-768x431.jpg",
    },
    {
      name: "Web & App Developing",
      link: "/web-developing",
      description:
        "We provide a range of web development services, from creating static websites to offering comprehensive full-stack web and app development, ensuring the smooth operation of your business activities.",
      image:
        "https://uploads-ssl.webflow.com/615af81f65d1ab72d2969269/62efdf9840dca733692cdd48_web%20dev%20basics.jpg",
    },
    {
      name: "Start Ups",
      link: "/startup",
      description:
        "If you're embarking on a new business venture and facing the challenges of startup growth, we are here to assist you in making cost-efficient and effective decisions.",
      image:
        "https://d3o1wlpkmt4nt9.cloudfront.net/wp-content/uploads/2018/03/22130514/what-is-a-startup-6-min.jpg",
    },
    {
      name: "Bundle",
      link: "/bundle",
      description:
        "Old Alex Hub provides a comprehensive package of all the previously mentioned services at a reduced price. You have the option to select either a flat-rate contract or a pay-as-you-go agreement. Whichever you choose, we are committed to ensuring your business thrives!",
      image: `${Logo}`,
    },
  ];

  return (
    <div className="services-container">
      <div className="logo-center">
        <h1>List of Services</h1>
      </div>
      <div className="services row">
        {services.map((service) => (
          <div className="col-md-4 mb-4" key={service.name}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={service.image}
                style={{ height: "auto", width: "auto" }}
              />
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Link to={service.link} className="stretched-link">
                  <Button variant="primary">Learn More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
