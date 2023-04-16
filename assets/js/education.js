AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Java",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/practical-java-course/",
  },
  {
    title: "C# & Unity",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/unitycourse2/",
  },
  {
    title: "Javascript",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/",
  },{
 
    title: "Java Jsf",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/jsf-tutorial/",
  } ];
  //   title: "Introduction to CSS 3",
  //   cardImage: "assets/images/education-page/udacity.svg",
  //   moocLink: "https://www.udacity.com/course/intro-to-html-and-css--ud001",
  // },
  // {
  //   title: "Javascript",
  //   cardImage: "assets/images/education-page/udacity.svg",
  //   moocLink: "https://www.udacity.com/course/intro-to-javascript--ud803",
  // },
  // {
  //   title: "Bootstrap 4",
  //   cardImage: "assets/images/education-page/udemy.svg",
  //   moocLink: "https://www.udemy.com/course/bootstrap-4-tutorials/",
  // },
  // {
  //   title: "Intro to React",
  //   cardImage: "assets/images/education-page/edx.svg",
  //   moocLink: "https://www.edx.org/learn/reactjs",
  // },
  // {
  //   title: "Intro to React Native",
  //   cardImage: "assets/images/education-page/coursera2.svg",
  //   moocLink: "https://www.coursera.org/lecture/react-native/introduction-to-react-native-Eax0D",
  // },
  // {
  //   title: "NodeJS, Express and MongoDB",
  //   cardImage: "assets/images/education-page/coursera2.svg",
  //   moocLink: "https://www.coursera.org/learn/server-side-nodejs",
  // },
  // {
  //   title: "XML-AJAX",
  //   cardImage: "assets/images/education-page/udemy.svg",
  //   moocLink: "https://www.udemy.com/course/xml-from-beginner-to-expert/",
  // },
  // {
  //   title: "Data Structures & Algorithms",
  //   cardImage: "assets/images/education-page/udacity.svg",
  //   moocLink: "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
  // },


// const experience = [
//   {
//     img: "assets/images/education-page/c1.png"
//   },
//   {
//     img: "assets/images/education-page/c2.jpg"
//   },
//   {
//     img: "assets/images/education-page/c3.png"
//   },
//   {
//     img: "assets/images/education-page/c4.png"
//   },
//   {
//     img: "assets/images/education-page/c5.jpg"
//   },
// ];



const showCards = () => {
  let output = "";
  moocscards.forEach(
      ({ title, cardImage, moocLink }) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
<img src=${cardImage} class="card-img-top content-image">
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);



// /* Timeline Section*/

//  $(function(){

//   window.sr = ScrollReveal();

//    if ($(window).width() < 768) {

//      if ($('.timeline-content').hasClass('js--fadeInLeft')) {
//        $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
//      }

//     sr.reveal('.js--fadeInRight', {
//       origin: 'right',
//        distance: '300px',
//       easing: 'ease-in-out',
//       duration: 800,
//    });
//   }
// else {
    
//     sr.reveal('.js--fadeInLeft', {
//       origin: 'left',
//       distance: '300px',
//       easing: 'ease-in-out',
//       duration: 800,
//     });

//     sr.reveal('.js--fadeInRight', {
//       origin: 'right',
//       distance: '300px',
//       easing: 'ease-in-out',
//       duration: 800,
//     });

//   }
  
//   sr.reveal('.js--fadeInLeft', {
//       origin: 'left',
//       distance: '300px',
//       easing: 'ease-in-out',
//       duration: 800,
//     });

//     sr.reveal('.js--fadeInRight', {
//       origin: 'right',
//       distance: '300px',
//       easing: 'ease-in-out',
//       duration: 800,
//     });


// });

