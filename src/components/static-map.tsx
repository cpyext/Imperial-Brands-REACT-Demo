import { Coordinate } from "@yext/pages-components";

type Coordinates = {
  latitude: string;
  longitude: string;
};
const StaticMap = (props: Coordinates) => {
  const { latitude, longitude } = props;

  return (
    <>
      <img loading="lazy"
        className="!w-full"
        width="600"
        height="200"
        alt="static map"
        src={
          "https://maps.googleapis.com/maps/api/staticmap?center=" +
          `${latitude}` +
          "," +
          `${longitude}` +
          "&zoom=14&size=1200x200&maptype=roadmap&markers=color:red%7Clabel:LL%7C" +
          `${latitude}` +
          "," +
          `${longitude}` +
          `&key= ${import.meta.env.YEXT_PUBLIC_STATIC_MAP_KEY}`
        }
      ></img>
    </>
  );
};

export default StaticMap;
