import { Image } from "@yext/pages-components";

const Footer = (props: any) => {
  const { _site } = props;
  const { c_footer } = _site;


  return (
    <>
      <Image image={_site.c_footer} />
    </>
  );
};

export default Footer;
