import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import "../index.css";
import { Image, LexicalRichText } from "@yext/pages-components";
import Hours from "../components/hours";
import {
  BsFacebook,
  BsFileMinus,
  BsInstagram,
  BsLinkedin,
  BsPlus,
  BsSearch,
  BsStarFill,
  BsTiktok,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import Cta from "../components/cta";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Schema from "../components/Schema";
import StaticMap from "../components/static-map";
import Header from "../components/header";
import Footer from "../components/footer";
import PageLayout from "../components/page-layout";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-1",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "description",
      "hours",
      "slug",
      // "photoGallery",
      // "c_primaryCTA",
      // "c_secondaryCTA",
      // "c_tertiaryCTA",
      "geocodedCoordinate",
      // "c_relatedOffers.name",
      // "c_relatedOffers.shortDescriptionV2",
      // "c_relatedOffers.c_primaryCTA",
      // "c_relatedOffers.price",
      // "c_relatedServices.name",
      // "c_relatedServices.richTextDescriptionV2",
      // "c_relatedServices.c_primaryCTA",
      // "c_relatedServices.primaryPhoto",
      // "c_relatedServices.id",
      // "primaryPhoto",
      // "c_photo",
      // "c_relatedPromotions.name",
      // "c_relatedPromotions.id",
      // "c_relatedPromotions.shortDescriptionV2",
      // "c_relatedPromotions.primaryPhoto",
      // "c_relatedPromotions.c_category",
      // "c_relatedPromotions.c_primaryCTA",
      // "c_relatedPromotions.c_secondaryCTA",
      // "c_relatedFAQ.id",
      // "c_relatedFAQ.question",
      // "c_relatedFAQ.answerV2",
      // "c_relatedFAQ.c_primaryCTA",

      // "c_ourServices",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["location"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en_GB"],
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug
    ? document.slug
    : `${document.locale}/${document.address.region}/${document.address.city}/${document.address.line1
    }-${document.id.toString()}`;
};

/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.description,
        },
      },
    ],
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 *
 *
 * There are a bunch of custom components being used from the src/components folder. These are
 * an example of how you could create your own. You can set up your folder structure for custom
 * components any way you'd like as long as it lives in the src folder (though you should not put
 * them in the src/templates folder as this is specific for true template files).
 */
const Location: Template<TemplateRenderProps> = ({ relativePrefixToRoot, path, document }) => {
  const _data = document;
  const {
    _site,
    name,
    address,
    // openTime,
    hours,
    mainPhone,
    geocodedCoordinate,
    description,
    // c_relatedOffers,
    // c_relatedPromotions,
    c_primaryCTA,
    c_secondaryCTA,
    // c_tertiaryCTA,
    photoGallery, primaryPhoto,
    // c_photo,
    //c_relatedServices,
    // c_relatedFAQ,
  } = document;



  return (
    <PageLayout _site={_site}>
      <Schema document={_data} />




      {/* Top Account Bar */}
      <nav aria-label="Account" className="bg-[#590008] text-white p-2 px-4 hidden md:block">
        <div className="w-full mx-auto flex justify justify-between space-x-4">
          <a
            href="https://www.jiffylube.com/locations/in/indianapolis/3328#"
            className="text-xl font-semibold px-4 py-2 bg-[#862633] text-white rounded transition-colors duration-300 border-2 border-transparent"
            style={{
              '--hover-bg-color': '#FFFFFF',
              '--hover-border-color': '#FF5733',
              '--hover-text-color': '#862633'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--hover-bg-color)';
              e.currentTarget.style.borderColor = 'var(--hover-border-color)';
              e.currentTarget.style.color = 'var(--hover-text-color)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#862633';
              e.currentTarget.style.borderColor = '#852633';
              e.currentTarget.style.color = '#FFFFFF';  // Reset to original text color
            }}
          >
            Sign in / Create Account
          </a>

          <a
            href="https://www.jiffylube.com/vehicle/preferred-location"
            className="text-xl font-semibold px-4 py-2 bg-[#862633] text-white rounded transition-colors duration-300 border-2 border-transparent"

          >
            Register a Vehicle
          </a>
        </div>
      </nav>




      {/* Hero Section */}
      <section
        className="relative bg-[#862633] text-white pb-12 md:pb-0"
        aria-labelledby="hero-heading"
      >
        <div className="mx-auto flex flex-col-reverse md:flex-row-reverse items-center">
          <div className=" pb-2 pt-4 md:pb-8 lg:px-0 w-full md:w-1/2">
            <div className="mx-auto max-w-2xl ml-10">
              <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                <div className="relative px-3 py-1 text-xl leading-6">
                  {name}
                </div>
              </div>
              <h1
                id="hero-heading"
                className="text-3xl font-bold tracking-tight sm:text-6xl font-playFair"
              >
                {address.city}, {address.region}
              </h1>
              <p className="mt-4 text-xl leading-8">
                <strong>Call us:</strong>{" "}
                {mainPhone
                  ? mainPhone
                    .replace("+1", "")
                    .replace(/\D+/g, "")
                    .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
                  : `(610) 363-8020`}
              </p>
              <p className="mt-6 text-xl leading-8">
                <strong>Find us:</strong> {address.line1}, {address.city},{" "}
                {address.region} {address.postalCode}
              </p>
              <div className="mt-4 flex flex-col items-start gap-12 h-full justify-between">


                <nav aria-label="Account" className="bg-[#862633] text-white">


                  <div className="w-full md:container mx-auto flex flex-col md:flex-row  justify justify-between space-y-4 md:space-y-0 md:space-x-4">
                    <a
                      href="https://www.jiffylube.com/contact"
                      className="primaryCTA text-xl font-semibold px-4 py-2 bg-[#862633] text-white rounded transition-colors duration-300 border-2 border-transparent"

                    >
                      Make Appointment
                    </a>

                    <a
                      href="http://www.google.com/maps/dir/?api=1&destination=6275%20N%20KEYSTONE%20AVE+INDIANAPOLIS+IN+46220-2154"
                      className="primaryCTA text-xl font-semibold px-4 py-2 bg-[#862633] text-white rounded transition-colors duration-300 border-2 border-transparent"

                    >
                      Get Directions
                    </a>
                  </div>
                </nav>

              </div>
            </div>
          </div>
          {/* <div className="relative lg:-mr-8 xl:absolute xl:inset-0 w-full md:w-1/2 flex justify-center items-center">
            <Image
              image={c_photo}
              className="w-[90%] !h-full max-w-[800px] object-cover"
            />

          </div> */}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="bg-[white] p-8 text-black">
        <div className="mx-auto md:p-12 gap-4 md:gap-28 flex flex-col md:flex-row justify-between w-full text-[#872533] py-16"
          aria-labelledby="welcome-heading"
        >
          <div className="w-full md:w-1/2">
            <h2 id="welcome-heading" className="font-bold mb-6 text-3xl">
              About Jiffy Lube {address.city}, {" "} {address.region}
              <br />
            </h2>
            <p className="text-xl mb-4">{description}</p>
            {geocodedCoordinate && (
              <StaticMap
                latitude={geocodedCoordinate.latitude}
                longitude={geocodedCoordinate.longitude}
              ></StaticMap>
            )}
          </div>

          <div className="flex flex-col gap-2 pb-4 w-full md:w-1/3">
            {hours && <Hours hours={hours} title="Hours" />}

          </div>
        </div>
      </section>



      {/* Services Section */}
      <section className="bg-[#872533] p-8 text-white">
        {/* Title for the Services Section */}
        <h3 className="text-center text-white text-3xl font-bold mb-8">With a Jiffy Lube Signature Service Oil Change our customers receive so much more:</h3>

        {/* Container for all service cards */}
        <div className="flex flex-col lg:flex-row gap-4 px-4 md:px-16">

          {/* Oil Change Section */}
          <div className="bg-yellow-500 flex flex-col items-center p-6 rounded-lg text-center  w-full md:w-1/4">
            {/* <FaOilCan size={40} className="mb-4" /> */}
            <img src="https://www.jiffylube.com/img/services/oil-change-icons.png" alt="Oil Change Icon" className="mb-4 w-10 h-10" />
            <h3 className="text-2xl font-bold mb-2">OIL CHANGE</h3>
            <ul className="text-gray-800 text-lg list-disc list-inside text-left">
              <li>Oil with up to five quarts of quality motor oil</li>
              <li>Oil filter</li>
            </ul>
          </div>
          <p className="oil-cards-symbol text-3xl text-white lg:hidden mt-2 mx-auto">+</p>
          {/* + Symbol (Desktop Only) */}
          <p className="oil-cards-symbol  lg:flex items-center justify-center text-3xl text-white hidden ">+</p>


          {/* Inspect Key Components Section */}
          <div className="bg-white flex flex-col items-center p-6 rounded-lg text-center text-gray-800  w-full lg:w-1/4">
            {/* <FaCarBattery size={40} className="text-red-900 mb-4" /> */}
            <img src="https://www.jiffylube.com/img/services/oil-change-inspect-key-components.png" alt="Oil Change Icon" className="mb-4 w-10 h-10" />
            <h3 className="text-2xl font-bold text-red-900 mb-2">INSPECT KEY COMPONENTS</h3>
            {/* <ul className="text-lg"> */}
            <ul className="text-gray-800 text-lg list-disc list-inside text-left">
              <li>Antifreeze/coolant reservoir levels</li>
              <li>Engine air filtration system</li>
              <li>Brake fluid level (in transparent reservoirs)</li>
              <li>Wiper blades</li>
              <li>Exterior lights</li>
              <li>Chassis (lubricate when applicable)</li>
            </ul>
          </div>
          <p className="oil-cards-symbol text-3xl text-white lg:hidden mt-2 mx-auto">+</p>
          {/* + Symbol (Desktop Only) */}
          <p className="oil-cards-symbol lg:flex items-center justify-center text-3xl text-white hidden lg:block">+</p>







          {/* Check and Fill Section */}
          <div className=" w-full bg-white flex flex-col items-center p-6 rounded-lg text-center text-gray-800 lg:w-1/4">
            {/* <FaCheckCircle size={40} className="text-red-900 mb-4" /> */}
            <img src="https://www.jiffylube.com/img/services/oil-change-check-fill.png" alt="Oil Change Icon" className="mb-4 w-10 h-10" />
            <h3 className="text-2xl font-bold text-red-900 mb-2">CHECK AND FILL</h3>
            <ul className="text-gray-800 text-lg list-disc list-inside text-left">
              <li>Tire pressures</li>
              <li>Transmission/transaxle fluid</li>
              <li>Differential/transfer case fluid</li>
              <li>Power steering fluid</li>
              <li>Windshield washer fluid</li>
              <li>Battery water (excluding sealed batteries)</li>
            </ul>
          </div>
          <p className="oil-cards-symbol text-3xl text-white lg:hidden mt-2 mx-auto">+</p>
          <p className="oil-cards-symbol lg:flex items-center justify-center text-3xl text-white hidden lg:block">+</p>


          <div className="bg-white flex flex-col items-center p-6 rounded-lg text-center text-gray-800 w-full lg:w-1/4">
            {/* <FaBroom size={40} className="text-red-900 mb-4" /> */}
            <img src="https://www.jiffylube.com/img/services/oil-change-clean.png" alt="Oil Change Icon" className="mb-4 w-10 h-10" />
            <h3 className="text-2xl font-bold text-red-900 mb-2">CLEAN</h3>
            <ul className="text-gray-800 text-lg list-disc list-inside text-left">
              <li>Exterior windows</li>
              <li>Vacuum interior floors</li>
            </ul>
          </div>

        </div>
        <nav aria-label="Account" className="bg-[#862633] text-white mt-8">
          <div className="w-full md:container mx-auto flex justify justify-center space-x-4">
            <a
              href="https://www.jiffylube.com/contact"
              className="primaryCTA text-xl font-semibold px-4 py-2 bg-[#862633] text-white rounded transition-colors duration-300 border-2 border-transparent"

            >
              Make Appointment
            </a>

          </div>
        </nav>
      </section>


      {/* FAQs Section */}
      {/* {c_relatedFAQ && (
        <section
          className="bg-white text-[#872533] py-16 px-4 md:px-0"
          aria-labelledby="faqs-heading"
        >
          <div className="mx-auto md:px-8">
            <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
              <div className="mx-auto sm:text-center">
                <h2
                  id="faqs-heading"
                  className="text-4xl font-semibold leading-7 font-playFair"
                >
                  FAQs
                </h2>
              </div>
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {c_relatedFAQ.map((faq, index) => (
                  <Disclosure key={index} as="div" className="pt-6">
                    <dt>
                      <DisclosureButton className="text-2xl group flex w-full items-start justify-between text-left">
                        <span className="font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <BsPlus
                            aria-hidden="true"
                            className="h-8 w-8 group-data-[open]:hidden"
                          />
                          <BsFileMinus
                            aria-hidden="true"
                            className="h-8 w-8 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12 text-xl">
                      <LexicalRichText
                        serializedAST={JSON.stringify(faq.answerV2.json)}
                      />
                      <Cta cta={faq.c_primaryCTA} className="secondaryCTA" />
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </section>
      )} */}





      {/* Promotions Offers Section */}
      <section className="bg-red-900 p-8 text-white">

        {/* <section className="bg-white py-16" aria-labelledby="offers-heading"> */}
        {/* <div className="mx-auto md:px-8 text-white">
          <div className="mx-auto sm:text-center">
            <h2
              id="offers-heading"
              className="text-3xl font-semibold leading-7 font-playFair"
            >
              Promotional Offers
            </h2>
          </div>
          <div className="mt-20 flow-root px-[8%]">
            <div className="grid grid-cols-1 md:grid-cols-0 gap-16 items-center">
              {c_relatedOffers.map((offer, index) =>
              (
                <article key={index} className="pt-8 lg:pt-0 text-center">
                  <h3 id={index.toString()} className="text-xl leading-7 font-sofiaPro">
                    {offer.name}
                  </h3>
                  <p className="mt-2 flex flex-col items-center justify-center gap-x-1">
                    <img
                      src="https://a.mktgcdn.com/p/APvxktrXtqfpFyml7zJxpuUDqCcPEzsBL96bgh65YVg/279x233.png"
                      alt="Promo Offer"
                      className="mt-4 md:w-72 w-full h-full md:h-56 object-cover rounded-lg"
                    />
                  </p>
                  <div className="leading-6 text-xl h-24 text-center mt-8">
                    {offer.shortDescriptionV2 && (
                      <LexicalRichText
                        serializedAST={JSON.stringify(
                          offer.shortDescriptionV2.json
                        )}
                      />
                    )}
                  </div>

                  <div className="w-full md:container mx-auto flex justify justify-between space-x-2">
                    <a
                      href="https://www.jiffylube.com/coupon/1979014"
                      className="primaryCTA text-xl font-semibold px-4 py-2 bg-[#862633] text-white rounded transition-colors duration-300 border-2 border-transparent"

                    >
                      Get Coupon
                    </a>

                    <a
                      href="https://www.jiffylube.com/coupons"
                      className="primaryCTA text-xl font-semibold px-4 py-2 bg-[#862633] text-white rounded transition-colors duration-300 border-2 border-transparent"

                    >
                      View More
                    </a>
                  </div>


                </article>
              ))}
            </div>
          </div>
        </div> */}
      </section>

    </PageLayout>
  );
};

export default Location;
