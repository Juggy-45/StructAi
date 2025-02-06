import FileUploader from "./FileUploader";
import robot_img from "../../../assets/img/Robot-ills.png"

const Content_01 = () => {
  return (
    <section id="content-section-1 w-[85%]">
      <div className="md: md:pt-32 lg:pb-28 xl: xl:pt-[130px] xxl:pt-[200px]">
        <div className="global-container">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_.8fr)_1fr] xl:gap-28 xxl:gap-[134px]">
            {/* Left Side - File Uploader */}
            <div className="jos order-1 md:order-2" data-jos_animation="fade-right">
             <img src={robot_img} alt="" className="w-[100%]"/>
            </div>

            {/* Right Side - Text Content */}
            <div className="jos order-2 mt-16 rounded-md md:order-1 md:mt-0" data-jos_animation="fade-up">
              <div className="mb-6">
                <h2 className="font-clashDisplay text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[75px]">
                  AI-Powered Takeoff
                </h2>
              </div>
              <div className="text-lg leading-[1.66]">
                <p className="mb-7 last:mb-0">
                  Upload your engineering blueprints in png, jpeg or any image format, and our AI will generate a precise material takeoff.
                </p>
                <ul className="mt-12 flex flex-col gap-y-6 font-clashDisplay text-[22px] font-medium leading-[1.28] tracking-[1px] lg:text-[28px]">
                  <li className="relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet">
                    Upload blueprint image.
                  </li>
                  <li className="relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet">
                    AI processes and extracts takeoff details
                  </li>
                  <li className="relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet">
                    Download results in MS Word format
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content_01;
