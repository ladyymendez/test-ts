import styled from "styled-components";
// import tw from "twin.macro";


export const Wrapper = styled.main.attrs(() => ({
  className: "flex flex-col h-screen justify-center items-center bg-gray-100",
}))``

export const Cards = styled.div.attrs(() => ({
  className: "bg-white text-center rounded py-8 px-5 shadow max-w-xs",
}))``

export const Title = styled.div.attrs(() => ({
  className: "uppercase tracking-wide text-lg text-indigo-600 font-bold",
}))``

export const Status = styled.div.attrs(() => ({
  className: "text-right text-base text-orange-600",
}))``

export const Img = ({ url }: { url: string }) => {
  return (<img src={url} className="bg-fixed h-auto w-auto" alt="" />
  )
};

export const Content = styled.div.attrs(() => ({
  className: "text-left font-mono text-blue-500",
}))``
