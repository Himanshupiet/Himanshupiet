import React, {useEffect} from 'react'
import BannerSliderStyle from './BannerSlider.module.css'


const BannerSlider = (props) => {
  function setREVStartSize(e){			 
    window.RSIW = window.RSIW===undefined ? window.innerWidth : window.RSIW;	
    window.RSIH = window.RSIH===undefined ? window.innerHeight : window.RSIH;	
    try {								
      var pw = document.getElementById(e.c).parentNode.offsetWidth,
        newh;
      pw = pw===0 || isNaN(pw) ? window.RSIW : pw;
      e.tabw = e.tabw===undefined ? 0 : parseInt(e.tabw);
      e.thumbw = e.thumbw===undefined ? 0 : parseInt(e.thumbw);
      e.tabh = e.tabh===undefined ? 0 : parseInt(e.tabh);
      e.thumbh = e.thumbh===undefined ? 0 : parseInt(e.thumbh);
      e.tabhide = e.tabhide===undefined ? 0 : parseInt(e.tabhide);
      e.thumbhide = e.thumbhide===undefined ? 0 : parseInt(e.thumbhide);
      e.mh = e.mh===undefined || e.mh=="" || e.mh==="auto" ? 0 : parseInt(e.mh,0);		
      if(e.layout==="fullscreen" || e.l==="fullscreen")	{			
        newh = Math.max(e.mh,window.RSIH);	
      }				
      else{					
        e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
        for (var i in e.rl) if (e.gw[i]===undefined || e.gw[i]===0) e.gw[i] = e.gw[i-1];					
        e.gh = e.el===undefined || e.el==="" || (Array.isArray(e.el) && e.el.length==0)? e.gh : e.el;
        e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
        for (var i in e.rl) if (e.gh[i]===undefined || e.gh[i]===0) e.gh[i] = e.gh[i-1];
                  
        var nl = new Array(e.rl.length),
          ix = 0,						
          sl;					
        e.tabw = e.tabhide>=pw ? 0 : e.tabw;
        e.thumbw = e.thumbhide>=pw ? 0 : e.thumbw;
        e.tabh = e.tabhide>=pw ? 0 : e.tabh;
        e.thumbh = e.thumbhide>=pw ? 0 : e.thumbh;					
        for (var i in e.rl) nl[i] = e.rl[i]<window.RSIW ? 0 : e.rl[i];
        sl = nl[0];									
        for (var i in nl) if (sl>nl[i] && nl[i]>0) { sl = nl[i]; ix=i;}															
        var m = pw>(e.gw[ix]+e.tabw+e.thumbw) ? 1 : (pw-(e.tabw+e.thumbw)) / (e.gw[ix]);					
        newh =  (e.gh[ix] * m) + (e.tabh + e.thumbh);
      }				
      if(window.rs_init_css===undefined) {
        window.rs_init_css = document.head.appendChild(document.createElement("style"));		
      }

      document.getElementById(e.c).height = newh+"px";
      window.rs_init_css.innerHTML += "#"+e.c+"_wrapper { height: "+newh+"px }";				
    } catch(e){
      console.log("Failure at Presize of Slider:" + e)
    }	
  }

  useEffect(()=>{
    setREVStartSize({c: 'rev_slider_477_1',rl:[1500,1240,778,480],el:[868,768,960,720],gw:[1240,1024,778,480],gh:[868,768,960,720],type:'standard',justify:'',layout:'fullscreen',offsetContainer:'#masthead',offset:'',mh:"0"});
    var	revapi477,
      tpj;
    function revinit_revslider4771() {
      jQuery(function() {
        tpj = jQuery;
        revapi477 = tpj("#rev_slider_477_1");
        if(revapi477==undefined || revapi477.revolution == undefined){
          revslider_showDoubleJqueryError("rev_slider_477_1");
        }else{
          revapi477.revolution({
            sliderLayout:"fullscreen",
            visibilityLevels:"1500,1240,778,480",
            gridwidth:"1240,1024,778,480",
            gridheight:"868,768,960,720",
            perspective:600,
            perspectiveType:"local",
            lazyloaddata:"lazy-src",
            editorheight:"868,768,960,720",
            responsiveLevels:"1500,1240,778,480",
            fullScreenOffsetContainer:"#masthead",
            progressBar:{disableProgressBar:true},
            navigation: {
              mouseScrollNavigation:false,
              onHoverStop:false,
              arrows: {
                enable:true,
                style:"uranus",
                left: {

                },
                right: {

                }
              }
            },
            parallax: {
              levels:[5,10,15,20,25,30,35,40,-2,-4,-6,-8,-10,-12,-14,55],
              type:"3D",
              origo:"slidercenter",
              disable_onmobile:true,
              ddd_bgfreeze:true,
              ddd_overflow:"hidden",
              ddd_layer_overflow:true,
              ddd_z_correction:150
            },
            fallbacks: {
              allowHTML5AutoPlayOnAndroid:true
            },
          });
        }
        
        if(typeof RevSliderPaintBrush !== "undefined") RevSliderPaintBrush(tpj, revapi477);
      });
    } 
    var once_revslider4771 = false;
    if (document.readyState === "loading") {document.addEventListener('readystatechange',function() { if((document.readyState === "interactive" || document.readyState === "complete") && !once_revslider4771 ) { once_revslider4771 = true; revinit_revslider4771();}});} else {once_revslider4771 = true; revinit_revslider4771();}
  },[])

  const slide1 = {"size":200,"origsize":200,"strength":0,"fadetime":600,"image":`${process.env.NEXT_PUBLIC_BASE_PATH}/images/PaintBrush_Slider/painthouse-one.jpg`,"fixedges":true,"blur":true,"disappear":true}

  const slide2 = {"size":100,"origsize":100,"strength":0,"blurAmount":3,"fadetime":2000,"image":`${process.env.NEXT_PUBLIC_BASE_PATH}/images/PaintBrush_Slider/painthouse-two.jpg`,"fixedges":true,"blur":true,"disappear":true}

  const slide3 = {"size":250,"origsize":250,"strength":0,"fadetime":600,"image":`${process.env.NEXT_PUBLIC_BASE_PATH}/images/PaintBrush_Slider/painthouse-three.jpg`,"fixedges":true,"style":"butt","responsive":true}
  
  return(
    <section className={BannerSliderStyle.section_outer}>
      <rs-module-wrap id="rev_slider_477_1_wrapper" data-source="gallery" style={{background:"transparent",padding:"0"}}>
        <rs-module id="rev_slider_477_1" className="rs-respect-topbar" data-version="6.4.2">
          <rs-slides>
            <rs-slide data-key="rs-1091" data-title="Slide" data-thumb="" data-anim="ms:600;r:0;" data-in="o:0;" data-out="a:false;" data-revaddonpaintbrush={JSON.stringify(slide1)} data-revaddonpaintbrushedges="true">
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/PaintBrush_Slider/painthouse-one.jpg`} title="Paintbrush Slider" data-parallax="off" className="rev-slidebg" data-no-retina />

              <rs-layer
                id="slider-477-slide-1091-layer-1" 
                className="rs-pxl-12"
                data-type="text"
                data-rsp_ch="on"
                data-xy="x:c;yo:310px,230px,240px,208px;"
                data-text="s:50,50,40,25;l:60,60,50,35;fw:600;a:center;"
                data-corners="rs-fcrt;rs-bcrt;"
                data-padding="t:5,5,5,2;l:10;"
                data-frame_0="x:-150px;rY:-45deg;blu:10px;"
                data-frame_1="e:back.inOut;st:500;sp:1000;sR:500;"
                data-frame_999="x:150px;o:0;rY:45deg;st:w;sp:600;sR:7500;blu:10px;"
                data-loop_0="x:-20;"
                data-loop_999="x:20;sp:20000;yym:t;yys:t;yyf:t;"
                style={{zIndex:"7",backgroundColor:"#000000",fontFamily:"Poppins"}}
              >Discover The Rotator
              </rs-layer>

              <rs-layer
                id="slider-477-slide-1091-layer-2" 
                className="tp-shape tp-shapewrapper rs-pxl-1"
                data-type="shape"
                data-rsp_ch="on"
                data-xy="x:c;yo:375px,295px,295px,245px;"
                data-text="fw:600;a:inherit;"
                data-dim="w:360px;h:3px;"
                data-frame_0="bri:100%;blu:10px;"
                data-frame_1="rZ:45;e:back.inOut;st:700;sp:2000;sR:700;"
                data-frame_999="o:0;rZ:-45deg;e:back.inOut;st:w;sp:600;sR:6300;blu:10px;"
                data-loop_0="y:10;"
                data-loop_999="y:-10;sp:10000;yym:t;yys:t;yyf:t;"
                style={{zIndex:"6",backgroundColor:"#ffffff"}}
              > 
              </rs-layer>

              <rs-layer
                id="slider-477-slide-1091-layer-3" 
                className="rs-pxl-12"
                data-type="text"
                data-rsp_ch="on"
                data-xy="x:c;yo:600px,520px,520px,430px;"
                data-text="s:17;fw:300;a:center;"
                data-frame_0="y:100px;rX:-45deg;blu:10px;"
                data-frame_1="e:back.inOut;st:1500;sp:1000;sR:1500;"
                data-frame_999="y:50px;o:0;rX:45deg;st:w;sp:600;sR:6500;blu:10px;"
                style={{zIndex:"3",fontFamily:"Poppins"}}
              >
              </rs-layer>

              <a
                id="slider-477-slide-1091-layer-4" 
                className="rs-layer rs-pxl-13"
                href="/" target="_blank" rel="noopener"
                data-type="text"
                data-rsp_ch="on"
                data-xy="x:c;yo:730px,650px,650px,570px;"
                data-text="l:28;ls:5px;fw:700;a:center;"
                data-padding="r:2;l:7;"
                data-border="bos:solid;boc:#ffffff;bow:3px,3px,3px,3px;"
                data-frame_0="y:100px;rX:-45deg;blu:10px;"
                data-frame_1="e:back.inOut;st:1700;sp:1000;sR:1700;"
                data-frame_999="y:50px;o:0;rX:45deg;st:w;sp:600;sR:6300;blu:10px;"
                data-frame_hover="sX:1.1;sY:1.1;c:#fff;boc:#fff;bos:solid;bow:3px,3px,3px,3px;oX:50;oY:50;sp:200;e:power1.inOut;"
                style={{zIndex:"10",fontFamily:"Poppins",cursor:"pointer"}}
              >Learn More
              </a>

              <rs-layer
                id="slider-477-slide-1091-layer-9" 
                className="rs-pxl-10"
                data-type="text"
                data-rsp_ch="on"
                data-xy="x:c;yo:378px,298px,298px,248px;"
                data-text="s:50,50,40,25;l:60,60,50,35;fw:600;a:center;"
                data-corners="rs-fcr;rs-bcr;"
                data-padding="t:5,5,5,2;l:10;"
                data-frame_0="x:150px;rY:45deg;blu:10px;"
                data-frame_1="e:back.inOut;st:900;sp:1000;sR:900;"
                data-frame_999="x:-150px;o:0;rY:-45deg;st:w;sp:600;sR:7100;blu:10px;"
                data-loop_0="x:20;"
                data-loop_999="x:-20;sp:20000;yym:t;yys:t;yyf:t;"
                style={{zIndex:"8",backgroundColor:"#000000",fontFamily:"Poppins"}}
              >A New Way Of Making Great Food
              </rs-layer>

              <rs-layer
                id="slider-477-slide-1091-layer-11" 
                className="tp-shape tp-shapewrapper rs-pxl-2"
                data-type="shape"
                data-rsp_ch="on"
                data-xy="x:c;yo:375px,295px,295px,245px;"
                data-text="fw:600;a:inherit;"
                data-dim="w:360px;h:3px;"
                data-frame_0="bri:100%;blu:10px;"
                data-frame_1="rZ:-45;e:back.inOut;st:300;sp:2000;sR:300;"
                data-frame_999="o:0;rZ:0deg;e:back.inOut;st:w;sp:600;sR:6700;blu:10px;"
                data-loop_0="y:-10;"
                data-loop_999="y:10;sp:10000;yym:t;yys:t;yyf:t;"
                style={{zIndex:"5",backgroundColor:"#ffffff"}}
              > 
              </rs-layer>

            </rs-slide>
            <rs-slide
                data-key="rs-1092"
                data-title="Slide"
                data-thumb=""
                data-anim="ms:600;r:0;"
                data-in="o:0;"
                data-out="a:false;"
                data-revaddonpaintbrush={JSON.stringify(slide2)}
                data-revaddonpaintbrushedges="true">
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/PaintBrush_Slider/painthouse-two.jpg`} title="Paintbrush Slider" data-parallax="off" className="rev-slidebg" data-no-retina />

              <rs-layer
                id="slider-477-slide-1092-layer-1" 
                className="rs-pxl-12"
                data-type="text"
                data-rsp_ch="on"
                data-xy="x:c;yo:310px,230px,240px,208px;"
                data-text="s:50,50,40,25;l:60,60,50,35;fw:600;a:center;"
                data-corners="rs-fcrt;rs-bcrt;"
                data-padding="t:5,5,5,2;l:10;"
                data-frame_0="x:-150px;rY:-45deg;blu:10px;"
                data-frame_1="e:back.inOut;st:500;sp:1000;sR:500;"
                data-frame_999="x:150px;o:0;rY:45deg;st:w;sp:600;sR:7500;blu:10px;"
                data-loop_0="x:-20;"
                data-loop_999="x:20;sp:20000;yym:t;yys:t;yyf:t;"
                style={{zIndex:"7",backgroundColor:"#000000",fontFamily:"Poppins"}}
              >Go Mobile
              </rs-layer>

              <rs-layer
                id="slider-477-slide-1092-layer-2" 
                className="tp-shape tp-shapewrapper rs-pxl-1"
                data-type="shape"
                data-rsp_ch="on"
                data-xy="x:c;yo:375px,295px,295px,245px;"
                data-text="fw:600;a:inherit;"
                data-dim="w:360px;h:3px;"
                data-frame_0="bri:100%;blu:10px;"
                data-frame_1="rZ:45;e:back.inOut;st:700;sp:2000;sR:700;"
                data-frame_999="o:0;rZ:-45deg;e:back.inOut;st:w;sp:600;sR:6300;blu:10px;"
                data-loop_0="y:10;"
                data-loop_999="y:-10;sp:10000;yym:t;yys:t;yyf:t;"
                style={{zIndex:"6",backgroundColor:"#ffffff"}}
              > 
              </rs-layer>

              <rs-layer
                id="slider-477-slide-1092-layer-3" 
                className="rs-pxl-12"
                data-type="text"
                data-rsp_ch="on"
                data-xy="x:c;yo:600px,520px,520px,430px;"
                data-text="s:17;fw:300;a:center;"
                data-frame_0="y:100px;rX:-45deg;blu:10px;"
                data-frame_1="e:back.inOut;st:1500;sp:1000;sR:1500;"
                data-frame_999="y:50px;o:0;rX:45deg;st:w;sp:600;sR:6500;blu:10px;"
                style={{zIndex:"10",fontFamily:"Poppins"}}
              >
              </rs-layer>

              <a
                id="slider-477-slide-1092-layer-4" 
                className="rs-layer rs-pxl-13"
                href="/" target="_blank" rel="noopener"
                data-type="text"
                data-rsp_ch="on"
                data-xy="x:c;yo:730px,650px,650px,570px;"
                data-text="l:28;ls:5px;fw:700;a:center;"
                data-padding="r:2;l:7;"
                data-border="bos:solid;boc:#ffffff;bow:3px,3px,3px,3px;"
                data-frame_0="y:100px;rX:-45deg;blu:10px;"
                data-frame_1="e:back.inOut;st:1700;sp:1000;sR:1700;"
                data-frame_999="y:50px;o:0;rX:45deg;st:w;sp:600;sR:6300;blu:10px;"
                data-frame_hover="sX:1.1;sY:1.1;c:#fff;boc:#fff;bos:solid;bow:3px,3px,3px,3px;oX:50;oY:50;sp:200;e:power1.inOut;"
                style={{zIndex:"5",fontFamily:"Poppins",cursor:"pointer"}}
              >Go Mobile
              </a>

              <rs-layer
                id="slider-477-slide-1092-layer-9" 
                className="rs-pxl-10"
                data-type="text"
                data-rsp_ch="on"
                data-xy="x:c;yo:378px,298px,298px,248px;"
                data-text="s:50,50,40,25;l:60,60,50,35;fw:600;a:center;"
                data-corners="rs-fcr;rs-bcr;"
                data-padding="t:5,5,5,2;l:10;"
                data-frame_0="x:150px;rY:45deg;blu:10px;"
                data-frame_1="e:back.inOut;st:900;sp:1000;sR:900;"
                data-frame_999="x:-150px;o:0;rY:-45deg;st:w;sp:600;sR:7100;blu:10px;"
                data-loop_0="x:20;"
                data-loop_999="x:-20;sp:20000;yym:t;yys:t;yyf:t;"
                style={{zIndex:"8",backgroundColor:"#000000",fontFamily:"Poppins"}}
              >Expand Your Business With Mobile Brick Oven
              </rs-layer>

              <rs-layer
                id="slider-477-slide-1092-layer-11" 
                className="tp-shape tp-shapewrapper rs-pxl-2"
                data-type="shape"
                data-rsp_ch="on"
                data-xy="x:c;yo:375px,295px,295px,245px;"
                data-text="fw:600;a:inherit;"
                data-dim="w:360px;h:3px;"
                data-frame_0="bri:100%;blu:10px;"
                data-frame_1="rZ:-45;e:back.inOut;st:300;sp:2000;sR:300;"
                data-frame_999="o:0;rZ:0deg;e:back.inOut;st:w;sp:600;sR:6700;blu:10px;"
                data-loop_0="y:-10;"
                data-loop_999="y:10;sp:10000;yym:t;yys:t;yyf:t;"
                style={{zIndex:"5",backgroundColor:"#ffffff"}}
              > 
              </rs-layer>

            </rs-slide>
            <rs-slide data-key="rs-1093" data-title="Slide" data-thumb="" data-anim="ms:600;r:0;" data-in="o:0;" data-out="a:false;" data-revaddonpaintbrush={JSON.stringify(slide3)} data-revaddonpaintbrushedges="true">
              <img src="//www.sliderrevolution.com/wp-content/plugins/revslider/public/assets/assets/transparent.png"
                   alt="Slide" title="Paintbrush Slider" className="rev-slidebg tp-rs-img" data-bg="c:#f6b300;"
                   data-parallax="off" data-no-retina/>

              <rs-layer
                id="slider-477-slide-1093-layer-1" 
                className="rs-pxl-12"
                data-type="text"
                data-rsp_ch="on"
                data-xy="x:c;xo:-29px,0,0,0;yo:309px,230px,240px,208px;"
                data-text="s:50,50,40,25;l:60,60,50,35;fw:600;a:center;"
                data-corners="rs-fcrt;rs-bcrt;"
                data-padding="t:5,5,5,2;l:10;"
                data-frame_0="x:-150px;rY:-45deg;blu:10px;"
                data-frame_1="e:back.inOut;st:500;sp:1000;sR:500;"
                data-frame_999="x:150px;o:0;rY:45deg;st:w;sp:600;sR:7500;blu:10px;"
                data-loop_0="x:-20;"
                data-loop_999="x:20;sp:20000;yym:t;yys:t;yyf:t;"
                style={{zIndex:"5",backgroundColor:"#000000",fontFamily:"Poppins"}}
              >Oven Inventory Sale
              </rs-layer>

              <rs-layer
                id="slider-477-slide-1093-layer-3" 
                className="rs-pxl-12"
                data-type="text"
                data-rsp_ch="on"
                data-xy="x:c;yo:600px,520px,520px,430px;"
                data-text="s:17;fw:300;a:center;"
                data-frame_0="y:100px;rX:-45deg;blu:10px;"
                data-frame_1="e:back.inOut;st:1500;sp:1000;sR:1500;"
                data-frame_999="y:50px;o:0;rX:45deg;st:w;sp:600;sR:6500;blu:10px;"
                style={{zIndex:"8",fontFamily:"Poppins"}}
              >
              </rs-layer>

              <a
                id="slider-477-slide-1093-layer-4" 
                className="rs-layer rs-pxl-13"
                href="/" target="_blank" rel="noopener"
                data-type="text"
                data-rsp_ch="on"
                data-xy="x:c;yo:730px,650px,650px,570px;"
                data-text="l:28;ls:5px;fw:700;a:center;"
                data-padding="r:2;l:7;"
                data-border="bos:solid;boc:#ffffff;bow:3px,3px,3px,3px;"
                data-frame_0="y:100px;rX:-45deg;blu:10px;"
                data-frame_1="e:back.inOut;st:1700;sp:1000;sR:1700;"
                data-frame_999="y:50px;o:0;rX:45deg;st:w;sp:600;sR:6300;blu:10px;"
                data-frame_hover="sX:1.1;sY:1.1;c:#fff;boc:#fff;bos:solid;bow:3px,3px,3px,3px;oX:50;oY:50;sp:200;e:power1.inOut;"
                style={{zIndex:"7",fontFamily:"Poppins",cursor:"pointer"}}
              >Get a Quote
              </a>

              <rs-layer
                id="slider-477-slide-1093-layer-9" 
                className="rs-pxl-10"
                data-type="text"
                data-rsp_ch="on"
                data-xy="x:c;yo:378px,298px,298px,248px;"
                data-text="s:50,50,40,25;l:60,60,50,35;fw:600;a:center;"
                data-corners="rs-fcr;rs-bcr;"
                data-padding="t:5,5,5,2;l:10;"
                data-frame_0="x:150px;rY:45deg;blu:10px;"
                data-frame_1="e:back.inOut;st:900;sp:1000;sR:900;"
                data-frame_999="x:-150px;o:0;rY:-45deg;st:w;sp:600;sR:7100;blu:10px;"
                data-loop_0="x:20;"
                data-loop_999="x:-20;sp:20000;yym:t;yys:t;yyf:t;"
                style={{zIndex:"6",backgroundColor:"#000000",fontFamily:"Poppins"}}
              >Discounted Brick Ovens In Reduced Price
              </rs-layer>
            </rs-slide>
          </rs-slides>
        </rs-module>
      </rs-module-wrap>
    </section>
   )
  }


export default BannerSlider