import React, { FC } from "react"
import { Arrow } from "../../elements/Arrow"

type ImageData = {
  src: string
  alt: string
}

type Props = {
  images: ImageData[]
}

const data = (length: number) => `
  {
    index: 0,
    next(){
      if(this.index < ${length}){
        this.index++;
        $refs.root.style.setProperty("--position", -(this.index * ($refs.item.offsetWidth+10)).toString() + "px")
      }
    },
    prev(){
      if(this.index > 0){
        this.index--;
        $refs.root.style.setProperty("--position", -(this.index * ($refs.item.offsetWidth+10)).toString() + "px");
      }
    }
  }`

export const ImageCarousel: FC<Props> = ({ images }) => (
  <div className="w-[80vw] mx-auto overflow-hidden relative [--position:0]" x-ref="root" x-data={data(images.length - 3)}>
    <div className="absolute inset-0 flex justify-between items-center">
      <button type="button" x-on:click="prev()">
        <Arrow direction="left" />
      </button>
      <button type="button" x-on:click="next()">
        <Arrow direction="right" />
      </button>
    </div>
    <div className="w-[calc(100%-100px)] mx-auto overflow-hidden">
      <ul className="w-full flex justify-between gap-[10px] translate-x-[var(--position)] transition-transform duration-300 ease-in-out">
        {images.map((item) => (
          <li key={item.src} x-ref="item" className="w-[calc((100%-20px)/3)] flex-shrink-0 border-2 border-gray-200 rounded">
            <img src={item.src} alt={item.alt} />
          </li>
        ))}
      </ul>
    </div>
  </div>
)
