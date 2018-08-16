import {GET_PROJECT_LIST, GET_PROFILE} from "./types";
import 'babel-polyfill';

export default {
  getProjectList: () => async dispatch => {

    var payload = [
      {
        displayName: "GTI",
        url: "https://gti-app.herokuapp.com/",
        img: "https://s3.us-east-2.amazonaws.com/elasticbeanstalk-us-east-2-355674520256/gti.png"
      },
      {
        displayName: "CUNYBOOKS",
        url: "https://cunybooks.herokuapp.com/",
        img: "https://s3.us-east-2.amazonaws.com/elasticbeanstalk-us-east-2-355674520256/cunybooks.png"
      }
    ]
    dispatch({type: GET_PROJECT_LIST, payload: payload});
  },
  getProfile: () => async dispatch => {
    var payload = [
      {
        title: "Web Frameworks",
        expr_list: [
          {
            title: "React",
            img: "https://cdn-images-1.medium.com/max/1600/1*g6s1lvpfArJGorALkKNhvw.png",
            years: 1,
          },
          {
            title: "Django",
            img: "https://sentry.io/_assets/logos/django-f6f336cde20615169bbf4441c748188dd9903908bc6af952df3bd8f899c55a41.svg",
            years: 1,
          },
          {
            title: "Drupal",
            img: "https://www.drupal.org/files/druplicon-small.png",
            years: 1,
          }
        ]
      },
      {
        title: "Programming Languages",
        expr_list: [
          {
            title: "Javascript",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png",
            years: 3,
          },
          {
            title: "PHP",
            img: "https://upload.wikimedia.org/wikipedia/commons/c/c1/PHP_Logo.png",
            years: 2
          },
          {
            title: "C++",
            img: "https://png.icons8.com/color/1600/c-plus-plus-logo.png",
            years: 2
          },
          {
            title: "Java",
            img: "https://ih1.redbubble.net/image.418233732.0994/flat,1000x1000,075,f.u1.jpg",
            years: 2
          },
          {
            title: "Python",
            img: "https://pbs.twimg.com/profile_images/439154912719413248/pUBY5pVj_bigger.png",
            years: 1,
          }
        ]
      },
      {
        title: "CSS Frameworks",
        expr_list: [
          {
            title: "Bootstrap",
            img: "https://i1.wp.com/colzzky.com/wp-content/uploads/2017/09/online-training-bootstrap-philippines.jpg?fit=510%2C413&amp;ssl=1",
            years: 1,
          },
          {
            title: "Sass",
            img: "https://www.shareicon.net/data/128x128/2015/09/03/95032_web_512x512.png",
            years: "recent"
          }
        ]
      }
    ];

    dispatch({type: GET_PROFILE, payload: payload});
  }
}
