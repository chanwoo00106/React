import AuthBind from "@src/data/auth/AuthBind";
import { Container } from "inversify";

const container = new Container();

AuthBind(container);

export default container;
