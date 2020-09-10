import { Carousel } from './Carousel'
import Slider from 'react-slick'
import { Component } from 'react'

export function Depoiment() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    sliderToScroll: 1,
  }
  return (
    <div className="flex flex-col items-center bg-primary-500">
      <h1 className="mt-16 text-5xl tracking-wide text-white">Depoimentos</h1>
      <p className="mb-16 text-xl leading-none tracking-wide text-gray-500">
        Leia o que meus clientes têm a dizer
      </p>

      <div className="container w-full mx-auto max-w-screen">
        <Slider {...settings}>
          <div>
            <Carousel
              name="José da Silva"
              desc="”Aspernatur aut odit aut fugit sed quia consequuntur magni
            dolores eos qui ratione voluptatem.“"
              imgSrc="demo1.png"
            />
          </div>
          <div>
            <Carousel
              name="José da Silva"
              desc="”Aspernatur aut odit aut fugit sed quia consequuntur magni
            dolores eos qui ratione voluptatem.“"
              imgSrc="demo1.png"
            />
          </div>
          <div>
            <Carousel
              name="José da Silva"
              desc="”Aspernatur aut odit aut fugit sed quia consequuntur magni
            dolores eos qui ratione voluptatem.“"
              imgSrc="demo1.png"
            />
          </div>
        </Slider>
      </div>

      <div className="pt-20 pb-16">
        <button className="px-8 py-3 text-xl text-white border-2 border-gray-500 rounded-md hover:border-white">
          Outros Depoimentos
        </button>
      </div>
    </div>
  )
}
