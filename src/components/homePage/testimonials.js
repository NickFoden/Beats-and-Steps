import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Testimonial from "../testimonial/testimonial";
import classes from "../../styles/pages/homePage/testimonials.module.scss";

const getImages = graphql`
  {
    One: file(name: { eq: "dummy-test" }) {
      childCloudinaryAsset {
        fixed(
          width: 100
          transformations: ["ar_1:1", "c_thumb", "g_face", "r_max"]
        ) {
          ...CloudinaryAssetFixed
        }
      }
    }
    Two: file(name: { eq: "dummy-test" }) {
      childCloudinaryAsset {
        fixed(
          width: 100
          transformations: ["ar_1:1", "c_thumb", "g_face", "r_max"]
        ) {
          ...CloudinaryAssetFixed
        }
      }
    }
    Three: file(name: { eq: "dummy-test" }) {
      childCloudinaryAsset {
        fixed(
          width: 100
          transformations: ["ar_1:1", "c_thumb", "g_face", "r_max"]
        ) {
          ...CloudinaryAssetFixed
        }
      }
    }
    Four: file(name: { eq: "dummy-test" }) {
      childCloudinaryAsset {
        fixed(
          width: 100
          transformations: ["ar_1:1", "c_thumb", "g_face", "r_max"]
        ) {
          ...CloudinaryAssetFixed
        }
      }
    }
  }
`;

const Testimonials = () => {
  const data = useStaticQuery(getImages);

  const parentOne = {
    quote:
      "Beats and Steps is the coolest Music and Dance Academy in the whole world.",
    name: "Parent of Jane - Mrs Magoo",
    alt: "Jane - Daughter of Mrs Magoo and Beats & Steps Student",
    fixed: data.One.childCloudinaryAsset.fixed,
  };
  const parentTwo = {
    quote: "Wow, what an amazing Music and Dance Academy.",
    name: "Parent of Lucy - Mrs McGonnigal",
    alt: "Lucy - Daughter of Mrs McGonnigal and Beats & Steps Student",
    fixed: data.Two.childCloudinaryAsset.fixed,
  };
  const parentThree = {
    quote: "Yes, Beats and Steps is the real shiznit.",
    name: "Parent of Procopio - Mrs Wunderblitzen",
    alt: "Procopio - Son of Mrs Wunderblitzen and Beats & Steps Student",
    fixed: data.Three.childCloudinaryAsset.fixed,
  };
  const parentFour = {
    quote: "I can't believe how amazing Beats and Steps is.",
    name: "Parent of Bertram - Mrs Lonnigan",
    alt: "Bertram - Son of Mrs Lonnigan and Beats & Steps Student",
    fixed: data.Four.childCloudinaryAsset.fixed,
  };

  return (
    <section className="sectionContainer">
      <h2 className={classes.title}>What people are saying about us!</h2>
      <ul className={classes.testimonialsContainer}>
        <Testimonial
          quote={parentOne.quote}
          name={parentOne.name}
          alt={parentOne.alt}
          fixed={parentOne.fixed}
        />
        <Testimonial
          quote={parentTwo.quote}
          name={parentTwo.name}
          alt={parentTwo.alt}
          fixed={parentTwo.fixed}
        />
        <Testimonial
          quote={parentThree.quote}
          name={parentThree.name}
          alt={parentThree.alt}
          fixed={parentThree.fixed}
        />
        <Testimonial
          quote={parentFour.quote}
          name={parentFour.name}
          alt={parentFour.alt}
          fixed={parentFour.fixed}
        />
      </ul>
    </section>
  );
};

export default Testimonials;
