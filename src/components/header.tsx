import { Image } from "@yext/pages-components";
const Header = (props: any) => {
  const { _site } = props;
  const { c_header } = _site;



  return (
    <>
      <Image image={_site.c_header} className="!w-full" />
    </>
  );
};

export default Header;
