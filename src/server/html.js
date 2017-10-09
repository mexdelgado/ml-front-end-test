export default function html(options) {
  const {
    app = 'main',
    title = 'Mercado Libre App',
    stylesheet = '/assets/css/app.css',
    markup,
    initialState
  } = options;

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${title}</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link rel="manifest" href="./public/assets/images/manifest.json">
        <link rel="shortcut icon" href="./public/assets/images/favicon.ico">
        <link rel="stylesheet" href="${stylesheet}" />
      </head>
      <body>
        <div id="root">${markup}</div>

        <script>
          window.initialState = ${JSON.stringify(initialState)};
        </script>
        <script src="/app/vendor.bundle.js"></script>
        <script src="/app/${app}.bundle.js"></script>
      </body>
    </html>
  `;
}
