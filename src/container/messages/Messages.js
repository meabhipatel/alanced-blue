import Navbar from "../../components/Layout/Navbar";
import threedots from '../../components/images/three-dots-icon.png'
import search from '../../components/images/search.png'
import people from '../../components/images/people.png'
import files from '../../components/images/files.png'
import notepad from '../../components/images/notepad.png'
import cross from '../../components/images/cross.png'
import phone from '../../components/images/phone.png'
import iicon from '../../components/images/iicon.svg'
import paper from '../../components/images/paper.svg'
import paperpin from '../../components/images/paperpin.svg'
import attherate from '../../components/images/attherate.svg'
import smiley from '../../components/images/smiley.svg'
import vthreedots from '../../components/images/vthreedots.svg'
import AudioVisualizer from './AudioVisualizer'
import file_example_MP3_5MG from '../../components/images/file_example_MP3_5MG.mp3'
import AudioMessages from './AudioMessages'

const Messages = () => {
    const audioSrc = {file_example_MP3_5MG}
    return(
        <>
        <Navbar/>
        
<div class="container-sm shadow-lg rounded-lg">
        
    {/* <div class="px-5 py-5 flex justify-between items-center bg-white border-b-2">
      <div class="font-semibold text-2xl">GoingChat</div>
      <div class="w-1/2">
        <input
          type="text"
          name=""
          id=""
          placeholder="search IRL"
          class="rounded-2xl bg-gray-100 py-3 px-5 w-full"
        />
      </div>
      <div
        class="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center"
      >
        RA
      </div>
    </div> */}
    
    <div class="flex flex-row border-t-2 justify-between bg-white">
      
      <div class="flex flex-col h-[86.9vh] w-2/5 border-r-2 overflow-y-auto">
        
        <div class="border-b-2 py-3 px-2 flex items-center justify-between">
          <span className="float-left text-lg font-cardo font-semibold">Chats</span>
          <img className="float-right" src={threedots}></img>
        </div>
        <div class="border-b-2 py-4 px-2">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="search" id="default-search" class="block w-full pr-4 p-2 pl-10 text-sm text-gray-900 border border-gray-300 outline-none rounded-lg " placeholder="Search" required/>
          </div>
        </div>
        <div className="overflow-y-scroll">
        <div class="flex flex-row py-4 px-2 justify-center items-center border-b-2">
          <div class="w-1/4 ml-4">
            <div className="relative">
              <img
                src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                class="object-cover h-12 w-12 rounded-full"
                alt=""
              />
              <span class="bottom-0 left-8 absolute  w-3 h-3 bg-white border-[3px] border-green-400 dark:border-gray-800 rounded-full"></span>
            </div>
          </div>
          <div class="w-full">
            <div class="text-lg text-[#031136] font-cardo w-fit font-semibold">Anthony Daugloi</div>
            <div className="flex-row">
              <span class="text-[#8A8A8A] text-xs float-left">UI Designer - Complex</span>
              <span class="text-[#8A8A8A] text-[10px] float-left">You: do you have any reference card?</span>
            </div>
          </div>
        </div>
        <div class="flex flex-row py-4 px-2 items-center border-b-2">
          <div class="w-1/4 ml-4">
            <div className="relative">
              <img
                src="https://www.famousbirthdays.com/headshots/russell-crowe-6.jpg"
                class="object-cover h-12 w-12 rounded-full"
                alt=""
              />
              <span class="bottom-0 left-8 absolute  w-3 h-3 bg-white border-[3px] border-green-400 dark:border-gray-800 rounded-full"></span>
            </div>
          </div>
          <div class="w-full">
            <div class="text-lg font-semibold text-[#031136] font-cardo w-fit">ByeWind</div>
            <div className="flex-row">
              <span class="text-[#8A8A8A] text-xs float-left">UI Designer - Complex</span>
              <span class="text-[#8A8A8A] text-[10px] float-left">You: do you have any reference card?</span>
            </div>
          </div>
        </div>
        <div class="flex flex-row py-4 px-2 justify-center items-center border-b-2">
          <div class="w-1/4 ml-4">
            <div className="relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGpYTzuO0zLW7yadaq4jpOz2SbsX90okb24Z9GtEvK6Z9x2zS5"
                class="object-cover h-12 w-12 rounded-full"
                alt=""
              />
              <span class="bottom-0 left-8 absolute  w-3 h-3 bg-white border-[3px] border-green-400 dark:border-gray-800 rounded-full"></span>
            </div>
          </div>
          <div class="w-full">
            <div class="text-lg text-[#031136] font-cardo w-fit font-semibold">Jannes Graf</div>
            <div className="flex-row">
              <span class="text-[#8A8A8A] text-xs float-left">UI Designer - Complex</span>
              <span class="text-[#8A8A8A] text-[10px] float-left">You: do you have any reference card?</span>
            </div>
          </div>
        </div>
        <div class="flex flex-row py-4 px-2 justify-center items-center border-b-2">
          <div class="w-1/4 ml-4">
            <div className="relative">
              <img
                src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                class="object-cover h-12 w-12 rounded-full"
                alt=""
              />
              <span class="bottom-0 left-8 absolute  w-3 h-3 bg-white border-[3px] border-green-400 dark:border-gray-800 rounded-full"></span>
            </div>
          </div>
          <div class="w-full">
            <div class="text-lg text-[#031136] font-cardo w-fit font-semibold">David Lynch</div>
            <div className="flex-row">
              <span class="text-[#8A8A8A] text-xs float-left">UI Designer - Complex</span>
              <span class="text-[#8A8A8A] text-[10px] float-left">You: do you have any reference card?</span>
            </div>
          </div>
        </div>
        <div class="flex flex-row py-4 px-2 justify-center items-center border-b-2">
          <div class="w-1/4 ml-4">
            <div className="relative">
              <img
                src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                class="object-cover h-12 w-12 rounded-full"
                alt=""
              />
              <span class="bottom-0 left-8 absolute  w-3 h-3 bg-white border-[3px] border-green-400 dark:border-gray-800 rounded-full"></span>
            </div>
          </div>
          <div class="w-full">
            <div class="text-lg text-[#031136] font-cardo w-fit font-semibold">Anthony Daugloi</div>
            <div className="flex-row">
              <span class="text-[#8A8A8A] text-xs float-left">UI Designer - Complex</span>
              <span class="text-[#8A8A8A] text-[10px] float-left">You: do you have any reference card?</span>
            </div>
          </div>
        </div>
        <div class="flex flex-row py-4 px-2 justify-center items-center border-b-2">
          <div class="w-1/4 ml-4">
            <div className="relative">
              <img
                src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                class="object-cover h-12 w-12 rounded-full"
                alt=""
              />
              <span class="bottom-0 left-8 absolute  w-3 h-3 bg-white border-[3px] border-green-400 dark:border-gray-800 rounded-full"></span>
            </div>
          </div>
          <div class="w-full">
            <div class="text-lg text-[#031136] font-cardo w-fit font-semibold">Anthony Daugloi</div>
            <div className="flex-row">
              <span class="text-[#8A8A8A] text-xs float-left">UI Designer - Complex</span>
              <span class="text-[#8A8A8A] text-[10px] float-left">You: do you have any reference card?</span>
            </div>
          </div>
        </div>
        </div>
        {/* <div
          class="flex flex-row py-4 px-2 items-center border-b-2"
        >
          <div class="w-1/4">
            <img
              src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
              class="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div class="w-full">
            <div class="text-lg font-semibold">MERN Stack</div>
            <span class="text-gray-500">Lusi : Thanks Everyone</span>
          </div>
        </div>
        <div class="flex flex-row py-4 px-2 items-center border-b-2">
          <div class="w-1/4">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div class="w-full">
            <div class="text-lg font-semibold">Javascript Indonesia</div>
            <span class="text-gray-500">Evan : some one can fix this</span>
          </div>
        </div>
        <div class="flex flex-row py-4 px-2 items-center border-b-2">
          <div class="w-1/4">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div class="w-full">
            <div class="text-lg font-semibold">Javascript Indonesia</div>
            <span class="text-gray-500">Evan : some one can fix this</span>
          </div>
        </div>
        <div class="flex flex-row py-4 px-2 items-center border-b-2">
          <div class="w-1/4">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div class="w-full">
            <div class="text-lg font-semibold">Javascript Indonesia</div>
            <span class="text-gray-500">Evan : some one can fix this</span>
          </div>
        </div> */}
        
      </div>
      
      <div class="w-full flex flex-col justify-between">
        <div className="border-b-2 h-16 p-2 flex items-center justify-between">
          <div>
          <div className="flex items-center gap-2 w-fit">
          <div className="border-2 border-[#07BC00] h-3 w-3 rounded-full"></div>
          <span className="text-[20px] font-cardo text-[#031136]">David Lynch</span>
          </div>
          <span className="text-[12px] text-[#8A8A8A] float-left ml-5">3:06 PM EDTAlgorithm and Software Developer</span>
          </div>
          <div className="flex gap-2 items-center float-right">
            <img className="h-[19px] w-[19px]" src={phone}/>
            <img className="h-[25px] w-[25px]" src={iicon}/>
          </div>
        </div>
        <div className="px-5 pr-0">
        <div class="flex flex-col h-[54vh] overflow-y-auto pr-2 mt-5">
        <div class="flex justify-between mb-4">
          <div className="flex justify-start">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-8 w-8 rounded-full"
              alt=""
            />
            <div className="flex-row">
            <div
              class="ml-2 py-3 px-4 text-left w-[45vw] rounded-lg text-[#0A142F]"
            >
              Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </div>
            <span className="text-xs text-[#D7D7D7] float-left ml-6">Yesterday at 8:00 pm</span>
            </div>
            </div>
            <img className="w-fit h-fit" src={vthreedots}/>
          </div>
          <div class="flex justify-end mb-4">
            <div className="flex-row">
            <div
              class="mr-2 py-3 px-4 w-[45vw] text-left bg-[#F6FAFD] rounded-md text-[#0A142F]"
            >
              Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </div>
            <span className="text-xs text-[#D7D7D7] float-right mr-3">Yesterday at 8:00 pm</span>
            </div>
            {/* <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-8 w-8 rounded-full"
              alt=""
            /> */}
            <img className="w-fit h-fit" src={vthreedots}/>
          </div>
          <div class="flex justify-between mb-4">
            <div className="flex justify-start">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-8 w-8 rounded-full"
              alt=""
            />
            <div className="flex-row">
            <div
              class="ml-2 py-3 px-4 text-left w-[45vw] rounded-lg text-[#0A142F]"
            >
              Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </div>
            <span className="text-xs text-[#D7D7D7] float-left ml-6">Yesterday at 8:00 pm</span>
            </div>
            </div>
            <img className="h-fit w-fit" src={vthreedots} alt=""/>
          </div>
          <div class="flex justify-end mb-4">
            <div className="flex-row">
            <div
              class="mr-2 py-3 px-4 w-[45vw] text-left bg-[#F6FAFD] rounded-md text-[#0A142F]"
            >
              Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </div>
            <span className="text-xs text-[#D7D7D7] float-right mr-3">Yesterday at 8:00 pm</span>
            </div>
            {/* <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-8 w-8 rounded-full"
              alt=""
            /> */}
            <img className="w-fit h-fit" src={vthreedots}/>
          </div>
          <div class="flex justify-end mb-4">
            <div className="flex-row">
            <AudioMessages/>
            <span className="text-xs text-[#D7D7D7] float-right mr-3">Yesterday at 8:00 pm</span>
            </div>
            {/* <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-8 w-8 rounded-full"
              alt=""
            /> */}
            <img className="w-fit h-fit mt-2 ml-2" src={vthreedots}/>
          </div>
          
          {/* <AudioVisualizer audioSrc={file_example_MP3_5MG}/> */}
          {/* <AudioMessages/> */}
          {/* <div class="flex justify-end mb-4">
            <div>
              <div
                class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Magnam, repudiandae.
              </div>

              <div
                class="mt-4 mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, reiciendis!
              </div>
            </div>
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-8 w-8 rounded-full"
              alt=""
            />
          </div> */}
          {/* <div class="flex justify-start mb-4">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-8 w-8 rounded-full"
              alt=""
            />
            <div
              class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
            >
              happy holiday guys!
            </div>
          </div> */}
        </div>
        <div class="py-5">
          {/* <input
            class="w-full bg-gray-300 py-5 px-3 rounded-xl"
            type="text"
            placeholder="type your message here..."
          /> */}
          <div className="rounded-lg border-2 border-[#E7E8F2] p-1 pb-2">
            <textarea rows="3" class="block p-2.5 w-full text-sm outline-none resize-none" placeholder="Type Message Here ..."></textarea>
            <div className="flex justify-end gap-2 mr-2">
            <img src={smiley}/>
            <img src={attherate}/>
            <img src={paperpin}/>
            <img className="border-l-2 border-[#D9D9D9] pl-2" src={paper}/>
            </div>
          </div>
        </div>
        </div>
      </div>
      
      <div class="w-2/5 border-l-2">
        <img className="float-right mt-6 mr-6" src={cross}/>
        <div class="flex flex-col items-center w-full border-b-2">
          {/* <div class="font-semibold text-xl py-4">Mern Stack Group</div> */}
          <img
            src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
            class="object-cover rounded-full h-28 w-28 mt-12"
            alt=""
          />
          <div class=" pt-4 text-xl font-cardo">David Lynch</div>
          <div class="text-[#797979] text-sm">
          5:18 AM GMT+10 (4.5 h ahead)
          </div>
          <div class="text-[#0A142F] text-xs mb-6">
          UI Designer - Complex Topics, Simple Designs
          </div>
          </div>
          <div className="pt-6 pl-6 flex flex-col items-start">
            <span className="text-lg font-cardo mb-2 ">Recent files</span>
            <div className="flex items-center py-2">
              <img className="h-3.5 w-3.5 mr-2" src={search}/>
            <span className="text-[#8A8A8A]">Search Messages</span>
            </div>
            <div className="flex items-center py-2">
              <img className="h-4 w-4 mr-2" src={people}/>
            <span className="text-[#8A8A8A]">People</span>
            </div>
            <div className="flex items-center py-2">
              <img className="h-4 w-4 mr-2" src={files}/>
            <span className="text-[#8A8A8A]">Files & Links</span>
            </div>
            <div className="flex items-center py-2">
              <img className="h-4 w-4 mr-2" src={notepad}/>
            <span className="text-[#8A8A8A]">Personal Notepad</span>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
</div>
        </>
    )
}

export default Messages