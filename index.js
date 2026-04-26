const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>VitiMini OS</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    font-family: system-ui;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .container { text-align: center; }
                .logo { font-size: 64px; margin-bottom: 20px; }
                h1 { font-size: 48px; margin-bottom: 10px; }
                p { font-size: 18px; opacity: 0.9; }
                .status { position: fixed; bottom: 20px; left: 20px; font-size: 12px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="logo">📱</div>
                <h1>VitiMini OS</h1>
                <p>Мозок працює. Google Drive підключимо за хвилину.</p>
            </div>
            <div class="status" id="status"></div>
            <script>
                document.getElementById('status').innerText = 'Сервер активний: ' + new Date().toLocaleTimeString();
            </script>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(\`🧠 VitiMini Brain працює на порту \${port}\`);
});
