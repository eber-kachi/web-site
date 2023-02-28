// import Document, { Html, Head, Main, NextScript } from "next/document";

// class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx);
//     return { ...initialProps };
//     // return initialProps;
//   }

//   // static async getInitialProps(ctx) {
//   //   const originalRenderPage = ctx?.renderPage;

//   //   // Run the React rendering logic synchronously
//   //   // ctx.renderPage = () =>
//   //   //   originalRenderPage({
//   //   //     // Useful for wrapping the whole react tree
//   //   //     enhanceApp: (App) => App,
//   //   //     // Useful for wrapping in a per-page basis
//   //   //     enhanceComponent: (Component) => Component,
//   //   //   });

//   //   // Run the parent `getInitialProps`, it now includes the custom `renderPage`
//   //   const initialProps = await Document.getInitialProps(ctx);

//   //   return initialProps;
//   // }

//   render() {
//     return (
//       <Html lang="es">
//         <Head>
//           <link rel="preconnect" href="https://fonts.gstatic.com" />
//           <link
//             href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap"
//             rel="stylesheet"
//           />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// export default MyDocument;

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
