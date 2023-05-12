import Link from "next/link";


function Respond() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center md:px-12 my-6">
          <h1 className="md:mt-2 lg:text-7xl md:text-7xl text-4xl font-black sm:leading-8 md:tracking-tight md:px-8 text-lime">
            How to respond to microaggressions?
          </h1>
          <h3 className="text-2xl py-5 font-light md:mt-8 text-white">
            As suggested by the name, microaggressions seem small; but compounded over time, they can have an enormous impact on a person’s experience, health, and overall well-being. Research suggests that subtle forms of interpersonal discrimination like microaggressions are at least as harmful as more-overt expressions of discrimination. Below are some helpful tips from researchers to consider:
          </h3>
        </div>
      </div>

      <div className="text-center mx-auto my-8 hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1596796099969-bdada13e2a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Banner with a Queer liberation not rainbow capitalism, from the Pride parade in Geneva (Switzerland), July 2019."
          className="w-full max-w-7xl mx-auto rounded-md "
        />
      </div>
        {/* <div className="bg-center hidden md:block h-screen bg-no-repeat bg-auto bg-[url('https://images.unsplash.com/photo-1596796099969-bdada13e2a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] h-auto"></div> */}
      
      <section className="bg-white py-4 mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 text-gray-900  rounded-md">
        <p className="text-2xl m-4">
          {" "}
          When you’re an LGBTIQ person living in a heteronormative and
          cisnormative world, encounters of subtle discrimination, known as
          microaggressions, are a frustrating yet often unavoidable part of
          daily life. Understanding that complete prevention is probably
          impossible — how should we respond to the microaggressions we face,
          within and outside of current discussions around gender identity and
          sexual orientation?
        </p>

        <h2 className="text-3xl m-4 mt-8 font-black"> 🧐 DETERMINE </h2>
        <p className="text-2xl m-4">
          {" "}
          Do you respond? You don’t have to. Addressing a microaggression takes
          effort and you’re not obliged to do it. Is the person important to
          you? Will speaking up or staying silent have consequences? Think about
          how you feel and whether the effort is worth it for you.{" "}
        </p>

        <h2 className="text-3xl m-4 mt-8 font-black"> 🎙 DISARM </h2>
        <p className="text-2xl m-4">
          {" "}
          When people are called out, it’s in their nature to feel defensive.
          Help them understand that these kinds of conversations can be
          uncomfortable for everyone but that it’s worth it to you both to
          openly discuss it. Invite them to sit alongside you in the awkwardness
          of their words or deeds while you get to the root of their behavior
          together.
        </p>

        <h2 className="text-3xl m-4 mt-8 font-black"> ✊🏿 RESIST </h2>
        <p className="text-2xl m-4">
          {" "}
          Use a question, such as “How do you mean that?”. This gives people a
          chance to check themselves as they unpack what happened. Acknowledge
          that you accept their intentions to be as they stated but reframe the
          conversation around the impact of the microaggression. Explain how you
          initially interpreted it and why. If they continue to assert that they
          “didn’t mean it like that,” remind them that you appreciate their
          willingness to clarify their intent and hope they appreciate your
          willingness to clarify their impact.{" "}
        </p>

        <h2 className="text-3xl m-4 mt-8 font-black"> 🏳️‍🌈🏳️‍⚧️ DECIDE </h2>
        <p className="text-2xl m-4">
          What can you control? It won’t be what people say/do to you, but you
          can control what you take from the situation and what it takes from
          you. Life is sufficiently taxing without allowing microaggressions to
          bring you down. Let protecting your joy be your greatest and most
          persistent act of resistance.
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
          <Link href="/resources/avoid">
            <div className="object-contain relative inline-flex items-center justify-center mb-2 mr-2 overflow-hidden text- md:text-xl font-medium bg-white p-6 text-purple rounded-lg ">
              How to avoid causing microaggressions?
            </div>
          </Link>

          <Link href="/resources">
            <div className="object-contain relative inline-flex items-center justify-center mb-2 mr-2 overflow-hidden text- md:text-xl font-medium bg-white p-6 text-grey rounded-lg ">
              Back to resources
            </div>
          </Link>
        </section>

    </>
  );
}

export default Respond;
