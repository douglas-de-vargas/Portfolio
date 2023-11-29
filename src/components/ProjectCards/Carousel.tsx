'use client'
import React, { useState } from 'react'

interface ImainImages {
  [key: string]: string
}

interface CarouselProps {
  name: string
  images: {
    image: string
    image1?: string
    image2?: string
    image3?: string
    image4?: string
  }
}

const Carousel: React.FC<CarouselProps> = ({ name, images }) => {
  const [mainImages, setMainImages] = useState<ImainImages | undefined>({})

  const handleImage = (projectName: string, image?: string) => {
    if (image) {
      setMainImages((prevImages) => ({
        ...prevImages!,
        [projectName]: image
      }))
    } else {
      console.log('image is undefined')
    }
  }

  return (
    <div className='c-image_project'>
      <div className='principal'>
        <img
          src={mainImages && mainImages[name] ? mainImages[name] : images.image}
          alt={name}
        />
      </div>
      <div className='more-images'>
        {Object.values(images).map(
          (img, index) =>
            img && (
              <img
                key={index}
                onClick={() => handleImage(name, img)}
                src={img}
                alt={name}
              />
            )
        )}
      </div>
    </div>
  )
}

export default Carousel
