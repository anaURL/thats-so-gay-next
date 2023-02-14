import {useState} from 'react';
import { useScrollBy } from "react-use-window-scroll";


type Props = {
  microagressions: [Microagression]
}

type Microagression = {
  _id: string;
  title: string;
  content: string;
}

export default function Microagressions(props: Props) {
  const [microagressions, setMicroagressions] = useState<[Microagression]>(props.microagressions);
  const scrollBy = useScrollBy();

{/* Handling delete option */}

  // const handleDeleteMicroagression = async (microagressionId: string) => {
  //   try {
  //     let response = await fetch(
  //       "http://localhost:3000/api/deleteMicroagression?id=" + microagressionId,
  //       {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json, text/plain, */*",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     response = await response.json();
  //     window.location.reload();
  //   } catch (error) {
  //     console.log("An error occurred while deleting ", error);
  //   }
  // };


return (
    <div className="bg-purple">
        <main className="flex flex-row md:h-screen md:mx-auto ">
            <div className="lg:max-w-3xl py-32 lg:py-56 items-start md:flex md:basis-1/2 ">
              <div className="lg:max-w-xl md:w-full text-center overflow-hidden">
                <h1 className="block items-center text-7xl lg:text-6xl font-black text-lime tracking-tight mb-4 drop-shadow-lg shadow-lime text-center">
                  That's so gay!
                </h1>
                <p className="block xl:inline text-white font-light text-4xl leading-normal lg:text-2xl text-center overflow-hidden">
                  Why you shouldn't be using this and other microagressions
                  toward the queer community
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center ">
                  <div className="rounded-md">
                    {" "}
                    <button className="rounded-md border-2 px-8 py-3 text-2xl lg:text-base font-bold md:py-4 md:px-10 text-black bg-gradient-to-r from-greenish to-lime"
                     onClick={() => scrollBy(1000, 0)}>
                      {" "}
                      Tell me more!
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3 ">
                    <a
                      href="/add"
                      className="flex w-full items-center justify-center rounded-md border-2  hover:text-lime focus:ring-4 focus:outline-none px-8 py-3 text-2xl lg:text-base font-bold  md:py-4 md:px-10"> Contribute </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-1/2 bg-no-repeat hidden md:block bg-auto bg-[url('https://images.unsplash.com/photo-1530031092055-18d4a16ff6e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80')] h-auto" aria-label="Banner with a Queer liberation not rainbow capitalism, from the Pride parade in Geneva (Switzerland), July 2019." ></div>
            </main>

{/* Microagressions from MongoDB */}

    <div className="flex flex-row bg-purple-700 mx-auto lg:mt-32 sm:justify-center  lg:gap-8 md:py-8 sm:px-6 lg:px-8">
      <div className='lg:max-w-5xl'> 
      <h1 className="sm:text-4xl md:text-5xl lg:text-6xl font-black text-lime tracking-tight lg:mb-4 lg:pb-4 drop-shadow-lg shadow-lime text-center md:text-left ">What are microagressions? </h1>
      <p className=' text-white font-light text-2xl leading-normal lg:text-2xl text-center md:text-left sm:my-6 px-6 lg:px-0' > Assuming someone's gender pronouns, not asking about their pronouns, and continuing to use the wrong pronouns after the correct ones have been shared is one very common example of microaggression that deny the personal experience, emotions, or thoughts of a person. Start browsing to learn more about microagressions and their impact.</p>
      <div className="justify-center mx-auto lg:grid lg:grid-flow-row lg:gap-8 lg:my-2 py-8 max-w-2xl grid-cols-2 sm:grid-cols-1 px-8 sm:px-6 lg:px-8">
      {microagressions.length > 0 ? (
        <div className="p-4 rounded">
        <ul>
          {microagressions.map((microagression, index) => {
            return (
              <li key={index} className="sm:mb-0 md:mb-6" >
                <div>
                  <h2 className= "text-center text-black font-black text-4xl sm:my-6 tracking-tight md:tracking-normal md:py-4">{microagression.title}</h2>
                  <p className="font-normal text-lg mt-4 text-justify text-black tracking-tight md:tracking-normal"> {microagression.content}</p>
                </div>
                <p className="text-center font-normal lg:mt-6 ">
                  <a className="text-lime bg-purple text-xl text-xl sm:mb-0 md:mb-5" href={`/add/${microagression._id}`}>Want to contribute? Suggest revision of the microagression</a> </p>    
                  <p className="text-center font-normal ">  <a href="/resources" className="text-white text-xl mb-0"> How to address microagressions? </a>  </p>               

{/* DELETE option */}

                  {/* <button className='text-lime bg-purple text-l mb-0' onClick={() => handleDeleteMicroagression(microagression._id as string)}>
                    Delete
                  </button> */}
              </li>
            );
          })}
        </ul>
        </div>
        
      ) : (
        <h2 className="posts-body-heading">Ooops! No microagressions added so far</h2>
      )}
    </div>
    </div>
    </div>  
    </div> 
);

}

export async function getServerSideProps() {
  try {
    let response = await fetch('http://localhost:3000/api/getMicroagressions');
    let microagressions = await response.json();

    return {
      props: { microagressions: JSON.parse(JSON.stringify(microagressions)) },
    };
  } catch (e) {
    console.error(e);
  }
}
