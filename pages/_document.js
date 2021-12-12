import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <meta name="description" content=""/>
        <meta name="author" content=""/>

        <title>Hospital Site - NextJs</title>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet"/>

        <link href="css/bootstrap.min.css" rel="stylesheet"/>

        <link href="css/bootstrap-icons.css" rel="stylesheet"/>

        <link href="css/owl.carousel.min.css" rel="stylesheet"/>

        <link href="css/owl.theme.default.min.css" rel="stylesheet"/>

        <link href="css/templatemo-medic-care.css" rel="stylesheet"/>

        </Head>
        <body>
          <Main />
          <NextScript />
            <script async src="js/jquery.min.js"></script>
            <script async src="js/bootstrap.bundle.min.js"></script>
            <script async src="js/owl.carousel.min.js"></script>
            <script async src="js/scrollspy.min.js"></script>
            <script async src="js/custom.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument