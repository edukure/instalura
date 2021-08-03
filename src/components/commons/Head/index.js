import React from 'react';
import Head from 'next/head';

export default function IndexHead() {
  return (
        <>
            <Head>

                <title>Instalura</title>
                <meta name="description" content="Site criado com React, Next/js e styled-components que está sendo desenvolvido durante o Bootcamp Front-End Avançado da Alura." />
                <meta name="author" content="Carol Andrade Santos" />
                <meta name="keywords" content="Next.js, JAMStack, Alura, Instalura" />
                <meta httpEquiv="content-language" content="pt-br, en-US" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                <meta property="og:url" content="https://instalura-cas.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Site Instalura" />
                <meta property="og:image" content="https://i.postimg.cc/XY8CsCyB/homepage-Desktop-1.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="800" />
                <meta property="og:image:height" content="600" />
                <meta property="og:description" content="Vem conferir o projeto do Bootcamp Front-End Avançado da Alura!" />

                <link rel="icon" sizes="32x32" href="https://i.postimg.cc/pVmd1F18/alura-Iconalura-Icon.png" type="image/png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />
            </Head>
        </>
  );
}
