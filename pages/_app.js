import '../styles/globals.css'
import Script from "next/script";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Component {...pageProps} />
            {/*se ejecuta una ves se carga la pagina */}
            <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-673TEBJSGT"/>
            {/*<Script id="google-analytics" strategy="afterInteractive">*/}
            {/*    {`*/}
            {/*        window.dataLayer = window.dataLayer || [];*/}
            {/*        function gtag(){dataLayer.push(arguments);}*/}
            {/*        gtag('js', new Date());*/}
            {/*        gtag('config', 'G-673TEBJSGT');*/}
            {/*    `}*/}
            {/*</Script>*/}
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-673TEBJSGT', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
            />
        </>
    )
}

export default MyApp
