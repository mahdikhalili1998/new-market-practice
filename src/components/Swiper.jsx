// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/less";
import "swiper/less/pagination";

export default ({ result }) => {
  //   console.log(result);

  //   console.log(product);
  //   useEffect(() => {
  //     setProduct({
  //       ...result,
  //       images: result.images.map((item) => ({ url: item, id: uuidv4() })),
  //     });
  //   }, [result]);
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {result.images.map((img) => (
        <SwiperSlide key={img.id}>
          <img style={{ width: "15rem" }} src={img.img} alt={result.brand} />
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
};
