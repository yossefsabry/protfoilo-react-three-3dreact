/* eslint-disable jsx-a11y/img-redundant-alt */
import img1 from "../assets/line.png"
import Btn from "./elements/Btn/Btn"
import CanvasCube from "./CanvasCube"

const Who = () => {
  return (
    <section id='About'>
      <div className="hero-section flex items-center md:gap-10 gap-0 flex-col md:flex-row">
        <div className="module-images md:w-1/2 w-full ">
          <CanvasCube />
        </div>
        <div className="content flex md:items-start items-center z-40 gap-8 flex-col md:w-1/2 w-3/4 md:bottom-0 relative bottom-32">
          <h1 className='md:text-7xl text-3xl font-bold relative '>
            Think outside the
            square space
          </h1>
          <div className='flex items-center justify-center gap-4'>
            <img src={img1} alt="line image" width={30} />
            <h3 className='text-pink-500 md:text-3xl text-xl font-extrabold'>What We Are </h3>
          </div>
          <p className='text-xl space-x-3 text-gray-300'>
            a creative group of designers and developers with a passion for
            the arts.
          </p>
          <Btn name="Sea Our Works" />
        </div>
      </div>
    </section>
  )
}

export default Who
