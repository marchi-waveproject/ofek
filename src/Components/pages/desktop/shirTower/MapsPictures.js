import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import APPIpic from "./../../../APPIpic";

import lupa from "./../../../../img/icons/white/lupa.svg";
import PopupPicture from "./PopupPicture";
import Owl from "./.././../../Owl";

export default class MapsPictures extends Component {
  constructor(props) {
    super(props);

    //console.log(this.props);

    this.state = {
      popUpText_View: false,
      popUpText_Message: "הודעה",
    };
  }

  showHidepopUpText = (longText) => {
    //console.log(showMe);

    this.setState({
      popUpText_View: true,
      popUpText_Message: longText,
    });

    console.log(this.state.popUpText_View);
  };

  hidePopUp = () => {
    this.setState({
      popUpText_View: false,
    });
    //console.log('DONE');
  };

  render() {
    let page = this.props.page;

    return (
      <React.Fragment>
        <Container maxWidth="lg">
          <h2 className="">{page.MapsPictures_h2}</h2>

          {this.props.mobile ? (
            <div className="picturesMobile">
              <Owl
                pictures={this.props.gallery}
                section1={true}
                config={{
                  mobile: true,
                  items: 1,
                  stagePadding: 40,
                  margin: 5,
                  nav: false,
                  dots: false,
                }}
              />
            </div>
          ) : (
            <div className="pictures">
              {this.props.gallery.map((item) => (
                <div
                  className="item"
                  key={item.data.id}
                  onClick={() => this.showHidepopUpText(item.data.image_big)}
                >
                  <APPIpic
                    showclass="mainPic"
                    pic={item}
                    mobile={this.props.mobile}
                  />
                  <div className="hover">
                    {item.data.alt}
                    <img className="lupa" src={lupa} alt="" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>

        {this.state.popUpText_View ? (
          <PopupPicture
            hidePopUp={this.hidePopUp}
            pageData={page}
            show={true}
            message={this.state.popUpText_Message}
          />
        ) : (
          false
        )}
      </React.Fragment>
    );
  }
}
