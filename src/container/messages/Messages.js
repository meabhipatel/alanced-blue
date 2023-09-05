import Navbar from "../../components/Layout/Navbar";
import threedots from '../../components/images/three-dots-icon.png'
import search from '../../components/images/search.png'
import people from '../../components/images/people.png'
import files from '../../components/images/files.png'
import notepad from '../../components/images/notepad.png'
import cross from '../../components/images/cross.png'

const Messages = () => {

    return(
        <>
        <Navbar/>
        
<div class="container mx-auto shadow-lg rounded-lg">
        
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
      
      <div class="flex flex-col w-2/5 border-r-2 overflow-y-auto">
        
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
        
        <div
          class="flex flex-row py-4 px-2 justify-center items-center border-b-2"
        >
          <div class="w-1/4">
            <div className="relative">
            <img
              src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
              class="object-cover h-12 w-12 rounded-full"
              alt=""
            />
            <span class="bottom-0 left-9 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>
          </div>
          <div class="w-full">
            <div class="text-lg font-semibold">Luis1994</div>
            <span class="text-gray-500">Pick me at 9:00 Am</span>
          </div>
        </div>
        <div class="flex flex-row py-4 px-2 items-center border-b-2">
          <div class="w-1/4">
            <img
              src="https://source.unsplash.com/otT2199XwI8/600x600"
              class="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div class="w-full">
            <div class="text-lg font-semibold">Everest Trip 2021</div>
            <span class="text-gray-500">Hi Sam, Welcome</span>
          </div>
        </div>
        <div
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
        </div>
        
      </div>
      
      <div class="w-full flex flex-col justify-between">
        <div className="border-b-2 h-16"></div>
        <div className="px-5">
        <div class="flex flex-col mt-5">
          <div class="flex justify-end mb-4">
            <div
              class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
            >
              Welcome to group everyone !
            </div>
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-8 w-8 rounded-full"
              alt=""
            />
          </div>
          <div class="flex justify-start mb-4">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-8 w-8 rounded-full"
              alt=""
            />
            <div
              class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              at praesentium, aut ullam delectus odio error sit rem. Architecto
              nulla doloribus laborum illo rem enim dolor odio saepe,
              consequatur quas?
            </div>
          </div>
          <div class="flex justify-end mb-4">
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
          </div>
          <div class="flex justify-start mb-4">
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
          </div>
        </div>
        <div class="py-5">
          <input
            class="w-full bg-gray-300 py-5 px-3 rounded-xl"
            type="text"
            placeholder="type your message here..."
          />
        </div>
        </div>
      </div>
      
      <div class="w-2/5 border-l-2">
        <img className="float-right mt-6 mr-6" src={cross}/>
        <div class="flex flex-col items-center w-full border-b-2">
          {/* <div class="font-semibold text-xl py-4">Mern Stack Group</div> */}
          <img
            src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
            class="object-cover rounded-full h-28 w-28 mt-12"
            alt=""
          />
          <div class="font-semibold py-4 text-xl font-cardo">Created 22 Sep 2021</div>
          <div class="font-light mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            perspiciatis!
          </div>
          </div>
          <div className="pt-6 pl-6 flex flex-col items-start">
            <span className="text-lg font-cardo mb-2 ">Recent files</span>
            <div className="flex items-center py-2">
              <img className="h-3.5 w-3.5 mr-2" src={search}/>
            <span>Search Messages</span>
            </div>
            <div className="flex items-center py-2">
              <img className="h-4 w-4 mr-2" src={people}/>
            <span>People</span>
            </div>
            <div className="flex items-center py-2">
              <img className="h-4 w-4 mr-2" src={files}/>
            <span>Files & Links</span>
            </div>
            <div className="flex items-center py-2">
              <img className="h-4 w-4 mr-2" src={notepad}/>
            <span>Personal Notepad</span>
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