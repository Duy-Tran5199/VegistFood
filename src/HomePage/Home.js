import React from 'react';
import Countdown from '../Component/Back-image and countdown star/Countdown';
import Banner from '../Component/Banner/Banner';
import Bloghome from '../Component/BlogsHome/Bloghome';
import Brandlogo from '../Component/BrandLogo/Brandlogo';
import Category from '../Component/Category/Category';
import Footermain from '../Component/Footer/Footermain';
import Header from '../Component/Header/Header';
import News from '../Component/News/News';
import Ourpro from '../Component/Our Products/Ourpro';
import Quickview from '../Component/Quickview';
import Slider from '../Component/Slider/Slider';
import Testimonial from '../Component/Testimonial/Testimonial';
import Trending from '../Component/Trending/Trending';

function Home() {
    return (
        <>
            {/* header start */}
            <Header></Header>
            {/* header end */}
            {/*home page slider start*/}
           <Slider/>
            {/*home page slider start*/}
            {/*banner start*/}
            <Banner/>
            {/* banner end */}
            {/* Category image slide */}
            <Category/>
            {/* Category image slide */}
            {/* Trending Products Start */}
            <Trending/>
            {/* Trending Products end */}
            {/* Back-image and countdown star */}
            <Countdown/>
            {/* Back image and countdown end */}
            {/* Our Products Tab start */}
            <Ourpro/>
            {/* Our Products Tab end */}
            {/* Testimonial Start */}
            <Testimonial/>
            {/* Testimonial end */}
            {/* quick veiw start */}
            <Quickview/>
            {/* quick veiw end */}
            {/* Blog start */}
            <Bloghome/>
            {/* Blog end */}
            {/* News Letter start */}
            <News/>
            {/* News Letter end */}
            {/* brand logo start */}
            <Brandlogo/>
            {/* brand logo end */}
            <Footermain/>
           
          
        </>

    )
}

export default Home