import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link
              rel="stylesheet"
              href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
            ></link>
            <link rel='icon' href='/assets/ubcare_tech_logo.png'></link>
            <script src="https://d3js.org/d3.v7.min.js"></script>
        </Head>
        <body className="bg-white dark:bg-black text-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
