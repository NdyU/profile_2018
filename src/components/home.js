import React, {Component} from 'react';
import {connect} from 'react-redux';

import actions from './../actions';

import "./home-template.scss";
import "./home.scss";


class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showProjects: false,
      showProfile: false,
      showContact: false
    }

    this.triggerProjectView = this.triggerProjectView.bind(this);
    this.triggerProfileView = this.triggerProfileView.bind(this);
    this.triggerContactView = this.triggerContactView.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  componentDidMount() {
    this.props.getProjectList();
    this.props.getProfile();
  }

  resetState(e) {
    this.setState({showProjects: false, showProfile: false, showContact: false});
  }
  triggerProjectView(e) {
    //Aviod triggering parent click event
    e.stopPropagation();
    this.setState({showProjects: true, showProfile: false, showContact: false});
  }
  triggerProfileView(e) {
    e.stopPropagation();
    this.setState({showProjects: false, showProfile: true, showContact: false});
  }
  triggerContactView(e) {
    e.stopPropagation();
    this.setState({showProjects: false, showProfile: false, showContact: true});
  }
  showProjectView() {
    return this.props.project_list.map(function(project, index) {
      //Id for css grid positioning, apply offset of +1 for css class name
      const id = "ctn" + (index + 1);

      const background = project.img;
      return (
        <div id={id} key={index} className="pj-ctn">
          <a href={project.url} className="pj-btn" target="__blank" style={{backgroundImage: `url(${background})`}}>
          </a>
        </div>)
    })
  }

  showProfileView() {
    return this.props.profile.map(function(section, index) {
      const id = "ctn" + (index+1);
      return(
        <div key={index} id={id} className="section-ctn">
          <div className="section-header">{section.title}</div>
          <div className="expr-list">
            { section.expr_list.map(function(expr, index) {
              return(
                <div key={index} className="expr">
                  <div className="expr-btn" style={{backgroundImage: `url(${expr.img})`}}>

                  </div>
                  <div className="expr-yr">{expr.years} yrs
                    <div className="expr-text">hello sakdlsklamd dm laksmdlkm aslk asmdlk smakld malk mdalksmd klasmkl  mdlkasm dklmaskl  mddlkasm dklmsakl d mklsamd lksamkldmm klasm dlkdams maklsm dklamskl mlaskm dlkasm madsklm dlkasmworld</div>
                  </div>
                </div>
              )
            }) }
          </div>
        </div>
      )
    });
  }
  showContactView() {
    var DOM = [];
    DOM.push(
      <div key="pf1" id="ctn1">
        <div>
          Email: yuandy.8098@gmail.com
        </div>
      </div>
    )
    DOM.push(
      <div key="pf2" id="ctn3">
        <div>
          <a href="">View Github Profile</a>
        </div>
        <div>
          <a href="">Connect on Linkedin</a>
        </div>
      </div>
    )
    return DOM;
  }
  render() {
    console.log(this.props);
    return (
      <div className="hp-ctn" onClick={this.resetState}>
        <div className="main-content">
          <div className="name">Andy Yu</div>
          <div className="btn-list">
            <a href="#" className="btn project-btn" onClick={this.triggerProjectView}>Projects</a>
            <a href="#" className="btn profile-btn" onClick={this.triggerProfileView}>Profile</a>
          </div>
        </div>
        <div id="ctn5">
          <div className="source-box">
            <a href="https://github.com/NdyU"><div className="item" style={{backgroundImage: `url("https://image.flaticon.com/icons/svg/25/25231.svg")`}}></div></a>
            <a href="https://www.linkedin.com/in/ndyu-qc/"><div className="item" style={{backgroundImage: `url("https://cdn.freebiesupply.com/logos/large/2x/linkedin-icon-logo-png-transparent.png")`}}> </div></a>
          </div>

        </div>
        {this.state.showProjects && (
          this.showProjectView()
        )}
        {this.state.showProfile && (
          this.showProfileView()
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {project_list: state.projects, profile: state.profile}
}
export default connect(mapStateToProps, actions)(HomePage);
