import { useState } from "react";

const Page = () => {
  const [state, set] = useState();
  return (
    // <div className="card opacity-40 bg-black image-full w-[480px] h-[754px] ">
    //   <figure>
    //     <img
    //       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    //       alt="Shoes"
    //     />
    //   </figure>
    //   <div className="card-actions mb-4 ">
    //     <div className="card-actions justify-start">
    //       <button className="btn btn-primary">Buy Now</button>
    //     </div>
    //     <p>If a dog chews shoes whose shoes does he choose?</p>
    //   </div>
    // </div>
    <div className="carousel carousel-center rounded-box">
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
          alt="Pizza"
        />
      </div>
    </div>
  );
};

export default Page;
