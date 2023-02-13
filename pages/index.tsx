import {useState} from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
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


  const handleDeleteMicroagression = async (microagressionId: string) => {
    try {
      let response = await fetch(
        "http://localhost:3000/api/deleteMicroagression?id=" + microagressionId,
        {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        }
      );
      response = await response.json();
      window.location.reload();
    } catch (error) {
      console.log("An error occurred while deleting ", error);
    }
  };


return (
    <div >
        <main className="flex flex-row h-screen">
            <div className="lg:max-w-3xl py-32 sm:py-48 lg:py-56 items-start flex basis-1/2">
              <div className="lg:max-w-xl text-center overflow-hidden">
                <h1 className="block items-center text-7xl lg:text-5xl font-black text-lime tracking-tight mb-4 drop-shadow-lg shadow-lime text-center overflow-hidden">
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
                      className="flex w-full items-center justify-center rounded-md border-2  hover:text-lime focus:ring-4 focus:outline-none px-8 py-3 text-2xl lg:text-base font-bold  md:py-4 md:px-10"
                    >
                      Contribute
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-contain bg-no-repeat flex-auto  sm:basis-1/4 lg:basis-1/4">
          <Image
          src="https://images.unsplash.com/photo-1530031092055-18d4a16ff6e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="A person with amazing makeup"
          className="h-full w-full object-cover lg:h-full lg:w-full"
          sizes="100vw"
          width={500}
          height={500}
          blurDataURL="data:..."
          placeholder="blur"
          priority // Optional blur-up while loading
        /> 
        </div>
        </main>


    <div className="flex flex-row  bg-purple-700 mt-32 justify-center lg:grid lg:grid-flow-row lg:gap-8 py-8 lg:grid-cols-2 sm:grid-cols-1 px-8 sm:px-6 lg:px-8">
      <div className='lg:max-w-5xl'> 
      <h1 className="text-7xl lg:text-5xl font-black text-lime tracking-tight mb-4 drop-shadow-lg shadow-lime text-center overflow-hidden">What are microagressions? </h1>
      <p className=' xl:inline text-white font-light text-4xl leading-normal lg:text-2xl text-center overflow-hidden'> Assuming someone's gender pronouns, not asking about their pronouns, and continuing to use the wrong pronouns after the correct ones have been shared is one very common example of microaggression that deny the personal experience, emotions, or thoughts of a person. Start browsing to learn more about microagressions and their impact.</p>
      <div className="justify-center mx-auto lg:grid lg:grid-flow-row lg:gap-8 lg:my-2 py-8 max-w-2xl grid-cols-2 sm:grid-cols-1 px-8 sm:px-6 lg:px-8">
      {microagressions.length > 0 ? (
        <ul>
          {microagressions.map((microagression, index) => {
            return (
              <li key={index} >
                <div>
                  <h2 className='className= "text-center text-black font-black text-4xl md:my-6 tracking-tight md:tracking-normal"'>{microagression.title}</h2>

                  <p className="font-normal text-lg mt-4 text-justify text-black tracking-tight md:tracking-normal"> {microagression.content}</p>
                </div>
                <div className="text-grey bg-purple text-l  mb-0">
                  <a href={`/add/${microagression._id}`}>Edit</a>
                  <button className='text-lime bg-purple text-l mb-0' onClick={() => handleDeleteMicroagression(microagression._id as string)}>
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        
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
