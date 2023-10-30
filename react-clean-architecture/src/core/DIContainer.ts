import AuthBind from "@src/data/auth/AuthBind";
import BaseBind from "@src/data/base/BaseBind";
import { Container } from "inversify";

const container = new Container();

BaseBind(container);
AuthBind(container);

export default container;
