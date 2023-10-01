
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Roadmap.css'



const Roadmap = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 4000,
        
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      };
       return (
         <div className="px-20 py-5 "id="rm-bg">
         <h2 className="font-bold text-2xl text-center p-10">PlayStorm Roadmap</h2>       
           <Slider {...settings} >      
                <div className="rounded-xl p-5 bg-slate-100 hover:bg-slate-50">           
                    <h3 className="text-xs text-gray-500 ">Phase-01</h3>
                    <p className="font-bold py-1">Planning</p>
                    <p className="text-xs text-gray-500">Planning is a cognitive That involves setting goals, determining the steps needed to achive this goals, and organise resource and activities to exicute the necessary action</p>
                </div>
                <div className="rounded-xl p-5 bg-slate-100">
                    <h3 className="text-xs text-gray-500">Phase-02</h3>
                    <p className="font-bold py-1">Production</p>
                    <p className="text-xs text-gray-500">It involves a series of activities and operations aimed at creating tangible goods that can be consumed or used by individual.The production process typically includes.</p>
                </div>
                <div className="rounded-xl p-5 bg-slate-100">
                    <h3 className="text-xs text-gray-500">Phase-03</h3>
                    <p className="font-bold py-1">Launch</p>
                    <p className="text-xs text-gray-500">A launch refers to the act starting or initiating a particuler endeavor, project.It typically involves introducing a new product, service or initiative to the public or atrageted audience</p>
                </div>
                <div className="rounded-xl p-5 bg-slate-100">           
                    <h3 className="text-xs text-gray-500">Phase-04</h3>
                    <p className="font-bold py-1">Planning</p>
                    <p className="text-xs text-gray-500">Planning is a cognitive That involves setting goals, determining the steps needed to achive this goals, and organise resource and activities to exicute the necessary action.</p>
                </div>
                <div className="rounded-xl p-5 bg-slate-100">
                    <h3 className="text-xs text-gray-500">Phase-05</h3>
                    <p className="font-bold py-1">Production</p>
                    <p className="text-xs text-gray-500">It involves a series of activities and operations aimed at creating tangible goods that can be consumed or used by individual.The production process typically includes.</p>
                </div>
                <div className="rounded-xl p-5 bg-slate-100">
                    <h3 className="text-xs text-gray-500">Phase-06</h3>
                    <p className="font-bold py-1">Launch</p>
                    <p className="text-xs text-gray-500">A launch refers to the act starting or initiating a particuler endeavor, project or event.It typically involves introducing a new product, service or initiative to the public or atrageted audience</p>
                </div>
         </Slider>
       </div>
       );
     };
    
 export default Roadmap; 


