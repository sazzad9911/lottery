"use client";
import { Provider } from "react-redux";
import Footer from "../Footer";
import Header from "../Header";
import { store } from "@/app/redux/store";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import { setLanguage } from "@/app/redux/features/languageSlice";
import { usePathname } from "next/navigation";

export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const language = localStorage.getItem("language");
    if (language) {
      store.dispatch(setLanguage(language));
    }
  }, []);
  const pathname = usePathname();
  if (pathname.includes("/user")) {
    return (
      <section>
        <ChakraProvider>
          <Provider store={store}>
            <div className="bg-[#F5F5F5]">{children}</div>
          </Provider>
        </ChakraProvider>
      </section>
    );
  }
  return (
    <section>
      <ChakraProvider>
        <Provider store={store}>
          <Header></Header>
          <div className="bg-[#F5F5F5] pt-20 md:pt-24">{children}</div>
          <Footer></Footer>
        </Provider>
      </ChakraProvider>
    </section>
  );
}
