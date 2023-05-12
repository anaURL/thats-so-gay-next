// import React, { useState } from "react";
// import type { GetServerSideProps, NextPage } from "next";
// import clientPromise from "../../lib/mongodb";

// type PageParams = {
//   id: string;
// };

// type ContentPageProps = {
//   microagression: Microagression;
// };

// type Microagression = {
//   _id: string;
//   title: string;
//   content: string;
// };

// type ResponseFromServer = {
//   title: string;
//   content: string;
//   _id: string;
// };

// export const getServerSideProps: GetServerSideProps<ContentPageProps, PageParams> = async ({
//   params,
// }) => {
//   const client = await clientPromise;
//   const db = client.db("Microagressions");
//   const microagression = await db
//     .collection("microagressions")
//     .findOne({ _id: params?.id });

//   client.close();

//   if (!microagression) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       microagression: {
//         _id: microagression._id,
//         title: microagression.title,
//         content: microagression.content,
//       },
//     },
//   };
// };

// const EditMicroagression: NextPage<ContentPageProps> = ({
//   microagression: { _id, title, content },
// }) => {
//   const [microagressionTitle, setMicroagressionTitle] = useState(title);
//   const [microagressionContent, setMicroagressionContent] = useState(content);
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     if (microagressionTitle && microagressionContent) {
//       try {
//         let response = await fetch("/api/addMicroagression", {
//           method: "POST",
//           body: JSON.stringify({
//             title: microagressionTitle,
//             content: microagressionContent,
//           }),
//           headers: {
//             Accept: "application/json, text/plain, */*",
//             "Content-Type": "application/json",
//           },
//         });
//         response = await response.json();
//         setMicroagressionTitle("");
//         setMicroagressionContent("");
//         setError("");
//         setMessage("Microaggression edited successfully");
//       } catch (errorMessage: any) {
//         setError(error.toString());
//       }
//     } else {
//       return setError("All fields are required");
//     }
//   };

//   // no such microaggression exists
//   if (!title && !content && !_id && process.browser) {
//     return (window.location.href = "/");
//   }

//   return (
//           <>
//             <form onSubmit={handleSubmit} className="form">
//               {error ? <div className="alert-error">{error}</div> : null}
//               {message ? <div className="alert-message">{message}</div> : null}
//               <div className="form-group">
//                 <label>Title</label>
//                 <input
//                   type= "text"
//                   placeholder= "Title of the microagression"
//                   onChange={(e) => setMicroagressionTitle(e.target.value)}
//                   value={microagressionTitle ? microagressionTitle : ""}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Content</label>
//                 <textarea
//                   name= "content"
//                   placeholder= "Content of the microagression"
//                   value={microagressionContent ? microagressionContent : ""}
//                   onChange={(e) => setMicroagressionContent(e.target.value)}
//                   cols={20}
//                   rows={8}
//                 />
//               </div>
//               <div className="form-group">
//               <button type="submit" className="rounded border-2 p-2 text-lime"> 
//               Update microagression
//                 </button>
//               </div>
//             </form>
//           </>
//         );
//       }



// // import React, { useState } from "react";
// // import type { GetStaticPropsContext, GetStaticPropsResult } from "next";
// // import clientPromise from '../../lib/mongodb';



// // type PageParams = {
// //     id: string;
// //   };
  
// //   type ContentPageProps = {
// //     microagression: Microagression;
// //   };
  
// //   type Microagression = {
// //     _id: string;
// //     title: string;
// //     content: string;
// //   };
  
// //   type ResponseFromServer = {
// //     title: string;
// //     content: string;
// //     _id: string;
// //   };

// //   export async function getStaticProps({
// //     params,
// //   }: GetStaticPropsContext<PageParams>): Promise<
// //     GetStaticPropsResult<ContentPageProps>
// //   > {
// //     try {
// //       let response = await fetch(
// //         "/api/getMicroagression?id=" + params?.id
// //       );
  
// //       let responseFromServer: ResponseFromServer = await response.json();
  
// //       return {
// //         // Passed to the page component as props
// //         props: {
// //           microagression: {
// //             _id: responseFromServer._id,
// //             title: responseFromServer.title,
// //             content: responseFromServer.content,
// //           },
// //         },
// //       };
// //     } catch (e) {
// //       console.log("error ", e);
// //       return {
// //         props: {
// //           microagression: {
// //             _id:"  ",
// //             title:"  ",
// //             content:"  ",
// //           },
// //         },
// //       };
// //     }
// //   }
  
// //   // export async function getStaticPaths() {
// //   //   let microagressions = await fetch("/api/getMicroagressions");
  
// //   //   let microagressionFromServer: [Microagression] = await microagressions.json();
// //   //   return {
// //   //     paths: microagressionFromServer.map((microagression) => {
// //   //       return {
// //   //         params: {
// //   //           id: microagression._id,
// //   //         },
// //   //       };
// //   //     }),
// //   //     fallback: false, // can also be true or 'blocking'
// //   //   };
// //   // }


// //   export async function getServerSideProps() {
// //     const client = await clientPromise;
// //     const db = client.db('Microagressions');
// //     const microagressions = await db.collection('microagressions').find({}).toArray();
// //     client.close();
  
// //     return {
// //       props: {
// //         microagressionsProp: microagressions.map((microagression) => {
// //           return {
// //             params: {
// //               id: microagression._id.toString(),
// //             },
// //           };
// //         }),
// //       },
// //     };
// //   }
  

// //   export default function EditMicroagression({microagression: { _id, title, content },
// //   }: ContentPageProps) {
// //     const [microagressionTitle, setMicroagressionTitle] = useState(title);
// //     const [microagressionContent, setMicroagressionContent] = useState(content);
// //     const [error, setError] = useState("");
// //     const [message, setMessage] = useState("");
  
// //     const handleSubmit = async (e: any) => {
// //       e.preventDefault();
// //       if (microagressionTitle && microagressionContent) {
// //         try {
// //           let response = await fetch(
// //             "/api/addMicroagression",
// //             {
// //               method: "POST",
// //               body: JSON.stringify({
// //                 title: microagressionTitle,
// //                 content: microagressionContent,
// //               }),
// //               headers: {
// //                 Accept: "application/json, text/plain, */*",
// //                 "Content-Type": "application/json",
// //               },
// //             }
// //           );
// //           response = await response.json();
// //           setMicroagressionTitle("");
// //           setMicroagressionContent("");
// //           setError("");
// //           setMessage("Microagression edited successfully");
// //         } catch (errorMessage: any) {
// //             setError(error.toString());
// //         }
// //       } else {
// //         return setError("All fields are required");
// //       }
// //     };
  
// //     // no such microagression exists
// //     if (!title && !content && !_id && process.browser) {
// //       return (window.location.href = "/");
// //     }
  
// //     return (
// //       <>
// //         <form onSubmit={handleSubmit} className="form">
// //           {error ? <div className="alert-error">{error}</div> : null}
// //           {message ? <div className="alert-message">{message}</div> : null}
// //           <div className="form-group">
// //             <label>Title</label>
// //             <input
// //               type= "text"
// //               placeholder= "Title of the microagression"
// //               onChange={(e) => setMicroagressionTitle(e.target.value)}
// //               value={microagressionTitle ? microagressionTitle : ""}
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label>Content</label>
// //             <textarea
// //               name= "content"
// //               placeholder= "Content of the microagression"
// //               value={microagressionContent ? microagressionContent : ""}
// //               onChange={(e) => setMicroagressionContent(e.target.value)}
// //               cols={20}
// //               rows={8}
// //             />
// //           </div>
// //           <div className="form-group">
// //           <button type="submit" className="rounded border-2 p-2 text-lime"> 
// //           Update microagression
// //             </button>
// //           </div>
// //         </form>
// //       </>
// //     );
// //   }