import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Container } from "../SharedLayout/SharedLayout.styled";
import { ParcelCard } from "./ParcelCard";
import { CardList } from "./ParcelsList.styled";
import { useWindowDimensions } from "~/hooks/useWindowDimensions";
import useLocalStorage from "~/hooks/useLocalStorage";

export const ParcelsList = ({ parcels, isAdmin }) => {
  const { width } = useWindowDimensions();
  const [slideIndex, setSlideIndex] = useLocalStorage("slide", 0);

  return (
    <>
      <Container>
        {width >= 768 && (
          <CardList>
            {parcels.map((parcel) => (
              <ParcelCard key={parcel._id} parcel={parcel} isAdmin={isAdmin} />
            ))}
          </CardList>
        )}
        {width < 768 && (
          <Swiper
            initialSlide={slideIndex}
            modules={[Pagination, Navigation]}
            centeredSlides
            pagination={{ clickable: true, type: "bullets" }}
            spaceBetween={40}
            slidesPerView={"auto"}
            onSlideChange={({ activeIndex }) => setSlideIndex(activeIndex)}
          >
            {parcels.map((parcel) => (
              <SwiperSlide key={parcel._id}>
                <ParcelCard parcel={parcel} isAdmin={isAdmin} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Container>
    </>
  );
};
