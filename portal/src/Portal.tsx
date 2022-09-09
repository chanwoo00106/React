import ReactDom from "react-dom";

interface PortalType {
  children: React.ReactNode;
}

const Portal = ({ children }: PortalType) => {
  const el = document.getElementById("popup");

  if (!el) throw new Error("Not found popup element");

  return ReactDom.createPortal(children, el);
};

export default Portal;
