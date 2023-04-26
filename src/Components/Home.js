import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Home() {
    return (
        <div>
            <Header />
            <div>
                <div>
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="https://smartslider3.com/wp-content/uploads/2022/01/goodvsbad.png" alt="First slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="https://smartslider3.com/wp-content/uploads/2017/12/slidersucksogimage.png" alt="Second slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="https://soliloquywp.com/wp-content/uploads/2016/08/11-Website-Slider-Best-Practices-That-You-Must-Follow.png" alt="Third slide" />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
