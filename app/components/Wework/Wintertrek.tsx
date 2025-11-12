"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: 'Rishikesh',
        name: 'John Doe',
        imgSrc: '/images/wework/Rishikesh.jpg',
    },
    {
        profession: 'Haridwar',
        name: 'John Doe',
        imgSrc: '/images/wework/Haridwar.jpeg',
    },
    {
        profession: 'Kedarnath Dham',
        name: 'John Doe',
        imgSrc: '/images/wework/Kedarnath.jpg',
    },
    {
        profession: 'Badrinath Dham',
        name: 'John Doe',
        imgSrc: '/images/wework/Badrinath.webp',
    },
    {
        profession: 'Tungnath Temple',
        name: 'John Doe',
        imgSrc: '/images/wework/Tungnath.jpeg',
    },
    {
        profession: 'Almora',
        name: 'John Doe',
        imgSrc: '/images/wework/Almora.jpg',
    },
    {
        profession: 'Nainital',
        name: 'John Doe',
        imgSrc: '/images/wework/Nainital.jpg',
    },
    {
        profession: 'Kainchi Dham',
        name: 'John Doe',
        imgSrc: '/images/wework/Kainchi.webp',
    },

]

// CAROUSEL SETTINGS


export default class Wintertrek extends Component {

    state = {
        animatedWords: [],
        deleting: false
    };

    text = "Most Recommended Winter Trek.";
    words = this.text.split(" ");

    componentDidMount() {
        this.animateWords();
    }

    animateWords = () => {
        let index = this.state.deleting
            ? this.state.animatedWords.length - 1
            : this.state.animatedWords.length;

        if (!this.state.deleting) {
            if (index < this.words.length) {
                setTimeout(() => {
                    this.setState(
                        { animatedWords: [...this.state.animatedWords, this.words[index]] },
                        this.animateWords
                    );
                }, 350);
            } else {
                // Wait before deleting
                setTimeout(() => {
                    this.setState({ deleting: true }, this.animateWords);
                }, 1200);
            }
        } else {
            if (index >= 0) {
                setTimeout(() => {
                    this.setState(
                        { animatedWords: this.state.animatedWords.slice(0, index) },
                        this.animateWords
                    );
                }, 200);
            } else {
                // Restart animation
                setTimeout(() => {
                    this.setState({ deleting: false }, this.animateWords);
                }, 500);
            }
        }
    };

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 } },
                { breakpoint: 800, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 450, settings: { slidesToShow: 1, slidesToScroll: 1 } }
            ]
        };

        return (
            <div className="bg-wework py-32">
                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>
                    <div className="text-center">
                        {/* ✅ Animated Text Header */}
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">
                            {this.state.animatedWords.join(" ")}
                            <span className="opacity-50">|</span>
                        </h3>
                    </div>
                </div>

                <Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i}>
                            <div className='bg-white m-3 py-14 my-10 text-center shadow-xl rounded-3xl'>
                                <div className='relative'>
                                    <Image src={items.imgSrc} alt="gaby" width={182} height={282} className="inline-block m-auto" />
                                </div>
                                <h3 className='text-2xl font-normal pt-4 pb-2 opacity-50'>{items.profession}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}
