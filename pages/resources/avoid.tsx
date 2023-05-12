import Link from "next/link";

function Avoid() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center md:px-12 my-6">
          <h1 className="md:mt-2 lg:text-7xl md:text-7xl text-4xl font-black sm:leading-8 md:tracking-tight md:px-8 text-lime">
            How to avoid causing microagressions?
          </h1>
          <h3 className="text-2xl py-5 font-light md:mt-8 text-white">
            {" "}
            As suggested by the name, microaggressions seem small; but
            compounded over time, they can have an enormous impact on a person’s
            experience, health, and overall well-being. Research suggests that
            subtle forms of interpersonal discrimination like microaggressions
            are at least as harmful as more-overt expressions of discrimination.
            Below are some helpful tips from researchers to consider:{" "}
          </h3>
        </div>

        <div className="text-center mx-auto my-8 hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1591457410079-5f4ba0206fe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="Banner with a Queer liberation not rainbow capitalism, from the Pride parade in Geneva (Switzerland), July 2019."
            className="w-full max-w-7xl mx-auto rounded-md "
          />
        </div>

        <section className="bg-white py-4 mx-auto my-4 px-8 sm:px-6 lg:px-8 text-gray-900 rounded-md">
          <h2 className="text-3xl m-4 mt-8 font-black"> ⏯ PAUSE</h2>
          <p className="text-2xl m-4">
            {" "}
            Don’t be in a rush to speak or act. Pause before asking someone a
            personal question. Pause before you describe a person’s personality
            in a certain way. Pause before you make a comparison between someone
            and something else you’ve seen. These simple thoughts and moments
            are where bias lives so taking a second to think about it make all
            the difference.{" "}
          </p>

          <h2 className="text-3xl m-4 mt-8 font-black"> 🤨 QUESTION </h2>
          <p className="text-2xl m-4">
            {" "}
            Ask yourself these important questions. Is your brain getting stuck
            on differences that you’re noticing? Are they triggering things that
            you subconsciously believe? Are you making assumptions because of
            these beliefs? What will the person I’m interacting with feel or
            think when I say or do this? Awareness of our own bias comes when we
            answer these questions for ourselves.{" "}
          </p>

          <h2 className="text-3xl m-4 mt-8 font-black"> 🖼 REFRAME </h2>
          <p className="text-2xl m-4">
            See the bigger picture. Sit in the uncomfortableness of your
            questions. List the things you can do to change your thoughts and
            behaviors. This could include researching other cultures and the
            history of certain phrases to acknowledging the systems that give
            you the privilege of removing offensive phrases from your vocabulary
            one by one. Stop your defensive thoughts. Acknowledge that you can
            cause microaggressions, but it doesn’t make you a bad person.
            Unlearning bias won’t happen overnight.
          </p>

          <p className="text-xl text-opacity-10 mx-4 my-8">
            Source:{" "}
            <a
              href="https://hbr.org/2020/07/when-and-how-to-respond-to-microaggressions"
              target="_blank"
            >
              Harvard Business Review
            </a>
            ,{" "}
            <a href="https://www.themicropedia.org/" target="_blank">
              Micropedia{" "}
            </a>{" "}
          </p>
        </section>

        <section className="flex py-4 mx-auto my-6 max-w-7xl px-8 sm:px-6 lg:px-8 justify-center">
          <Link href="/resources/respond">
            <div className="object-contain relative inline-flex items-center justify-center mb-2 mr-2 overflow-hidden text- md:text-xl font-medium bg-white p-6 text-purple rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white">
              How to respond to microaggressions?
            </div>
          </Link>
          <Link href="/resources">
            <div className="object-contain relative inline-flex items-center justify-center mb-2 mr-2 overflow-hidden text- md:text-xl font-medium bg-white p-6 text-grey rounded-lg ">
              Back to resources
            </div>
          </Link>
        </section>
      </div>
    </>
  );
}
export default Avoid;
