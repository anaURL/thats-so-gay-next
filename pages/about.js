import Image
 from "next/image";
function About({title}) {
    return (
      <> 
<div class="bg-purple ">
  <div class="mx-auto items-center max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center md:px-12 my-6">
      <h1 className="md:mt-2 lg:text-7xl md:text-7xl text-4xl font-black sm:leading-8 md:tracking-tight md:px-8 text-lime"> On a mission to empower queer communities </h1>
      <h3 className="text-2xl py-5 font-light md:mt-8 text-white" > 'That's so gay' is a simple, easy-to-use, non-profit platform with aim to collect everyday microaggressions towards lesbian, gay, bisexual, trans, intersex and queer (LGBTIQ+) communities and highlight their harmful impact. </h3>
      <div className="mx-auto justify-items-center max-w-7xl px-4  md:px-8 sm:px-6 lg:px-8 "></div> 
        </div> 
        </div> 
        <div className="bg-center  hidden md:block h-screen bg-no-repeat bg-auto bg-[url('https://images.unsplash.com/photo-1573225041761-c902e0f8ab27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80')] h-auto" alt="Banner with a Queer liberation not rainbow capitalism, from the Pride parade in Geneva (Switzerland), July 2019."></div>
        <div className="bg-white w-auto md:my-4">
          <section className="py-4 mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
            <p className="text-gray-900 text-2xl m-4 mt-8">
              As a software developer with intrinsic passion and interest in
              women's and LGBTIQ+ human rights, I believe in technology as a tool
              for self-expression, deconstructing partiarchy and social change in
              general. As a queer person, I have experienced or witnessed most of
              the microagressions and therefore decided to use my tech skills to
              build a dedicated platform with the purpose of unlearning harmful
              behaviour toward queer community. This platform was build with a
              mission to help people learn about microaggressions without fear of
              judgement.{" "}
            </p>
         
          <p className="text-gray-900 text-2xl m-4 mt-8 pb-8">
            "That's so gay!" was heavily inspired by{" "}
            <a href="https://www.themicropedia.org" className="underline">the Micropedia
            </a>
            , the first encyclopedia of microagressions. I appreciate any feedback
            and suggestions on experienced microagressions, especially from the
            perspectives of the queer and other marginalized communities. Feel
            free contact me with any questions, feedback or suggestions.
          </p>
          </section>
        </div>
        </div>
      </>
    
    );
  }
  export default About;