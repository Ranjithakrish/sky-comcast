'use client'
import { Provider } from "react-redux";
import { store } from "@/GlobalRedux/store";
import HomePage from "./app";

function Page() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>

  );
}

export default Page
