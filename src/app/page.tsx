import Image from "next/image";

export default function Home() {
  return (
    <main className=" relative w-[1440px]  h-[4083px] bg-[#F6F6F6] ">
      {/***** Navbar Section */}
      <div className="flex flex-row justify-between bg-[#F6F6F6] items-center gap-[116px] w-[1240px] h-[52px]   mx-[100px] pt-[32px]" >
        <div className="flex items-center flex-row gap-[40px] h-[32px] w-[388px] ">
        <svg width="97" height="32" viewBox="0 0 97 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.1676 10.608L7.76759 30.36H3.35159L6.42359 23.544L0.975586 10.608H5.55959L8.65559 18.984L11.7276 10.608H16.1676Z" fill="#2B2730"/>
            <path d="M23.7476 24.192C22.4356 24.192 21.2516 23.912 20.1956 23.352C19.1556 22.792 18.3316 21.992 17.7236 20.952C17.1316 19.912 16.8356 18.696 16.8356 17.304C16.8356 15.928 17.1396 14.72 17.7476 13.68C18.3556 12.624 19.1876 11.816 20.2436 11.256C21.2996 10.696 22.4836 10.416 23.7956 10.416C25.1076 10.416 26.2916 10.696 27.3476 11.256C28.4036 11.816 29.2356 12.624 29.8436 13.68C30.4516 14.72 30.7556 15.928 30.7556 17.304C30.7556 18.68 30.4436 19.896 29.8196 20.952C29.2116 21.992 28.3716 22.792 27.2996 23.352C26.2436 23.912 25.0596 24.192 23.7476 24.192ZM23.7476 20.64C24.5316 20.64 25.1956 20.352 25.7396 19.776C26.2996 19.2 26.5796 18.376 26.5796 17.304C26.5796 16.232 26.3076 15.408 25.7636 14.832C25.2356 14.256 24.5796 13.968 23.7956 13.968C22.9956 13.968 22.3316 14.256 21.8036 14.832C21.2756 15.392 21.0116 16.216 21.0116 17.304C21.0116 18.376 21.2676 19.2 21.7796 19.776C22.3076 20.352 22.9636 20.64 23.7476 20.64Z" fill="#2B2730"/>
            <path d="M32.1169 17.28C32.1169 15.904 32.3729 14.696 32.8849 13.656C33.4129 12.616 34.1249 11.816 35.0209 11.256C35.9169 10.696 36.9169 10.416 38.0209 10.416C38.9009 10.416 39.7009 10.6 40.4209 10.968C41.1569 11.336 41.7329 11.832 42.1489 12.456V6.23999H46.2529V24H42.1489V22.08C41.7649 22.72 41.2129 23.232 40.4929 23.616C39.7889 24 38.9649 24.192 38.0209 24.192C36.9169 24.192 35.9169 23.912 35.0209 23.352C34.1249 22.776 33.4129 21.968 32.8849 20.928C32.3729 19.872 32.1169 18.656 32.1169 17.28ZM42.1489 17.304C42.1489 16.28 41.8609 15.472 41.2849 14.88C40.7249 14.288 40.0369 13.992 39.2209 13.992C38.4049 13.992 37.7089 14.288 37.1329 14.88C36.5729 15.456 36.2929 16.256 36.2929 17.28C36.2929 18.304 36.5729 19.12 37.1329 19.728C37.7089 20.32 38.4049 20.616 39.2209 20.616C40.0369 20.616 40.7249 20.32 41.2849 19.728C41.8609 19.136 42.1489 18.328 42.1489 17.304Z" fill="#2B2730"/>
            <path d="M55.318 24.192C54.006 24.192 52.822 23.912 51.766 23.352C50.726 22.792 49.902 21.992 49.294 20.952C48.702 19.912 48.406 18.696 48.406 17.304C48.406 15.928 48.71 14.72 49.318 13.68C49.926 12.624 50.758 11.816 51.814 11.256C52.87 10.696 54.054 10.416 55.366 10.416C56.678 10.416 57.862 10.696 58.918 11.256C59.974 11.816 60.806 12.624 61.414 13.68C62.022 14.72 62.326 15.928 62.326 17.304C62.326 18.68 62.014 19.896 61.39 20.952C60.782 21.992 59.942 22.792 58.87 23.352C57.814 23.912 56.63 24.192 55.318 24.192ZM55.318 20.64C56.102 20.64 56.766 20.352 57.31 19.776C57.87 19.2 58.15 18.376 58.15 17.304C58.15 16.232 57.878 15.408 57.334 14.832C56.806 14.256 56.15 13.968 55.366 13.968C54.566 13.968 53.902 14.256 53.374 14.832C52.846 15.392 52.582 16.216 52.582 17.304C52.582 18.376 52.838 19.2 53.35 19.776C53.878 20.352 54.534 20.64 55.318 20.64Z" fill="#2B2730"/>
            <path d="M68.6072 12.84C69.0872 12.104 69.6872 11.528 70.4072 11.112C71.1272 10.68 71.9272 10.464 72.8072 10.464V14.808H71.6792C70.6552 14.808 69.8872 15.032 69.3752 15.48C68.8632 15.912 68.6072 16.68 68.6072 17.784V24H64.5032V10.608H68.6072V12.84Z" fill="#2B2730"/>
            <path d="M73.9528 17.28C73.9528 15.904 74.2088 14.696 74.7208 13.656C75.2488 12.616 75.9608 11.816 76.8568 11.256C77.7528 10.696 78.7528 10.416 79.8568 10.416C80.8008 10.416 81.6248 10.608 82.3288 10.992C83.0488 11.376 83.6008 11.88 83.9848 12.504V10.608H88.0888V24H83.9848V22.104C83.5848 22.728 83.0248 23.232 82.3048 23.616C81.6008 24 80.7768 24.192 79.8328 24.192C78.7448 24.192 77.7528 23.912 76.8568 23.352C75.9608 22.776 75.2488 21.968 74.7208 20.928C74.2088 19.872 73.9528 18.656 73.9528 17.28ZM83.9848 17.304C83.9848 16.28 83.6968 15.472 83.1208 14.88C82.5608 14.288 81.8728 13.992 81.0568 13.992C80.2408 13.992 79.5448 14.288 78.9688 14.88C78.4088 15.456 78.1288 16.256 78.1288 17.28C78.1288 18.304 78.4088 19.12 78.9688 19.728C79.5448 20.32 80.2408 20.616 81.0568 20.616C81.8728 20.616 82.5608 20.32 83.1208 19.728C83.6968 19.136 83.9848 18.328 83.9848 17.304Z" fill="#2B2730"/>
          <circle cx="92" cy="22.5" r="2" fill="#FFB84C"/>
        </svg>
        <div className="flex items-start gap-[24px] h-[24px] w-[252px] order-1">
          <a href="#" className="text-[#2B2730]">Explore</a>
          <a href="#" className="text-[#2B2730]">Company</a>
          <a href="#" className="text-[#2B2730]">Support</a>
        </div>
      </div>
      <div className="flex items-center gap-[20px] h-[52px] w-[288px]">
        <a href="#" className="text-[#2B2730]">Become a member</a>
        <button className="flex justify-center gap-2 h-[52px] w-[114px] rounded-[100px] bg-[#2B2730] px-[20px] py-[14px]">
          <p className="text-white text-center ">Sign in</p>
        </button>
      </div>
    </div>
    {/**banner Section */}
    <div className="h-[1204px] w-[1050px] mx-[100px] mt-[183px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <div className="w-[1203px] h-[258px] top-0 left-0">
        <h1 className="leading-[80px] text-[72px] text-start font-bold not-italic font-['Poppins'] w-[922px] h-[240px] top-[18px] left-0 text-[#2B2730] ">Learn from your <br />
        favorite creators <br /> about <span className="text-[#FFB84C]">fantasy reports</span> </h1>
        <div className="ml-[999px] h-[204px] w-[204px] top-0 absolute">
          <svg width="204" height="204" viewBox="0 0 204 204" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="102" cy="102" r="101" stroke="#2B2730" stroke-width="2"/>
          </svg>
          <div className="box-border h-[164px] w-[164px] left-[20px] top-[18px] bg-[#2B2730] border border-black rounded-[164px] absolute">
            <div className="absolute h-[89px] w-[109px] left-[27.5px] top-[27.5px]">
              <h1 className="absolute w-[41px] h-[59px] ml-[41px]  font-['Poppins'] font-bold text-white text-[39.36px] leading-[59px]">1:1</h1>
              <h1 className="absolute w-[109px] h-[30px]  top-[70px] font-['Poppins'] font-bold text-white text-[19.68px] leading-[30px]">video calls</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute w-[1440px] h-[1572px]  left-0 top-[905px] bg-[#2B2730]"></div>
    <div className="absolute left-0 top-[570px]  mx-[100px]  w-[1204px] h-[675.65px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] ">
        <img
        src="/img.png"
        className="h-[675.65px] w-[1204px]"
        alt="Creator Image"
        />
      </div>
      {/**team Section */}
      <div className=" absolute flex flex-col items-start p-0  w-[1200px] h-[1018px] left-[70px] top-[1351px]">
        <h2 className="w-[1233px] h-[144px] font-['Poppins']  not-italic font-bold text-[64px] ml-[30px] leading-[72px] text-[#FFB84C] ">Get direct <br /><span className="text-white">knowledge and insight.</span></h2>
        
        <div className="absolute flex flex-row justify-center mt-[260px] mx-2 items-center p-0 gap-[32px] w-[1240px] h-[522px]">
          <div className="w-[392px] h-[522px] ">
            <img src="/img-card.png" className="rounded-[32px]" alt="" />
          </div>
          <div className="w-[392px] h-[522px] ">
            <img src="/img-card (1).png" className="rounded-[32px]" alt="" />
          </div>
          <div className="w-[392px] h-[522px] ">
            <img src="/img-card (2).png" className="rounded-[32px]" alt="" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-end p-0 gap-[270px] w-[1240px] h-[120px] left-0 mt-[770px]">
          <div className="flex flex-row items-end p-0 gap-[25px]  w-[703px] h-[120px]">
            <div className="flex flex-col items-start p-0 gap-[8px] w-[213px] h-[120px]">
              <h2 className=" w-[123px] h-[72px] font-['Poppins'] font-bold text-[64px] leading-[72px] not-italic text-[#FFB84C]">300</h2>
              <p className="w-[134px] h-[40px] font-['Poppins'] font-normal text-[32px] leading-10 text-white">creators</p>
            </div>
            <div className="flex flex-col items-start p-0 gap-[8px] w-[213px] h-[120px]">
              <h2 className=" w-[123px] h-[72px] font-['Poppins'] font-bold text-[64px] leading-[72px] not-italic text-[#FFB84C]">14.4k</h2>
              <p className="w-[134px] h-[40px] font-['Poppins'] font-normal text-[32px] leading-10 text-white">users</p>
            </div>
            <div className="flex flex-col items-start p-0 gap-[8px] w-[213px] h-[120px]">
              <h2 className=" w-[123px] h-[72px] font-['Poppins'] font-bold text-[64px] leading-[72px] not-italic text-[#FFB84C]">9.11k</h2>
              <p className="w-[134px] h-[40px] font-['Poppins'] font-normal text-[32px] leading-10 text-white">session</p>
            </div>
          </div>
          <div className="flex flex-row items-center p-0 gap-2 mx-auto w-[295px] h-[80px]">
            <h1 className="w-[215px] h-[80px] font-['Poppins'] font-medium text-[32px] leading-10 text-white">Explore the marketplace</h1>
            <div className="w-16 h-16 bg-[#FFB84C] rounded-full">
            <svg width="15" className="ml-6 mt-5" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13L1 25" stroke="#2B2730" stroke-width="2" stroke-linecap="round"/>
            </svg>
            </div>
          </div>
        </div>
      </div>
      {/*features Section */}
      <div className="flex flex-row items-start p-0 gap-[30px] absolute w-[1240px] h-[592px] left-1/2 transform -translate-x-1/2 top-[2620px] ml-[20px]">
        <div className="flex flex-col justify-end items-start p-0 gap-y-6 w-[604px] h-[276px]">
          <h1 className="w-[508px] h-[128px] font-['Poppins'] font-[700] text-[64px] leading-[72px] not-italic tracking-tight text-[#2B2730]">Why become a creator?</h1>
          <p className="w-[508px] h-[48px] font-['Poppins'] pt-3 font-[500] text-[16px] leading-[24px] not-italic tracking-tight text-[#2B2730]">Engage with your supporter and subscriber to sell your skills, knowledge and passions</p>
          <button className="flex flex-row items-center mt-2 justify-center px-8 py-[20px] w-[182px] h-[52px] gap-2 bg-[#2B2730] rounded-[32px]">
            <p className="w-[118px] h-[20px] font-['Inter'] font-medium text-sm  text-white">Become a creator </p>
          </button>
        </div>

        <div className="flex flex-col items-start p-0 gap-8 w-[606px] h-[592px]">
          <div className="flex flex-row items-start p-0 gap-8 w-[606px] h-[280px]">
            <div className="flex flex-col items-start p-0 gap-4 w-[286px] h-[280px]">
            <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="64" cy="64" r="15" stroke="#2B2730" stroke-width="4"/>
                <circle cx="64" cy="64" r="60" stroke="#2B2730" stroke-width="4"/>
                <circle cx="63.9922" cy="64" r="35" stroke="#2B2730" stroke-width="4"/>
            </svg>
            <h1 className="w-[286px] h-[32px] font-['Poppins']  font-bold text-[24px] leading-8 text-[#2B2730]">Engagement</h1>
            <p className="w-[286px] h-[48px] font-['Poppins'] font-normal text-base  text-[#2B2730]">Engage on a deeper level with the fans that matter most</p>
            </div>
            <div className="flex flex-col items-start p-0 gap-4 w-[286px] h-[280px]">
            <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="4" width="46.1538" height="46.1538" rx="8" stroke="#2B2730" stroke-width="4"/>
                <path d="M70 27.3594H118.462M118.462 27.3594L105.348 40.923M118.462 27.3594L105.348 13.2307" stroke="#2B2730" stroke-width="4"/>
                <path d="M58.4615 101.206H10M10 101.206L23.1131 114.769M10 101.206L23.1131 87.0769" stroke="#2B2730" stroke-width="4"/>
                <rect x="72.3077" y="77.8462" width="46.1538" height="46.1538" rx="8" stroke="#2B2730" stroke-width="4"/>
            </svg>
            <h1 className="w-[286px] h-[32px] font-['Poppins']  font-bold text-[24px] leading-8 text-[#2B2730]">Autonomy </h1>
            <p className="w-[286px] h-[48px] font-['Poppins'] font-normal text-base  text-[#2B2730]">Full autonomy on when and who you talk to.</p>
            </div>
          </div>
          <div className="flex flex-row items-start p-0 gap-[34px] w-[606px] h-[280px]">
              <div className="flex flex-col items-start p-0 gap-4 w-[286px] h-[280px]">
              <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="64" cy="64" r="13" stroke="#2B2730" stroke-width="4"/>
                  <circle cx="64" cy="64" r="58" stroke="#2B2730" stroke-width="4"/>
                  <path d="M108.669 57.2552C112.816 60.8732 112.816 67.1268 108.669 70.7448C102.77 75.8903 94.664 82.5069 86.4208 87.8258C82.2994 90.4851 78.1818 92.795 74.3177 94.4346C70.4319 96.0835 66.9284 97 64 97C61.0716 97 57.5681 96.0835 53.6823 94.4346C49.8182 92.795 45.7006 90.4851 41.5792 87.8258C33.336 82.5069 25.2303 75.8903 19.3315 70.7448C15.1838 67.1268 15.1838 60.8732 19.3315 57.2552C25.2303 52.1097 33.336 45.4931 41.5792 40.1742C45.7006 37.5149 49.8182 35.205 53.6823 33.5654C57.5681 31.9165 61.0716 31 64 31C66.9284 31 70.4319 31.9165 74.3177 33.5654C78.1818 35.205 82.2994 37.5149 86.4208 40.1742C94.664 45.4931 102.77 52.1097 108.669 57.2552Z" stroke="#2B2730" stroke-width="4"/>
              </svg>
              <h1 className="w-[286px] h-[32px] font-['Poppins']  font-bold text-[24px] leading-8 text-[#2B2730]">Free </h1>
            <p className="w-[286px] h-[48px] font-['Poppins'] font-normal text-base  text-[#2B2730]">No monthly fee or sign-up fee</p>
              </div>
              <div className="flex flex-col items-start p-0 gap-4 w-[286px] h-[280px]">
              <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M54.0152 18.1886C57.9919 11.3419 67.8492 11.2537 71.9479 18.0281L96.2116 58.132L108.343 78.184L120.475 98.236C124.679 105.183 119.676 114.056 111.557 114.056H16.4427C8.40622 114.056 3.39245 105.346 7.42877 98.3966L19.0754 78.3446L30.722 58.2926L54.0152 18.1886Z" stroke="#2B2730" stroke-width="4"/>
              </svg>
              <h1 className="w-[286px] h-[32px] font-['Poppins']  font-bold text-[24px] leading-8 text-[#2B2730]">Earn  </h1>
            <p className="w-[286px] h-[48px] font-['Poppins'] font-normal text-base  text-[#2B2730]">Add a new source of income that you can control</p>
              </div>
          </div>
        </div>
      </div>
      {/*cta Section */}
      <div className="flex flex-col justify-center items-center px-[116px] py-0 gap-6 absolute w-[1240px] h-[420px] left-1/2 transform -translate-x-1/2 top-[3301px] bg-[#2B2730] rounded-[32px]">
        <h1 className="w-[625px] h-[64px] font-['Poppins'] font-bold text-[56px]  leading-[64px] text-white">Engage without limits</h1>
        <p className="w-[569px] h-[24px] font-['Poppins'] font-normal text-base leading-6 text-white">Join a growing community and talk directly with your favorites creators</p>
        <button className="flex flex-row items-start  px-4 py-[20px]  gap-[10px] w-[145px] h-[52px] bg-[#FFB84C] rounded-full">
          <p className="w-[81px] h-[20px] font-['Poppins'] ml-3 font-medium text-sm leading-5 text-[#2B2730]">Get Started </p>
        </button>
      </div>
      {/*footer Section */}
      <div className="flex flex-row justify-between items-start p-0 gap-[163px] absolute w-[1240px] h-[32px] left-1/2 transform -translate-x-1/2 top-[3837px]">
        <div className="flex flex-col justify-between items-start p-0 gap-[10px] w-[424px] h-[130px]">
        <svg width="97" height="32" viewBox="0 0 97 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.1676 10.608L7.76759 30.36H3.35159L6.42359 23.544L0.975586 10.608H5.55959L8.65559 18.984L11.7276 10.608H16.1676Z" fill="#2B2730"/>
            <path d="M23.7476 24.192C22.4356 24.192 21.2516 23.912 20.1956 23.352C19.1556 22.792 18.3316 21.992 17.7236 20.952C17.1316 19.912 16.8356 18.696 16.8356 17.304C16.8356 15.928 17.1396 14.72 17.7476 13.68C18.3556 12.624 19.1876 11.816 20.2436 11.256C21.2996 10.696 22.4836 10.416 23.7956 10.416C25.1076 10.416 26.2916 10.696 27.3476 11.256C28.4036 11.816 29.2356 12.624 29.8436 13.68C30.4516 14.72 30.7556 15.928 30.7556 17.304C30.7556 18.68 30.4436 19.896 29.8196 20.952C29.2116 21.992 28.3716 22.792 27.2996 23.352C26.2436 23.912 25.0596 24.192 23.7476 24.192ZM23.7476 20.64C24.5316 20.64 25.1956 20.352 25.7396 19.776C26.2996 19.2 26.5796 18.376 26.5796 17.304C26.5796 16.232 26.3076 15.408 25.7636 14.832C25.2356 14.256 24.5796 13.968 23.7956 13.968C22.9956 13.968 22.3316 14.256 21.8036 14.832C21.2756 15.392 21.0116 16.216 21.0116 17.304C21.0116 18.376 21.2676 19.2 21.7796 19.776C22.3076 20.352 22.9636 20.64 23.7476 20.64Z" fill="#2B2730"/>
            <path d="M32.1169 17.28C32.1169 15.904 32.3729 14.696 32.8849 13.656C33.4129 12.616 34.1249 11.816 35.0209 11.256C35.9169 10.696 36.9169 10.416 38.0209 10.416C38.9009 10.416 39.7009 10.6 40.4209 10.968C41.1569 11.336 41.7329 11.832 42.1489 12.456V6.23999H46.2529V24H42.1489V22.08C41.7649 22.72 41.2129 23.232 40.4929 23.616C39.7889 24 38.9649 24.192 38.0209 24.192C36.9169 24.192 35.9169 23.912 35.0209 23.352C34.1249 22.776 33.4129 21.968 32.8849 20.928C32.3729 19.872 32.1169 18.656 32.1169 17.28ZM42.1489 17.304C42.1489 16.28 41.8609 15.472 41.2849 14.88C40.7249 14.288 40.0369 13.992 39.2209 13.992C38.4049 13.992 37.7089 14.288 37.1329 14.88C36.5729 15.456 36.2929 16.256 36.2929 17.28C36.2929 18.304 36.5729 19.12 37.1329 19.728C37.7089 20.32 38.4049 20.616 39.2209 20.616C40.0369 20.616 40.7249 20.32 41.2849 19.728C41.8609 19.136 42.1489 18.328 42.1489 17.304Z" fill="#2B2730"/>
            <path d="M55.318 24.192C54.006 24.192 52.822 23.912 51.766 23.352C50.726 22.792 49.902 21.992 49.294 20.952C48.702 19.912 48.406 18.696 48.406 17.304C48.406 15.928 48.71 14.72 49.318 13.68C49.926 12.624 50.758 11.816 51.814 11.256C52.87 10.696 54.054 10.416 55.366 10.416C56.678 10.416 57.862 10.696 58.918 11.256C59.974 11.816 60.806 12.624 61.414 13.68C62.022 14.72 62.326 15.928 62.326 17.304C62.326 18.68 62.014 19.896 61.39 20.952C60.782 21.992 59.942 22.792 58.87 23.352C57.814 23.912 56.63 24.192 55.318 24.192ZM55.318 20.64C56.102 20.64 56.766 20.352 57.31 19.776C57.87 19.2 58.15 18.376 58.15 17.304C58.15 16.232 57.878 15.408 57.334 14.832C56.806 14.256 56.15 13.968 55.366 13.968C54.566 13.968 53.902 14.256 53.374 14.832C52.846 15.392 52.582 16.216 52.582 17.304C52.582 18.376 52.838 19.2 53.35 19.776C53.878 20.352 54.534 20.64 55.318 20.64Z" fill="#2B2730"/>
            <path d="M68.6072 12.84C69.0872 12.104 69.6872 11.528 70.4072 11.112C71.1272 10.68 71.9272 10.464 72.8072 10.464V14.808H71.6792C70.6552 14.808 69.8872 15.032 69.3752 15.48C68.8632 15.912 68.6072 16.68 68.6072 17.784V24H64.5032V10.608H68.6072V12.84Z" fill="#2B2730"/>
            <path d="M73.9528 17.28C73.9528 15.904 74.2088 14.696 74.7208 13.656C75.2488 12.616 75.9608 11.816 76.8568 11.256C77.7528 10.696 78.7528 10.416 79.8568 10.416C80.8008 10.416 81.6248 10.608 82.3288 10.992C83.0488 11.376 83.6008 11.88 83.9848 12.504V10.608H88.0888V24H83.9848V22.104C83.5848 22.728 83.0248 23.232 82.3048 23.616C81.6008 24 80.7768 24.192 79.8328 24.192C78.7448 24.192 77.7528 23.912 76.8568 23.352C75.9608 22.776 75.2488 21.968 74.7208 20.928C74.2088 19.872 73.9528 18.656 73.9528 17.28ZM83.9848 17.304C83.9848 16.28 83.6968 15.472 83.1208 14.88C82.5608 14.288 81.8728 13.992 81.0568 13.992C80.2408 13.992 79.5448 14.288 78.9688 14.88C78.4088 15.456 78.1288 16.256 78.1288 17.28C78.1288 18.304 78.4088 19.12 78.9688 19.728C79.5448 20.32 80.2408 20.616 81.0568 20.616C81.8728 20.616 82.5608 20.32 83.1208 19.728C83.6968 19.136 83.9848 18.328 83.9848 17.304Z" fill="#2B2730"/>
          <circle cx="92" cy="22.5" r="2" fill="#FFB84C"/>
        </svg>
        <div className="flex flex-row items-start p-0 gap-2  w-[88px] h-[24px]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 10.2V14.1875C3 16.8181 3 18.1334 3.59458 19.0984C3.92224 19.6301 4.36988 20.0778 4.90164 20.4054C5.86658 21 7.18189 21 9.8125 21H13.8C16.7998 21 18.2997 21 19.3511 20.2361C19.6907 19.9893 19.9893 19.6907 20.2361 19.3511C21 18.2997 21 16.7998 21 13.8V10.2C21 7.20021 21 5.70032 20.2361 4.64886C19.9893 4.30928 19.6907 4.01065 19.3511 3.76393C18.2997 3 16.7998 3 13.8 3H10.2C7.20021 3 5.70032 3 4.64886 3.76393C4.30928 4.01065 4.01065 4.30928 3.76393 4.64886C3 5.70032 3 7.20021 3 10.2Z" stroke="#2B2730" stroke-width="1.5"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.638 9.49555C14.2538 9.89017 14.2778 10.2119 14.2778 10.8986V11.9809H16.8333L16.3125 14.1455H14.2778V21H11.9444V14.1455H10V11.9809H11.9444V10.8986C11.9444 10.1423 12.0484 8.92591 12.9064 8.04465C13.8734 7.05154 15.0556 6.79439 17 7.15515V9.31974C15.4916 8.9381 14.8412 9.28681 14.638 9.49555Z" fill="#2B2730"/>
        </svg>

        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 18.099C15.8681 21.7976 19.0851 13.219 19.0851 8.46739L21 6.54106L19.0851 7L20.234 5L17.9362 5.77053C13.034 3.61304 11.8085 7.44001 11.8085 9.62319C9.35745 11.1642 5.68085 7.69686 4.14894 5.77053C3.53617 7.31159 4.91489 9.49476 5.68085 10.3937H3.38298C3.68936 11.3184 5.80851 12.8337 6.82979 13.4758L4.91489 14.2464C5.52766 16.0957 7.7234 16.3011 8.74468 16.1727C8.4383 17.0973 4.78723 17.8422 3 18.099Z" stroke="#2B2730" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2 21H13.8C16.7998 21 18.2997 21 19.3511 20.2361C19.6907 19.9893 19.9893 19.6907 20.2361 19.3511C21 18.2997 21 16.7998 21 13.8V10.2C21 7.20021 21 5.70032 20.2361 4.64886C19.9893 4.30928 19.6907 4.01065 19.3511 3.76393C18.2997 3 16.7998 3 13.8 3H10.2C7.20021 3 5.70032 3 4.64886 3.76393C4.30928 4.01065 4.01065 4.30928 3.76393 4.64886C3 5.70032 3 7.20021 3 10.2V13.8C3 16.7998 3 18.2997 3.76393 19.3511C4.01065 19.6907 4.30928 19.9893 4.64886 20.2361C5.70032 21 7.20021 21 10.2 21Z" stroke="#2B2730" stroke-width="1.5"/>
              <circle cx="12" cy="12" r="4" stroke="#2B2730" stroke-width="1.5"/>
              <circle cx="17" cy="7" r="1" fill="#2B2730"/>
        </svg>


        </div>
        </div>
        <div className="flex flex-row items-start p-0 gap-[4px] mx-auto w-[816px] h-[130px]">
          <div className="flex flex-col items-start p-0 gap-4 w-[180px] h-[130px]">
            <h1 className="w-[57px] h-[26px] font-['poppins'] font-bold text-[18px] leading-[26px] text-[#2B2730]">About</h1>
            <div className="flex flex-col items-start p-0 gap-2 w-[119px] h-[88px]">
              <p className="w-[99px] h-[24px] font-['poppins'] font-normal text-base leading-6 text-[#2B2730]">How it works</p>
              <p className="w-[99px] h-[24px] font-['poppins'] font-normal text-base leading-6 text-[#2B2730]">Company</p>
              <p className="w-[199px] h-[24px] font-['poppins'] font-normal text-base leading-6 text-[#2B2730]">Help & support</p>
            </div>
          </div>
          <div className="flex flex-col items-start p-0 gap-4 w-[150px] h-[56px]">
            <h1 className="w-[112px] h-[26px] font-['poppins'] font-bold text-[18px] leading-[26px] text-[#2B2730]">For creators</h1>
            <div className="flex flex-col items-start p-0 gap-2 w-[119px] h-[88px]">
              <p className="w-[150px] h-[24px] font-['poppins'] font-normal text-base leading-6 text-[#2B2730]">How can I get paid</p>
              <p className="w-[150px] h-[24px] font-['poppins'] font-normal text-base leading-6 text-[#2B2730]">Become a creator</p>
            </div>
          </div>
          <div className="flex flex-col items-start ml-[60px] p-0 gap-4 w-[180px] h-[130px]">
            <h1 className="w-[52px] h-[26px] font-['poppins'] font-bold text-[18px] leading-[26px] text-[#2B2730]">Learn</h1>
            <div className="flex flex-col items-start p-0 gap-2 w-[119px] h-[88px]">
              <p className="w-[35px] h-[24px] font-['poppins'] font-normal text-base leading-6 text-[#2B2730]">Blog</p>
              <p className="w-[116px] h-[24px] font-['poppins'] font-normal text-base leading-6 text-[#2B2730]">Cookies policy </p>
              <p className="w-[116px] h-[24px] font-['poppins'] font-normal text-base leading-6 text-[#2B2730]">Privacy policy</p>
            </div>
          </div>
          <div className="flex flex-col items-start p-0 gap-4 w-[150px] h-[56px]">
            <h1 className="w-[72px] h-[26px] font-['poppins'] font-bold text-[18px] leading-[26px] text-[#2B2730]">Support</h1>
            <div className="flex flex-col items-start p-0 gap-2 w-[119px] h-[88px]">
              <p className="w-[112px] h-[24px] font-['poppins'] font-normal text-base leading-6 text-[#2B2730]">Service status</p>
              <p className="w-[107px] h-[24px] font-['poppins'] font-normal text-base leading-6 text-[#2B2730]">Report abuse</p>
              <p className="w-[153px] h-[24px] font-['poppins'] font-normal text-base leading-6 text-[#2B2730]">Dispute a payment</p>
            </div>
          </div>
        </div>
      </div>
  </main>
  );
}