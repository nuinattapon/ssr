import Document, { Head, Main, NextScript } from "next/document"

export default class DefaultDocument extends Document {
  static async getInitialProps(props) {
    return await Document.getInitialProps(props)
  }

  render() {
    return (
      <html lang={this.props.__NEXT_DATA__.props.lang || "en"}>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
