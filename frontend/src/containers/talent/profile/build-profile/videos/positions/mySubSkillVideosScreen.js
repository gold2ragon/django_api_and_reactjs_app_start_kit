import React, {Component} from 'react';
import TalentBuildProfileForm from 'components/shiptalent/forms/talentBuildProfileForm';
import TalentSubSkillVideosForm from './talentSubSkillVideosForm';
import AuditionVideoType0Form from 'containers/talent/profile/build-profile/videos/auditions/type0/auditionVideoType0Form';
import AuditionVideoType1Form from 'containers/talent/profile/build-profile/videos/auditions/type1/auditionVideoType1Form';

class MySubSkillVideos extends Component {
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

    let contentLayout = AuditionVideoType0Form
    if (subSkill) {
      switch(subSkill.video_audition_type) {
        case 0:
          contentLayout = AuditionVideoType0Form
          break;
        case 1:
          contentLayout = AuditionVideoType1Form
          break;
        default:
          contentLayout = AuditionVideoType0Form
          break;
      }
    }
    return (
      <TalentBuildProfileForm
        ContentLayout={contentLayout}
        formTitle={`My ${subSkill ? subSkill.name : ''} Videos`}
        nextLink={link}
        nextButtonTitle={`Back to My ${position ? position.name : ''} Audition Videos`}
        handleClickNextButton={this.handleClickNextButton}
        subSkill={subSkill}
      />
    )
  }
}

export default MySubSkillVideos;
