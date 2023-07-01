import axios from "axios";
import http from "./axios";
import store from "../app/store";
import { setUser } from "../app/slice/userSlice";
import { useDispatch } from "react-redux";

export async function loginMenu(email, password) {
  try {
    console.log(email, password, "dari service");
    const response = await http.post("login", {
      email,
      password,
    });

    console.log(response, "response dari login");

    store.dispatch(
      setUser({
        picture: response.data.picture,
      })
    );

    return response;
  } catch (error) {
    console.log(error);
  }
}
