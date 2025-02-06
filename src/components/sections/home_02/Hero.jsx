import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id='hero-section'>
      <div className='relative overflow-hidden bg-black text-white'>
        {/* Section Spacer */}
        <div className='pb-28 pt-28 md:pb-40 lg:pt-28 xl:pb-[90px] xl:pt-[122px]'>
          {/* Section Container */}
          <div className='global-container'>
            <div className='grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,_1fr)_0.7fr]'>
              {/* Hero Content */}
              <div>
                <h1 className='jos mb-6 max-w-md break-words font-clashDisplay text-5xl font-medium leading-none text-white md:max-w-full md:text-6xl lg:text-7xl xl:text-8xl xxl:text-[100px]'>
                Revolutionize Takeoff with AI
                </h1>
                <p className='jos mb-11'>
                  Upload blueprints in image format and let our AI-powered agent handle the takeoff process with precision and speed. Designed for quantity surveyors and construction managers, it streamlines material estimation, improves accuracy, and saves valuable time. With future enhancements on the way, this intelligent tool will continue evolving to meet the needs of the construction industry.
                </p>
                {/* <Link
                  rel='noopener noreferrer'
                  to='#takeoff'
                  className='jos button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[18px] text-white after:bg-colorOrangyRed hover:text-white'
                >
                  Give it a try
                  <img
                    src='assets/img/th-2/icon-white-long-arrow-right.svg'
                    alt='icon-white-long-arrow-right'
                  />
                </Link> */}
              </div>
              {/* Hero Content */}
              {/* Hero Image */}
              <div className='hero-img animate-pulse overflow-hidden rounded-2xl bg-black text-right'>
                <img
                  src='assets/img/th-2/hero-img-2.png'
                  alt='hero-img-2'
                  width={1296}
                  height={640}
                  className='h-auto w-full'
                />
              </div>
              {/* Hero Image */}
            </div>
          </div>
          {/* Section Container */}
        </div>
        {/* Section Spacer */}
        {/* Background Gradient */}
        <div className='absolute left-1/2 top-[80%] h-[1280px] w-[1280px] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#5636C7] to-[#5028DD] blur-[250px]'></div>
        {/* <div className="absolute bottom-0 left-1/2 h-[77px] w-full -translate-x-1/2 bg-[url('/assets/img/th-2/arc-top-shape-1.svg')] bg-cover bg-center bg-no-repeat"></div> */}
      </div>
    </section>
  );
};

export default Hero;
