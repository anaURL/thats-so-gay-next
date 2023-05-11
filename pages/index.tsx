import { useState } from "react";
import { useScrollBy } from "react-use-window-scroll";
import { getMicroagressions } from './api/getMicroagressions';


type Props = {
  microagressionsProp: [Microagression];
};

type Microagression = {
  _id: string;
  title: string;
  content: string;
};

export default function Microagressions(props: Props) {
  const [microagressionsState, setMicroagressionsState] = useState<
    [Microagression]
  >(props.microagressionsProp);
  const scrollBy = useScrollBy();

  {
    /* Handling delete option */
  }

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
    <div>
      <main className="md:flex md:flex-row md:mx-auto h-screen items-center justify-center">
        <div className="flex-1 lg:max-w-100 py-12 lg:py-56 md:flex lg:basis-1/2">
          <div className="md:w-full text-center overflow-hidden justify-items-center">
            <h1 className="block items-center text-7xl lg:text-8xl font-black text-lime tracking-tight mb-4 drop-shadow-lg shadow-lime text-center lg:p-12">
              That's so gay!
            </h1>
            <p className="block xl:inline text-white font-light text-3xl md:leading-normal lg:text-5xl text-center overflow-hidden mx-4 p-4">
              Why you shouldn't be using this and other microagressions toward
              the queer community
            </p>
            <div className="mt-5 sm:m-8 sm:flex flex-row sm:justify-center">
              <div className="rounded-md">
                <button
                  className="rounded-md border-2 px-8 py-3 lg:text-base font-bold md:py-4 md:px-10 text-black bg-gradient-to-r from-greenish to-lime"
                  onClick={() => scrollBy(1000, 0)}
                >
                  Tell me more!
                </button>
              </div>
              <div className="sm:flex md:mx-2 sm:justify-center">
                <a
                  href="/contribute"
                  className="mx-auto items-center justify-center rounded-md border-2 text-base font-bold py-3 px-10 md:text-lg text-black"
                >
                  Contribute
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-initial h-screen lg:w-1/2 lg:bg-contain lg:bg-no-repeat lg:bg-center lg:block" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1530031092055-18d4a16ff6e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80)", height: '100vh' }} aria-label="Banner with a Queer liberation not rainbow capitalism, from the Pride parade in Geneva (Switzerland), July 2019."></div>

      </main>

      {/* Retrieving microagressions from MongoDB */}

      <div className="lg:flex md:flex flex flex-col">
        <div className="lg:mt-32 mt-12 sm:justify-center lg:gap-8 md:py-8 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-5xl lg:text-7xl font-black text-lime tracking-tight lg:mb-4 lg:pb-4 drop-shadow-lg shadow-lime text-center">
            What are microagressions?{" "}
          </h1>
          <p className="text-white font-light text-2xl leading-normal lg:text-4xl text-center m-4 sm:my-6 px-6 lg:px-0">
            {" "}
            Assuming someone's gender pronouns, not asking about their pronouns,
            and continuing to use the wrong pronouns after the correct ones have
            been shared is one very common example of microaggression that deny
            the personal experience, emotions, or thoughts of a person. Start
            browsing to learn more about microagressions and their impact.
          </p>
        </div>

        <div className="columns-1 lg:columns-2 my-2 sm:px-6 lg:px-8 gap-6 flex justify-center ">
          {microagressionsState.length > 0 ? (
            <ul className="m-4 text-center max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
              {microagressionsState.map((microagression, index) => {
                return (
                  <li
                    key={index}
                    className="mb-4 md:mb-6 bg-white p-6 rounded-md inline-block"
                  >
                    <div className="">
                      <h2 className="text-center text-black font-black text-4xl sm:my-4 tracking-tight md:tracking-normal md:py-4">
                        {microagression.title}
                      </h2>
                      <p className="font-normal text-lg mt-2 text-justify text-black tracking-tight md:tracking-normal mb-4 break-words">
                        {" "}
                        {microagression.content}
                      </p>
                      <p className="text-center font-normal  lg:mt-2">
                        {" "}
                        <a
                          href="/resources"
                          className="text-lime bg-purple text-xl sm:mb-0  "
                        >
                          {" "}
                          How to address microaggressions?{" "}
                        </a>{" "}
                      </p>
                      <p className="text-center font-normal lg:mt-2 ">
                        {" "}
                        <a
                          className="text-purple text-xl mb-0 md:mb-5 "
                          href={`/contribute/${microagression._id}`}
                        >
                          Want to contribute? Suggest revision of the
                          microagression
                        </a>{" "}
                      </p>
                    </div>

                    {/* DELETE option */}

                    {/* <button className='text-lime bg-purple text-l mb-0' onClick={() => handleDeleteMicroagression(microagression._id as string)}>
                    Delete
                  </button> */}
                  </li>
                );
              })}
            </ul>
          ) : (
            <h2 className="posts-body-heading">
              Ooops! No microagressions added so far
            </h2>
          )}
        </div>
        <div className="m-3 sm:mt-6 sm:ml-6 items-center">
          <a
            href="/contribute"
            className="mx-auto flex md:w-1/3 items-center justify-center rounded-md border-2 px-8 py-3  text-base font-bold md:py-4 md:px-10 md:text-lg  text-black bg-gradient-to-r from-greenish to-lime"
          >
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const microagressions = await getMicroagressions();
    return {
      props: {
        microagressionsProp: JSON.parse(JSON.stringify(microagressions)),
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: {
        microagressionsProp: [],
      },
    };
  }
}
