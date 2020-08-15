import React from "react";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  TwitterShareButton,
  RedditShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  FacebookMessengerIcon,
  TwitterIcon,
  RedditIcon,
  TelegramIcon,
  WhatsappIcon,
} from "react-share";

function Share({ score }) {
  //Sharing not working everywhere while in localhost
  const url = window.location.origin;
  const msg = `Come and beat me ! My highest score: ${score} points !`;
  const sizeIcon = 45;
  return (
    <div className="Share">
      <div className="Share__Text">
        <h3>Share Your Score</h3>
      </div>
      <div className="Share__Content">
        <FacebookShareButton
          url={url}
          quote={msg}
          className="Share__Content__Button"
        >
          <FacebookIcon size={sizeIcon} round={true} />
        </FacebookShareButton>
        <FacebookMessengerShareButton
          url={url}
          className="Share__Content__Button"
        >
          <FacebookMessengerIcon size={sizeIcon} round={true} />
        </FacebookMessengerShareButton>
        <TwitterShareButton
          url={url}
          title={msg}
          className="Share__Content__Button"
        >
          <TwitterIcon size={sizeIcon} round={true} />
        </TwitterShareButton>
        <RedditShareButton
          url={url}
          title={msg}
          className="Share__Content__Button"
        >
          <RedditIcon size={sizeIcon} round={true} />
        </RedditShareButton>
        <TelegramShareButton
          url={url}
          title={msg}
          className="Share__Content__Button"
        >
          <TelegramIcon size={sizeIcon} round={true} />
        </TelegramShareButton>
        <WhatsappShareButton
          url={url}
          title={msg}
          className="Share__Content__Button"
        >
          <WhatsappIcon size={sizeIcon} round={true} />
        </WhatsappShareButton>
      </div>
    </div>
  );
}

export default Share;
