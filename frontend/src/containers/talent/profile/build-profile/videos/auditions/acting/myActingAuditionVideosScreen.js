import React, {Component} from 'react';
import TalentBuildProfileForm from 'components/shiptalent/forms/talentBuildProfileForm';
import TalentActingVideosForm from 'containers/talent/profile/build-profile/videos/auditions/acting/talentActingVideosForm';


class MyActingAuditionVideos extends Component {
  handleClickNextButton = (event) => {
    console.log('==== MyVideosGreetings: event: ', event);
    event.preventDefault();
    this.props.history.goBack();
  };

  render() {
    const position = this.props.history && this.props.history.location && this.props.history.location.state
      ? this.props.history.location.state.position
      : null
    const subSkill = this.props.history && this.props.history.location && this.props.history.location.state
      ? this.props.history.location.state.subSkill
      : null
    const link =  {
      pathname: '/video-positions',
      state: { position: position }
    }
    return (
      <TalentBuildProfileForm
        ContentLayout={TalentActingVideosForm}
        formTitle={`My ${subSkill ? subSkill.name : ''} Videos`}
        nextLink={link}
        nextButtonTitle={`Back to My ${position ? position.name : ''} Audition Videos`}
        handleClickNextButton={this.handleClickNextButton}
        subSkill={subSkill}
      />
    )
  }
}

export default MyActingAuditionVideos;
