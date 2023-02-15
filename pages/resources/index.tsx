
import Image from "next/image";


function Resources () {
return (
    <> 

        <section className=" m-8 mx-auto max-w-7xl"> 
             <div className="grid sm:grid-cols-1 md:grid-cols-3 md:gap-7 sm:gap-3 gap-3 md:mb-2 grid-col-1 ">
                <div className="grid-item md:mb-2 text-center"> 
            <a href="/resources/avoid"> 
            <Image
            src="https://images.unsplash.com/photo-1591457410079-5f4ba0206fe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="Picture of the author"
            width={500}
            height={500}
            sizes=""
            className="object-cover mx-auto h-min md:h-1/2 md:w-full w-4/6 rounded-lg"
            />
              {/* <img  className="object-cover mx-auto h-min md:h-1/2 md:w-full w-4/6 rounded-lg" src="https://images.unsplash.com/photo-1591457410079-5f4ba0206fe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"> */}
            <h3 className="text-black my-4 mx-auto lg:mx-2 py-4 text-4xl font-bold lg:leading-8 tracking-normal  text-gray-900r"> 
              How to avoid causing microagressions?
          </h3>
        </a>
          <p className="text-xl text-gray-900 px-2"> As suggested by the name, microaggressions seem small, but compounded over time, they can have an enormous impact on a person’s experience, health, and overall well-being.</p>
       </div>

       <div className="grid-item md:mb-2 text-center"> 
        <a href="/respond"> 
        <Image
            src="https://images.unsplash.com/photo-1596796099969-bdada13e2a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Picture of the author"
            width={500}
            height={500}
            sizes=""
            className="lg:object-cover mx-auto h-min lg:h-1/2 lg:w-full w-4/6 rounded-lg"
            />
        <h3 className=" my-4 mx-2 py-4 text-4xl font-bold md:leading-8 tracking-normal text-gray-900"> 
          How to respond to microagression? 
      </h3>
    </a>
    <p className="text-xl text-gray-900 px-2"> There is no single correct way to respond to microaggressions, but here are some helpful tips from researchers to help better navigate the microaggression.</p> 

  </div>

   <div className="grid-item md:mb-2 text-center"> 
    <a href="/info"> 
    <Image
            src="https://images.unsplash.com/photo-1629787606112-52736c09ea5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            alt="Picture of the author"
            width={500}
            height={500}
            sizes=""
            className="object-cover mx-auto h-min md:h-1/2 md:w-full w-4/6 rounded-lg"
            />

    <h3 className=" my-4 mx-2 py-4 text-4xl font-bold md:leading-8 tracking-normal text-gray-900"> 
    Find out more about microagressions
  </h3>
</a>
<p className="text-xl text-gray-900 mx-2"> It's time to share what we know about microagressions so more people can be mindful about their everyday comments and actions. Check out resources to become a better ally. </p> </div>
</div>
</section> 

 </>
)
}

export default Resources;