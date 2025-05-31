import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Container } from "../SharedLayout/SharedLayout.styled";
import { ParcelCard } from "./ParcelCard";
import { CardList } from "./ParcelsList.styled";
import { useWindowDimensions } from "~/hooks/useWindowDimensions";

export const ParcelsList = ({ parcels, isAdmin }) => {
  const { width } = useWindowDimensions();

  if (!parcels) return <div>No parcels</div>;

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
            modules={[Pagination, Navigation]}
            centeredSlides
            pagination={{ clickable: true, type: "bullets" }}
            spaceBetween={40}
            slidesPerView={"auto"}
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
