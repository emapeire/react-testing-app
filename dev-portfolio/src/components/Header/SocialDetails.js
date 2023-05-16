import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { Div3, SocialIcons } from "./HeaderStyles";
import { socialUrls } from "../../constants/socialUrls";

const SocialDetails = () => {
  return (
    <>
      <Div3>
        <SocialIcons href={socialUrls.github}>
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href={socialUrls.twitter}>
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
        <SocialIcons href={socialUrls.instagram}>
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
    </>
  )
};

export default SocialDetails;
