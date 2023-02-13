export const Header = ({ title, description }) => {
  return (
    <>
      <header>
        <div className="bg-purple py-12 overflow-hidden">
          <div className="mx-auto items-center max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center  md:px-12 my-6">
              <h1 className="md:mt-2 lg:text-7xl md:text-7xl text-4xl font-black sm:leading-8 md:tracking-tight md:px-8">
                {" "}
                {title}{" "}
              </h1>
              <h3 className="text-2xl py-5 font-light md:mt-8">
                {description}
              </h3>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
