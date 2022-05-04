import Header from "./Header";

const HeaderOnly = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="contaiter">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default HeaderOnly;
