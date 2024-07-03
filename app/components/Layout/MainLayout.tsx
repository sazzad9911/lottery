"use client";
import { Provider } from "react-redux";
import Footer from "../Footer";
import Header from "../Header";
import { store } from "@/app/redux/store";
import { ChakraProvider } from "@chakra-ui/react";

export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <ChakraProvider>
        <Provider store={store}>
          <Header></Header>
          {children}
          <Footer></Footer>
        </Provider>
      </ChakraProvider>
    </section>
  );
}
