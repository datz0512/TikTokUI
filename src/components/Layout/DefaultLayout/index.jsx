import Header from "./Header";
import SideBar from "./SideBar";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="contaiter">
        <SideBar /> 
        <div className="content">
            {children}
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
